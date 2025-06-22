import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      'node_modules/**',
      '.env*',
      '.cache/**',
      '.temp/**',
      '*.tmp',
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
