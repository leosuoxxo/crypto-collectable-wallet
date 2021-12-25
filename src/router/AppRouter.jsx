import { useRoutes } from 'react-router-dom'
import { CollectableList } from '@/app/collectable/components'
import { RoutePath } from './routePath'

export const appRoutes = [
  {
    path: RoutePath.Root,
    element: <CollectableList />,
    exact: true,
  },
  // {
  //   path: RoutePath.Detail,
  //   element: <CollectableDetail />,
  //   exact: true,
  // },
]

export const AppRouter = () => {
  let element = useRoutes(appRoutes)
  return element
}
