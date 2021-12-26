import { useInfiniteQuery } from 'react-query'
import { useWalletService } from '@/services/useWallet'
import { CollectableRepository } from '@/app/collectable/repositorys'

const repository = new CollectableRepository()

// a count of each fetched items
const PAGE_SIZE = 10

export const useCollectableList = () => {
  const { account } = useWalletService()

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
        address: account,
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
