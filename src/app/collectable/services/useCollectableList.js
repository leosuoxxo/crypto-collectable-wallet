import { useState } from 'react'
import { CollectableRepository } from '@/app/collectable/repositorys'

const repository = new CollectableRepository()

export const useCollectableList = () => {
  const [collectables, setCollectables] = useState([])

  const getCollectables = async ({ address, offset }) => {
    const collectables = await repository.getCollectables({
      address,
      offset,
    })

    setCollectables(collectables)
  }

  return {
    collectables,
    getCollectables,
  }
}
