import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout router={router}>
        {' '}
        <Component {...pageProps} key={router.route}></Component>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
