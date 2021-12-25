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

  return {
    getCollectables,
  }
}
