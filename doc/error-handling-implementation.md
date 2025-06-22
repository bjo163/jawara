# Enhanced Error Boundaries dan Global Error Handling

## 📋 Overview

Sistem error handling yang komprehensif telah diimplementasikan untuk memberikan pengalaman pengguna yang lebih baik dan monitoring error yang efektif dalam aplikasi Jawara-Net.

## 🏗️ Arsitektur

### 1. Types System (`/types/errors.ts`)

- **AppError**: Base interface untuk semua error dalam aplikasi
- **ErrorCategory**: Kategorisasi error (network, api, component, validation, dll)
- **ErrorLevel**: Level severity (low, medium, high, critical)
- **ErrorBoundary**: Props dan state untuk React Error Boundaries
- **ErrorContext**: Interface untuk global error management

### 2. Core Utilities (`/lib/error-utils.ts`)

- **Error Creation**: Helper functions untuk membuat different types of errors
- **Error Transformation**: Convert JavaScript Error ke AppError
- **Error Analysis**: Utility untuk menganalisis dan memproses errors
- **Error Formatting**: Format error messages untuk user display

### 3. Error Context (`/lib/error-context.tsx`)

- **Global State**: React Context untuk mengelola error state
- **Error Reporting**: Centralized error reporting system
- **Subscriber Pattern**: Subscribe ke error changes
- **Auto-handling**: Global handlers untuk unhandled errors

### 4. Error Boundary (`/components/error-boundary.tsx`)

- **React Error Boundary**: Catch component errors
- **Retry Mechanism**: Built-in retry functionality
- **Custom Fallbacks**: Customizable error fallback components
- **HOC Support**: Higher-order component wrapper

### 5. Toast Notifications (`/components/error-toast.tsx`)

- **Real-time Notifications**: Show errors as toast notifications
- **Smart Filtering**: Only show relevant errors to users
- **Action Buttons**: Retry, dismiss, and other actions
- **Position Control**: Configurable toast positioning

### 6. Global Handler (`/components/global-error-handler.tsx`)

- **Integration Hub**: Integrates all error handling components
- **Environment Aware**: Different configs for dev/production
- **Configuration**: Centralized error handling configuration

### 7. Custom Hooks (`/hooks/use-error-handling.tsx`)

- **useAsyncError**: Handle async operations with error catching
- **useApiError**: Specialized API error handling
- **useValidationError**: Form validation error management
- **useNetworkError**: Network status and error handling
- **useComponentError**: Component-level error handling
- **useErrorStats**: Error analytics and monitoring
- **useErrorFilter**: Error filtering and searching

### 8. Next.js Integration

- **Global Error Page** (`/app/global-error.tsx`): Root-level error handling
- **404 Page** (`/app/not-found.tsx`): Custom 404 with helpful navigation
- **Layout Integration** (`/app/layout.tsx`): Error handling setup in root layout

## 🚀 Features

### ✅ Error Categories

- **Network**: Connection issues, timeouts, server errors
- **API**: HTTP errors, response parsing errors
- **Component**: React component errors, render errors
- **Validation**: Form validation, input errors
- **Authentication**: Login, session errors
- **Authorization**: Permission, access errors
- **Chunk Load**: Dynamic import errors
- **Runtime**: JavaScript runtime errors

### ✅ Error Levels

- **Low**: Info messages, minor warnings
- **Medium**: Non-critical errors, temporary issues
- **High**: Important errors affecting functionality
- **Critical**: System-breaking errors requiring immediate attention

### ✅ Smart Error Handling

- **Auto-retry**: Automatic retry for retryable errors
- **Rate Limiting**: Prevent error spam
- **Error Deduplication**: Avoid duplicate error reports
- **Context Preservation**: Maintain error context across components

### ✅ User Experience

- **Toast Notifications**: Non-intrusive error notifications
- **Fallback UIs**: Graceful degradation when errors occur
- **Recovery Actions**: Clear actions for users to recover
- **Helpful Messages**: User-friendly error messages in Indonesian

### ✅ Developer Experience

- **Detailed Logging**: Comprehensive error logging in development
- **Error Analytics**: Error statistics and monitoring
- **Debug Information**: Stack traces, error context in dev mode
- **Type Safety**: Full TypeScript support

