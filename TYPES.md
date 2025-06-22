# Types Documentation

## Overview

Semua types dalam project telah disentralisasi ke folder `/types` untuk maintainability dan consistency yang lebih baik. Folder ini berisi definisi types yang digunakan di seluruh aplikasi.

## Structure

```
types/
├── index.ts          # Main export file - import semua types dari sini
├── auth.ts           # Authentication & user related types
├── packages.ts       # Internet package & product types
├── contact.ts        # Contact information & location types
├── content.ts        # FAQ, help articles, support tickets
├── ui.ts            # UI components & interface types
├── forms.ts         # Form structures & validation types
├── api.ts           # API requests, responses & data transfer
└── state.ts         # State management & widget types
```

## Usage

### Import Types

```typescript
// Import semua types dari index
import type { User, Package, ContactInfo } from '@/types'

// Import spesifik dari file tertentu
import type { ApiResponse } from '@/types/api'
import type { FormState } from '@/types/forms'
```

### Extending Types

```typescript
// Extend existing types jika perlu customization
interface ExtendedUser extends User {
  preferences: UserPreferences
  lastActivity: Date
}

// Use utility types untuk transformasi
type CreateUserRequest = Omit<User, 'id' | 'createdAt'>
type PartialUser = DeepPartial<User>
```

## Type Categories

### Authentication (`auth.ts`)

- `User` - Data struktur user
- `LoginCredentials` - Form login
- `AuthResponse` - Response auth API
- `UserRole`, `UserStatus` - Enums untuk user

### Packages (`packages.ts`)

- `Package` - Struktur paket internet
- `PackageCategory`, `PackageColor` - Enums untuk paket
- `PackageFilter` - Filtering paket

### Contact (`contact.ts`)

- `ContactInfo` - Informasi kontak
- `OfficeLocation` - Lokasi kantor & coverage
- `CoverageArea` - Area coverage internet
- `ContactPageState` - State halaman kontak

### Content (`content.ts`)

- `FAQItem` - Item FAQ
- `HelpArticle` - Artikel bantuan
- `SupportTicket` - Tiket support
- `FAQCategory`, `TicketStatus` - Enums

### UI Components (`ui.ts`)

- `BreadcrumbItem`, `PageConfig` - Navigation
- `TestimonialCardProps`, `ServiceCardProps` - Component props
- `PageLayoutProps`, `TimelineStep` - Layout components

### Forms (`forms.ts`)

- `SubscriptionForm`, `ContactForm` - Form structures
- `ValidationError`, `FormState` - Validation handling
- `InputType`, `ContactFormType` - Form field types

### API (`api.ts`)

- `ApiResponse<T>` - Generic API response
- `PaginatedResponse<T>` - Paginated data
- `SpeedTestResult`, `DiagnosticResult` - API-specific types
- `ApiError`, `ValidationApiError` - Error handling

### State Management (`state.ts`)

- `WidgetType`, `WidgetState` - Widget system
- `AppState` - Global application state
- `UserPreferences`, `SessionData` - User data
- `ToastState`, `ToastAction` - Notifications

## Utility Types

File index.ts juga export utility types yang berguna:

```typescript
// Make certain properties optional
type PartialUser = Optional<User, 'avatar' | 'phone'>

// Make certain properties required
type RequiredPackage = RequiredBy<Package, 'popular'>

// Remove null/undefined
type NonNullableId = NonNullable<string | null>

// Deep partial for nested objects
type PartialAppState = DeepPartial<AppState>
```

## Common Types

Types yang sering digunakan:

```typescript
type ID = string | number
type Timestamp = string | Date
type Status = 'idle' | 'loading' | 'success' | 'error'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
```

## Migration Completed

Berikut files yang sudah diupdate untuk menggunakan centralized types:

### Data Files

- ✅ `data/auth.ts` - Import `User`, `LoginCredentials`, `AuthResponse`
- ✅ `data/packages.ts` - Import `Package`
- ✅ `data/packages-backup.ts` - Import `Package`
- ✅ `data/contact.ts` - Import `ContactInfo`, `OfficeLocation`
- ✅ `data/faq.ts` - Import `FAQItem`
- ✅ `data/breadcrumb-config.ts` - Import `BreadcrumbItem`, `PageConfig`

### Library Files

- ✅ `lib/widget-state.ts` - Import `WidgetType`

### Components

- ✅ `components/testimonial-card.tsx` - Import `TestimonialCardProps`
- ✅ `components/service-card.tsx` - Import `ServiceCardProps` (extended)
- ✅ `components/section-title.tsx` - Import `SectionTitleProps`
- ✅ `components/tech-timeline.tsx` - Uses local interface (specialized)

### Pages

- ✅ `app/berlangganan/page.tsx` - Import `SubscriptionForm`
- ✅ `app/contact/page.tsx` - Import `ContactPageState`
- ✅ `app/admin/dashboard/page.tsx` - Import `User`
- ✅ `app/admin/diagnostics/page.tsx` - Import `DiagnosticResult`

## Best Practices

1. **Always import types dari `/types` index**

   ```typescript
   import type { User, Package } from '@/types'
   ```

2. **Gunakan utility types untuk transformasi**

   ```typescript
   type CreateUser = Omit<User, 'id' | 'createdAt'>
   ```

3. **Extend types jika perlu customization**

   ```typescript
   interface ExtendedProps extends BaseProps {
     customField: string
   }
   ```

4. **Keep types pure dan reusable**

   - Jangan include component-specific logic
   - Gunakan generic types untuk flexibility

5. **Document complex types**
   ```typescript
   /**
    * Represents a user in the system
    * @template T - Additional user data type
    */
   interface User<T = {}> extends BaseUser {
     data?: T
   }
   ```

## Future Improvements

- [ ] Add runtime type validation dengan Zod
- [ ] Generate API types dari OpenAPI schema
- [ ] Add JSDoc documentation untuk semua types
- [ ] Create type guards untuk runtime checking
- [ ] Add branded types untuk enhanced type safety
