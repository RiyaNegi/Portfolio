import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout router={router}>
        {' '}
        <AnimatePresence
          onExitComplete={() => window.scrollTo(0, 0)}
          initial={true}
        >
          <Component {...pageProps} key={router.route}></Component>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
