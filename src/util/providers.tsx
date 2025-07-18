'use client'

import { SubHeaderProvider } from '@/context/sub-header.context'
import { ReactNode } from 'react'

export function Provider({ children }: { children: ReactNode }) {
  return <SubHeaderProvider>{children}</SubHeaderProvider>
}
