import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

const HoverImage = styled(Image)`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text
            mt={2}
            fontSize={20}
            fontWeight={600}
            textDecoration={'underline'}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={16}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <HoverImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text
          mt={2}
          fontSize={20}
          fontWeight={600}
          textDecoration={'underline'}
        >
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={16}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
)
