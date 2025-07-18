'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type SubHeaderContextProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SubHeaderContext = createContext<SubHeaderContextProps>(
  {} as SubHeaderContextProps
)

const SubHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SubHeaderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SubHeaderContext.Provider>
  )
}

const useSubHeader = () => {
  return useContext(SubHeaderContext)
}

export { SubHeaderProvider, useSubHeader }
