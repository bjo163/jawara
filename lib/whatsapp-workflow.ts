import { getWhatsAppConfig } from './whatsapp-config'
import type {
  PingResponse,
  StatusSessionResponse,
  StartSessionResponse,
  WhatsAppApiError,
  SessionStatusType,
} from '@/types/whatsapp'

export interface WorkflowResult {
  success: boolean
  step: 'ping' | 'status' | 'start' | 'complete'
  data?: StatusSessionResponse | PingResponse | StartSessionResponse
  error?: string
  details?: string
}

export class WhatsAppWorkflow {
  private readonly baseUrl: string

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
  }

  async executeFullWorkflow(): Promise<WorkflowResult> {
    try {
      // Step 1: Ping Check
      const pingResult = await this.checkPing()
      if (!pingResult.success) {
        return {
          success: false,
          step: 'ping',
          error: 'Server not responding',
          details: pingResult.error,
        }
      }

      // Step 2: Check Session Status
      const statusResult = await this.checkSessionStatus()
      if (!statusResult.success) {
        return {
          success: false,
          step: 'status',
          error: 'Failed to check session status',
          details: statusResult.error,
        }
      } // Step 3: Auto-start session if needed
      const needsStart = this.shouldStartSession(
        statusResult.data as StatusSessionResponse
      )
      if (needsStart) {
        const startResult = await this.startSession()
        if (!startResult.success) {
          return {
            success: false,
            step: 'start',
            error: 'Failed to start session',
            details: startResult.error,
          }
        }

        return {
          success: true,
          step: 'start',
          data: startResult.data,
        }
      }

      return {
        success: true,
        step: 'complete',
        data: statusResult.data,
      }
    } catch (error) {
      return {
        success: false,
        step: 'ping',
        error: 'Workflow execution failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  async checkPing(): Promise<WorkflowResult> {
    try {
      const response = await fetch(`${this.baseUrl}/api/whatsapp/ping`)
      const data: PingResponse | WhatsAppApiError = await response.json()

      if (!response.ok || !data.success) {
        return {
          success: false,
          step: 'ping',
          error: 'error' in data ? data.error : 'Ping failed',
          details: 'error' in data ? data.details : undefined,
        }
      }

      return {
        success: true,
        step: 'ping',
        data,
      }
    } catch (error) {
      return {
        success: false,
        step: 'ping',
        error: 'Network error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  async checkSessionStatus(): Promise<WorkflowResult> {
    try {
      const config = getWhatsAppConfig()
      const response = await fetch(
        `${this.baseUrl}/api/whatsapp/session/status/${config.sessionId}`
      )
      const data: StatusSessionResponse | WhatsAppApiError =
        await response.json()

      if (!response.ok || !data.success) {
        return {
          success: false,
          step: 'status',
          error: 'error' in data ? data.error : 'Status check failed',
          details: 'error' in data ? data.details : undefined,
        }
      }

      return {
        success: true,
        step: 'status',
        data,
      }
    } catch (error) {
      return {
        success: false,
        step: 'status',
        error: 'Network error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  async startSession(): Promise<WorkflowResult> {
    try {
      const config = getWhatsAppConfig()
      const response = await fetch(
        `${this.baseUrl}/api/whatsapp/session/start/${config.sessionId}`
      )
      const data: StartSessionResponse | WhatsAppApiError =
        await response.json()

      if (!response.ok || !data.success) {
        return {
          success: false,
          step: 'start',
          error: 'error' in data ? data.error : 'Session start failed',
          details: 'error' in data ? data.details : undefined,
        }
      }

      return {
        success: true,
        step: 'start',
        data,
      }
    } catch (error) {
      return {
        success: false,
        step: 'start',
        error: 'Network error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  private shouldStartSession(statusData: StatusSessionResponse): boolean {
    if (!statusData.status) return true

    const needsStartStatuses: SessionStatusType[] = ['failed', 'stopped']
    return needsStartStatuses.includes(statusData.status)
  }
}

// Singleton instance for easy use
export const whatsappWorkflow = new WhatsAppWorkflow()
