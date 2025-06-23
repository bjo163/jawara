export interface ApiErrorResponse {
  status?: number
  message?: string
  error?: string
}

export function handleApiAuthError(response: ApiErrorResponse) {
  // Jika response API mengandung pesan token tidak valid atau status 401/403, redirect ke login
  if (
    response?.status === 401 ||
    response?.status === 403 ||
    response?.message?.toLowerCase().includes('token tidak valid') ||
    response?.error?.toLowerCase().includes('token')
  ) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return true
  }
  return false
}
