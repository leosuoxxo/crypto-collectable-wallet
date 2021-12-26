import { useRef, Fragment } from 'react'
import { Flex } from '@chakra-ui/react'
import { Loading } from '@/components'
import { CollectableItem } from '@/app/collectable/components'
import { useCollectableList } from '@/app/collectable/services'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export const CollectableList = () => {
  const indicatorRef = useRef()

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useCollectableList()

  useIntersectionObserver({
    target: indicatorRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <Flex wrap="wrap">
      {isLoading && <Loading />}
      {data &&
        data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.data.map(collectable => (
              <CollectableItem key={collectable.token_id} data={collectable} />
            ))}
          </Fragment>
        ))}
      <div ref={indicatorRef}></div>
      {isFetchingNextPage && <Loading />}
    </Flex>
  )
}
