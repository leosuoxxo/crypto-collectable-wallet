import { useInfiniteQuery } from 'react-query'
import { CollectableRepository } from '@/app/collectable/repositorys'

const repository = new CollectableRepository()

// a count of each fetched items
const PAGE_SIZE = 10

export const useCollectableList = () => {
  const getCollectables = async ({ address, pageIndex = 0 }) => {
    const collectables = await repository.getCollectables({
      address,
      offset: pageIndex * PAGE_SIZE,
      limit: PAGE_SIZE,
    })

    return {
      pageIndex,
      data: collectables,
    }
  }

  return useInfiniteQuery(
    'collectables',
    async ({ pageParam = 0 }) =>
      getCollectables({
        address: '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91',
        pageIndex: pageParam,
      }),
    {
      getNextPageParam: lastPage => {
        const { data, pageIndex } = lastPage
        return data.length === 10 ? pageIndex + 1 : false
      },
    },
  )
}
