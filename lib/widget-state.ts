// Widget State Management
// Mengatur koordinasi antar widget agar tidak saling menghalangi

import type { WidgetType } from '@/types'

class WidgetStateManager {
  private activeWidget: WidgetType = null
  private listeners: Set<(activeWidget: WidgetType) => void> = new Set()

  // Set widget mana yang sedang aktif
  setActiveWidget(widget: WidgetType) {
    this.activeWidget = widget
    this.notifyListeners()
  }

  // Get widget yang sedang aktif
  getActiveWidget(): WidgetType {
    return this.activeWidget
  }

  // Subscribe untuk perubahan state
  subscribe(listener: (activeWidget: WidgetType) => void) {
    this.listeners.add(listener)
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener)
    }
  }

  // Notify semua listeners
  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.activeWidget))
  }

  // Check apakah widget tertentu harus disembunyikan
  shouldHideWidget(widgetType: WidgetType): boolean {
    if (!this.activeWidget) return false
    return this.activeWidget !== widgetType
  }
}

// Singleton instance
export const widgetStateManager = new WidgetStateManager()
