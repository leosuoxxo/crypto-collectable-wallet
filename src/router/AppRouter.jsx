import { useRoutes } from 'react-router-dom'
import { CollectableListPage, CollectableDetailPage } from '@/pages'
import { RoutePath } from './routePath'

export const appRoutes = [
  {
    path: RoutePath.Root,
    element: <CollectableListPage />,
    exact: true,
  },
  {
    path: RoutePath.Detail,
    element: <CollectableDetailPage />,
    exact: true,
  },
]

export const AppRouter = () => {
  let element = useRoutes(appRoutes)
  return element
}
