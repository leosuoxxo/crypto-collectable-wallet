import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CollectableRepository } from '@/app/collectable/repositorys'

const repository = new CollectableRepository()

export const useCollectableDetail = collectableId => {
  return useQuery(['collectableDetail', collectableId], () =>
    repository.getCollectableById({
      address: '0x4d3814d4da8083b41861dec2f45b4840e8b72d68',
      id: collectableId,
    }),
  )
}
