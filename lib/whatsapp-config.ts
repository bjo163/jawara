import type { WhatsAppConfig } from '@/types/whatsapp'

export function getWhatsAppConfig(): WhatsAppConfig {
  const serverUrl = process.env.WHATSAPP_SERVER_URL
  const apiKey = process.env.WHATSAPP_API_KEY
  const sessionId = process.env.WHATSAPP_SESSION_ID

  if (!serverUrl) {
    throw new Error('WHATSAPP_SERVER_URL is required in environment variables')
  }

  if (!apiKey) {
    throw new Error('WHATSAPP_API_KEY is required in environment variables')
  }

  if (!sessionId) {
    throw new Error('WHATSAPP_SESSION_ID is required in environment variables')
  }

  // Validate URL format
  try {
    new URL(serverUrl)
  } catch {
    throw new Error('WHATSAPP_SERVER_URL must be a valid URL')
  }

  return {
    serverUrl: serverUrl.replace(/\/$/, ''), // Remove trailing slash
    apiKey,
    sessionId,
  }
}

export function getWhatsAppHeaders() {
  const config = getWhatsAppConfig()
  return {
    'Content-Type': 'application/json',
    'x-api-key': config.apiKey,
  }
}

export function buildWhatsAppUrl(endpoint: string): string {
  const config = getWhatsAppConfig()
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${config.serverUrl}${cleanEndpoint}`
}
