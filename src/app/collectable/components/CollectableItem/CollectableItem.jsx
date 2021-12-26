import { useNavigate } from 'react-router-dom'
import { Box, Image, Center } from '@chakra-ui/react'

export const CollectableItem = ({ data }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${data.token_id}`)
  }

  return (
    <Box width="50%" padding={[20, 5]} cursor="pointer" onClick={handleClick}>
      <Center>
        <Image src={data.image_url} alt={data.name} />
      </Center>
      <Center padding="6">
        <Box mt="1" fontWeight="bold" as="h4">
          {data.name}
        </Box>
      </Center>
    </Box>
  )
}
