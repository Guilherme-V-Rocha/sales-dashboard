'use client'

import { useHeader } from '@/context/header.context'
import { routePath } from '@/util/routePaths'
import { LogOut, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import EFront from '../../../public/images/eFront.svg'
import { List } from './list'

export default function Sidebar() {
  const path = usePathname()
  const { isOpen, setIsOpen } = useHeader()

  return (
    <aside
      className={`bg-white lg:flex lg:flex-col p-10 rounded-r-[1.5rem] ${!isOpen && 'hidden'} lg:sticky lg:top-0 h-dvh fixed`}
    >
      <div className="text-right lg:hidden">
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
          <X />
        </button>
      </div>
      <EFront alt="eFront" className="m-5 mb-[3.75rem]" />
      <ul className="flex gap-4 flex-col">
        {routePath.map((list) => (
          <List key={list.path} list={list} path={path} />
        ))}
        <li className="flex text-red-500 gap-2 items-center bg-[#F03D3D0F] rounded-md cursor-pointer p-4">
          <LogOut />
          <span className="mt-0.5">Desconectar</span>
        </li>
      </ul>
    </aside>
  )
}
