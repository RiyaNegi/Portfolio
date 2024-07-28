import NextLink from 'next/link'
import { Heading, Image, Badge, Flex, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <Flex>
      <NextLink href="/works">
        <Text color="pink.400" _hover={{ textDecoration: 'underline' }}>
          Works
        </Text>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={6}>
        {children}
      </Heading>
    </Flex>
  )
}

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
