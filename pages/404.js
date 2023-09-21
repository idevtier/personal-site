import NextLink from 'next/link'
import { Text, Box, Heading, Container, Divider, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
