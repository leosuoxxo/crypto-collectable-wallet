import { Box, Image, AspectRatio } from '@chakra-ui/react'

export const CollectableItem = ({ data }) => {
  return (
    <Box width="50%" padding="20">
      <Box>
        <Image src={data.image_url} alt={data.name} />
      </Box>
      <Box padding="6">
        <Box mt="1" fontWeight="bold" as="h4">
          {data.name}
        </Box>
      </Box>
    </Box>
  )
}
