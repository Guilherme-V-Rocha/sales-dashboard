'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type HeaderContextProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const HeaderContext = createContext<HeaderContextProps>(
  {} as HeaderContextProps,
)

const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HeaderContext.Provider>
  )
}

const useHeader = () => {
  return useContext(HeaderContext)
}

export { HeaderProvider, useHeader }
