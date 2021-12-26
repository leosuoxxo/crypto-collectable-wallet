import { Spinner, Center } from '@chakra-ui/react'

export const ErrorMessage = ({ message }) => {
  return (
    <Center height="100vh">
      <h2>{message}</h2>
    </Center>
  )
}