### ✅ Production Ready

- **Error Reporting**: Ready for external error reporting services
- **Performance**: Minimal performance impact
- **Memory Management**: Automatic cleanup and memory optimization
- **Security**: Sensitive data sanitization

## 📝 Usage Examples

### Basic Setup in Component

```tsx
import { useErrorReporter } from '@/lib/error-context'

function MyComponent() {
  const { reportError, reportNetworkError } = useErrorReporter()

  const handleApiCall = async () => {
    try {
      const response = await fetch('/api/data')
      if (!response.ok) {
        reportNetworkError(
          `API call failed: ${response.status}`,
          response.status,
          '/api/data'
        )
        return
      }
      // Handle success
    } catch (error) {
      reportError({
        id: `api_error_${Date.now()}`,
        message: 'Failed to fetch data',
        category: 'api',
        level: 'medium',
        severity: 'error',
        timestamp: new Date(),
        cause: error,
      })
    }
  }

  return <div>...</div>
}
```

### Async Operations with Error Handling

```tsx
import { useAsyncError } from '@/hooks/use-error-handling'

function DataComponent() {
  const { execute, loading, error, retry, canRetry } = useAsyncError()

  const fetchData = () =>
    execute(
      async () => {
        const response = await fetch('/api/data')
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      },
      {
        category: 'api',
        level: 'medium',
        onError: error => console.log('Custom error handling:', error),
      }
    )

  if (loading) return <div>Loading...</div>
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        {canRetry && <button onClick={retry}>Retry</button>}
      </div>
    )

  return <div>Data loaded successfully</div>
}
```

### Component Error Boundary

```tsx
import { ErrorBoundary } from '@/components/error-boundary'

function App() {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        console.log('Component error:', error, errorInfo)
      }}
      enableRetry={true}
      maxRetries={3}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}
```

### Form Validation Errors

```tsx
import { useValidationError } from '@/hooks/use-error-handling'

function LoginForm() {
  const {
    validationErrors,
    addValidationError,
    clearValidationError,
    hasValidationErrors,
  } = useValidationError()

  const handleSubmit = formData => {
    if (!formData.email) {
      addValidationError('email', 'Email is required')
      return
    }
    if (!formData.password) {
      addValidationError('password', 'Password is required')
      return
    }

    // Submit form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onFocus={() => clearValidationError('email')} />
      {validationErrors.email && (
        <span className="error">{validationErrors.email}</span>
      )}

      <input type="password" onFocus={() => clearValidationError('password')} />
      {validationErrors.password && (
        <span className="error">{validationErrors.password}</span>
      )}

      <button type="submit" disabled={hasValidationErrors}>
        Login
      </button>
    </form>
  )
}
```

## 📊 Error Analytics

### Error Statistics Hook

```tsx
import { useErrorStats } from '@/hooks/use-error-handling'

function ErrorDashboard() {
  const stats = useErrorStats()

  return (
    <div>
      <h3>Error Statistics</h3>
      <p>Total Errors: {stats.total}</p>
      <p>Critical Errors: {stats.critical}</p>
      <p>Recent Errors (1h): {stats.recent}</p>

      <h4>By Category:</h4>
      {Object.entries(stats.categories).map(([category, count]) => (
        <p key={category}>
          {category}: {count}
        </p>
      ))}

      <h4>By Level:</h4>
      {Object.entries(stats.levels).map(([level, count]) => (
        <p key={level}>
          {level}: {count}
        </p>
      ))}
    </div>
  )
}
```

### Error Filtering

