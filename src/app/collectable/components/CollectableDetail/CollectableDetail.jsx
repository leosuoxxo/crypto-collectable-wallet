import { useParams, useNavigate } from 'react-router-dom'
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Center,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Loading, ErrorMessage } from '@/components'
import { useCollectableDetail } from '@/app/collectable/services'
import { RoutePath } from '@/router/routePath'

export const CollectableDetail = () => {
  const navigate = useNavigate()
  const { contractAddress, collectableId } = useParams()
  const { data, isLoading, isError, error } = useCollectableDetail({
    collectableId,
    contractAddress,
  })

  const permalinkClick = () => {
    window.open(data.permalink)
  }

  const goListPage = () => {
    navigate(RoutePath.Root)
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorMessage message={error} />
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="60px 20px 60px"
    >
      <Heading
        as="h1"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="60px"
        padding="0 0px"
        backgroundColor="#fff"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          left={['15px']}
          cursor="pointer"
          onClick={goListPage}
        >
          <ChevronLeftIcon />
        </Box>
        <Center padding="0 20px">{data.collection.name}</Center>
      </Heading>
      <Box width="100%">
        <Image width="100%" src={data.image_url} alt={data.name} />
      </Box>
      <Heading as="h2" size="2xl">
        {data.name}
      </Heading>
      <Text fontSize="lg" alignSelf="start" padding="10px 0">
        {data.description}
      </Text>
      <Center
        position="fixed"
        left="0"
        bottom="0"
        width="100%"
        height="60px"
        backgroundColor="#fff"
      >
        <Button colorScheme="blue" size="lg" onClick={permalinkClick}>
          permalink
        </Button>
      </Center>
    </Flex>
  )
}
