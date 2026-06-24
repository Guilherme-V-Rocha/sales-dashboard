import { routePathType } from '@/util/routePaths'

type listProps = {
  path: string
  list: routePathType
}

export function List({ list, path }: listProps) {
  const isActive = list.path === path
  return (
    <li>
      <a
        href={list.path}
        className={`flex gap-2 items-center rounded-md p-4 pointer-events-none${
          isActive
            ? 'text-brandColor stroke-brandColor bg-purple10 '
            : 'hover:text-brandColor hover:stroke-brandColor hover:bg-purple10 '
        }`}
      >
        <list.icon />
        <span className="mt-0.5">{list.name}</span>
      </a>
    </li>
  )
}