```tsx
import { useErrorFilter } from '@/hooks/use-error-handling'

function ErrorList() {
  const { filters, setFilters, filteredErrors, hasFilters } = useErrorFilter()

  return (
    <div>
      <div>
        <select
          value={filters.category || ''}
          onChange={e =>
            setFilters(prev => ({
              ...prev,
              category: e.target.value as ErrorCategory,
            }))
          }
        >
          <option value="">All Categories</option>
          <option value="network">Network</option>
          <option value="api">API</option>
          <option value="component">Component</option>
        </select>

        <select
          value={filters.level || ''}
          onChange={e =>
            setFilters(prev => ({
              ...prev,
              level: e.target.value as ErrorLevel,
            }))
          }
        >
          <option value="">All Levels</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>

        <input
          type="text"
          placeholder="Search errors..."
          value={filters.search}
          onChange={e =>
            setFilters(prev => ({ ...prev, search: e.target.value }))
          }
        />
      </div>

      <div>
        {filteredErrors.map(error => (
          <div key={error.id}>
            <h4>{error.message}</h4>
            <p>Category: {error.category}</p>
            <p>Level: {error.level}</p>
            <p>Time: {error.timestamp.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

## 🔧 Configuration

### Environment Variables

```env
# Error Handling Configuration
NEXT_PUBLIC_ERROR_REPORTING_ENABLED=true
NEXT_PUBLIC_MAX_ERRORS=100
NEXT_PUBLIC_AUTO_RETRY_ENABLED=false
NEXT_PUBLIC_ERROR_NOTIFICATIONS_ENABLED=true
```

### Global Configuration

```tsx
// In app/layout.tsx
<GlobalErrorHandler
  options={{
    enableLogging: process.env.NODE_ENV === 'development',
    enableReporting: process.env.NODE_ENV === 'production',
    maxErrors: 100,
    enableNotifications: true,
    autoRetry: false,
    retryDelay: 1000,
  }}
  enableToasts={true}
  enableBoundary={true}
  toastPosition="top-right"
  maxToasts={5}
>
  {children}
</GlobalErrorHandler>
```

## 🔍 Monitoring & Debugging

### Development Mode

- Detailed console logging dengan stack traces
- Dev error panel di bottom-left
- Error details dalam toast notifications
- Component error boundaries dengan retry buttons

### Production Mode

- Sanitized error messages untuk users
- Error reporting ke external services
- Minimal console logging
- User-friendly error messages dalam Bahasa Indonesia

## 🎯 Best Practices

### 1. Error Categorization

- Gunakan category yang tepat untuk setiap error
- Network errors untuk connection issues
- API errors untuk HTTP/REST API issues
- Component errors untuk React component issues
- Validation errors untuk form validation

### 2. Error Levels

- **Low**: Information, minor warnings yang tidak mempengaruhi functionality
- **Medium**: Non-critical errors yang dapat di-recover
- **High**: Important errors yang mempengaruhi user experience
- **Critical**: System-breaking errors yang membutuhkan immediate attention

### 3. User Messages

- Gunakan Bahasa Indonesia yang jelas dan friendly
- Berikan actionable solutions ketika memungkinkan
- Hindari technical jargon untuk end users
- Provide contact information untuk complex issues

### 4. Error Recovery

- Implement retry mechanisms untuk network/API errors
- Provide fallback UIs untuk component errors
- Allow users to reset error states
- Guide users to alternative actions

### 5. Performance

- Limit jumlah errors yang disimpan dalam memory
- Clean up old errors secara periodik
- Debounce error reporting untuk avoid spam
- Use lazy loading untuk error components

## 🔄 Future Enhancements

### Planned Features

- [ ] External error reporting integration (Sentry, LogRocket)
- [ ] Error trend analysis dan alerting
- [ ] Advanced error grouping dan deduplication
- [ ] User error feedback sistem
- [ ] Automated error recovery strategies
- [ ] Error-based A/B testing
- [ ] Performance impact monitoring
- [ ] Advanced error analytics dashboard

### Integration Opportunities

- [ ] WhatsApp error notifications untuk critical errors
- [ ] Email alerts untuk high-priority errors
- [ ] Slack/Discord integration untuk development team
- [ ] Custom error dashboards dalam admin panel
- [ ] Error impact analysis pada user conversion

## 📚 Related Documentation

- [Types Documentation](./TYPES.md) - Application type definitions
- [API Documentation](./api/) - API error handling patterns
- [Component Documentation](./components/) - Component-specific error handling
- [Testing Documentation](./testing/) - Error handling testing strategies

---

**Error Handling Implementation Completed** ✅

- Comprehensive error boundary system
- Global error context dan management
- Smart toast notifications
- Custom error pages (404, global-error)
- Advanced error handling hooks
- Production-ready configuration
- Developer-friendly debugging tools
- Indonesian language support
- Full TypeScript support
