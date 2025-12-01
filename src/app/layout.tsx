import Sidebar from '@/components/sidebar'
import { Provider } from '@/util/providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const geistSans = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard sales',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="h-full">
      <body
        className={`${geistSans} antialiased max-w-[100dvw] min-h-full relative flex text-(--foreground) bg-(--background) font-display`}
      >
        <Provider>
          <Sidebar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
