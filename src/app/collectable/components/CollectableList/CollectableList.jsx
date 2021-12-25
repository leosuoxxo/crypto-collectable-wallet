import { useEffect, useRef } from 'react'
import { Flex } from '@chakra-ui/react'
import { CollectableItem } from '@/app/collectable/components'
import { useCollectableList } from '@/app/collectable/services'

export const CollectableList = () => {
  const ref = useRef()
  const { collectables, getCollectables } = useCollectableList()

  useEffect(() => {
    getCollectables({ address: '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91' })
  }, [])

  return (
    <Flex wrap="wrap" ref={ref}>
      {collectables.map(collectable => (
        <CollectableItem data={collectable} />
      ))}
    </Flex>
  )
}
