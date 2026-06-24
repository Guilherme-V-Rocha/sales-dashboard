import {
  Bolt,
  LayoutGrid,
  LucideProps,
  ShoppingCart,
  UsersRound,
  Wallet,
} from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export type routePathType = {
  path: string
  name: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
}
export const routePath: routePathType[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: LayoutGrid,
  },
  {
    path: '/wallet',
    name: 'Carteira',
    icon: Wallet,
  },
  {
    path: '/transactions',
    name: 'Transações',
    icon: ShoppingCart,
  },
  {
    path: '/support',
    name: 'Suporte',
    icon: UsersRound,
  },
  {
    path: '/settings',
    name: 'Configurações',
    icon: Bolt,
  },
]
