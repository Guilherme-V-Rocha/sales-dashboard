'use client'

import { useHeader } from '@/context/header.context'
import { Bell, List, Search } from 'lucide-react'
import Image from 'next/image'
import profile from '../../../../public/images/profile.jpg'

export function Header() {
  const { setIsOpen } = useHeader()

  return (
    <header className="flex flex-wrap items-center gap-4 mb-10 lg:items-center lg:flex-nowrap">
      <button
        className="cursor-pointer lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <List />
      </button>
      <div className="w-full lg:w-auto order-3 lg:order-none">
        <h1 className="font-medium text-3xl text-dark05">Olá, Guilherme</h1>
        <p className="font-medium text-[1.125rem] text-[#6A6969]">
          Aqui estão as informações sobre suas vendas.
        </p>
      </div>
      <div
        className="flex items-center gap-4 order-2 ml-auto lg:order-none"
        aria-label="search and notification"
      >
        <div className="bg-white h-fit p-2 rounded-4xl">
          <Search />
        </div>
        <div className="bg-white h-fit p-2 rounded-4xl">
          <Bell />
        </div>
        <div className="flex h-fit items-center gap-4">
          <Image
            src={profile}
            width={42}
            height={41}
            alt="profile"
            className="rounded-4xl"
          />
          <p className="hidden lg:block">Guilherme V.</p>
        </div>
      </div>
    </header>
  )
}
