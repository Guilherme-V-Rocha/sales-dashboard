'use client'

import { useSubHeader } from '@/context/sub-header.context'
import AsideIcon from '@/icons/asideIcon.svg'
import BellIcon from '@/icons/bellIcon.svg'
import SearchIcon from '@/icons/searchIcon.svg'
import profile from '@/images/profile.jpg'
import Image from 'next/image'

export function SubHeaderMobile() {
  const { setIsOpen } = useSubHeader()

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 md:hidden mb-10">
      <div className="flex justify-between mb-10">
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <AsideIcon />
        </button>

        <div className="flex gap-8">
          <div className="bg-white h-fit p-2 rounded-4xl">
            <SearchIcon />
          </div>
          <div className="bg-white h-fit p-2 rounded-4xl">
            <BellIcon />
          </div>
          <div className="flex h-fit items-center gap-4">
            <Image
              src={profile}
              width={42}
              height={41}
              alt="profile"
              className="rounded-4xl"
            />
            <p className="hidden md:block">Guilherme V.</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-medium text-3xl text-dark05">Olá, Guilherme</h1>
        <p className="font-medium text-[1.125rem] text-[#6A6969]">
          Aqui estão as informações sobre suas vendas.
        </p>
      </div>
    </div>
  )
}
