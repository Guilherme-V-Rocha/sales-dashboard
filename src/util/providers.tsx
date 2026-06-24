'use client'

import { HeaderProvider } from '@/context/header.context'
import { ReactNode } from 'react'

export function Provider({ children }: { children: ReactNode }) {
  return <HeaderProvider>{children}</HeaderProvider>
}
