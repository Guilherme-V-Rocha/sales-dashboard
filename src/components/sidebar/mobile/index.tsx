import { useSubHeader } from '@/context/sub-header.context'
import CloseIcon from '@/icons/closeIcon.svg'
import DasboardIcon from '@/icons/dashboardIcon.svg'
import DisconnectIcon from '@/icons/disconnectIcon.svg'
import SettingsIcon from '@/icons/settingsIcon.svg'
import SupportIcon from '@/icons/supportIcon.svg'
import TransactionsIcon from '@/icons/transactionIcon.svg'
import WalletIcon from '@/icons/walletIcon.svg'
import EFront from '@/images/eFront.svg'
import { sidebarPath } from '@/util/routePaths'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SidebarMobile() {
  const path = usePathname()
  const { setIsOpen } = useSubHeader()

  return (
    <div className="w-xs bg-white p-10 rounded-r-[1.5rem] h-full flex flex-col md:hidden absolute">
      <button
        className="justify-items-end-safe cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <CloseIcon />
      </button>
      <EFront alt="eFront" className="m-5 mb-[3.75rem]" />
      <ul className="flex gap-4 flex-col">
        <Link
          href={sidebarPath.dashboard}
          className={`flex gap-2 items-center ${
            sidebarPath.dashboard === path
              ? 'text-brandColor stroke-brandColor bg-purple10 '
              : 'hover:text-brandColor hover:stroke-brandColor hover:bg-purple10 '
          }rounded-md p-4`}
        >
          <DasboardIcon alt="dashboard icon" />
          <li className="mt-0.5">Dashboard</li>
        </Link>
        <Link
          href={sidebarPath.wallet}
          aria-disabled
          className="flex gap-2 items-center text-center hover:bg-purple10 hover:text-brandColor hover:stroke-brandColor rounded-md p-4"
        >
          <WalletIcon alt="wallet icon" />
          <li className="mt-1">Carteira</li>
        </Link>
        <Link
          href={sidebarPath.transanctions}
          aria-disabled
          className="flex gap-2 items-center hover:bg-purple10 hover:text-brandColor hover:stroke-brandColor rounded-md p-4"
        >
          <TransactionsIcon alt="transactions icon" />
          <li className="mt-1">Transações</li>
        </Link>
        <Link
          href={sidebarPath.support}
          aria-disabled
          className="flex gap-2 items-center hover:bg-purple10 hover:text-brandColor hover:stroke-brandColor rounded-md p-4"
        >
          <SupportIcon alt="support icon" />
          <li className="mt-1">Suporte</li>
        </Link>
        <div className="w-auto h-0.5 bg-[#F2F6FF]" />
        <Link
          href={sidebarPath.settings}
          aria-disabled
          className="flex gap-2 items-center hover:bg-purple10 hover:text-brandColor hover:stroke-brandColor rounded-md p-4"
        >
          <SettingsIcon alt="settings icon" />
          <li className="mt-1">Ajustes</li>
        </Link>
        <div className="flex gap-2 items-center bg-[#F03D3D0F] rounded-md p-4 cursor-pointer">
          <DisconnectIcon alt="disconnect icon" />
          <li className="text-red-500 mt-1">Desconectar</li>
        </div>
      </ul>
    </div>
  )
}
