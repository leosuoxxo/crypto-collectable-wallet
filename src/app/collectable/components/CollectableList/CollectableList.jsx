import { useRef, Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { CollectableItem } from '@/app/collectable/components'
import { useCollectableList } from '@/app/collectable/services'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export const CollectableList = () => {
  const indicatorRef = useRef()

  const { getCollectables } = useCollectableList()

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
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

  useIntersectionObserver({
    target: indicatorRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <Flex wrap="wrap">
      {data &&
        data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.data.map(collectable => (
              <CollectableItem key={collectable.token_id} data={collectable} />
            ))}
          </Fragment>
        ))}
      <div ref={indicatorRef}></div>
    </Flex>
  )
}
