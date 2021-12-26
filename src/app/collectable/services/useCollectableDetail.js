import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CollectableRepository } from '@/app/collectable/repositorys'

const repository = new CollectableRepository()

export const useCollectableDetail = ({ collectableId, contractAddress }) => {
  return useQuery(['collectableDetail', collectableId], () =>
    repository.getCollectableById({
      address: contractAddress,
      id: collectableId,
    }),
  )
}
