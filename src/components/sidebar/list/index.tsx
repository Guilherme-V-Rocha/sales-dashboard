import { routePathType } from '@/util/routePaths'

type listProps = {
  path: string
  list: routePathType
}

export function List({ list, path }: listProps) {
  const isActive = list.path === path
  return (
    <li
      key={list.path}
      className={`pointer-events-none rounded-md
       ${
         isActive
           ? 'text-brandColor stroke-brandColor bg-purple10 '
           : 'hover:text-brandColor hover:stroke-brandColor hover:bg-purple10 '
       }`}
    >
      <a href={list.path} className="flex gap-2 items-center p-4">
        <list.icon />
        <span className="mt-0.5">{list.name}</span>
      </a>
    </li>
  )
}
