import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { x: 0, opacity: 0, y: 20 },
  enter: { x: 0, opacity: 1, y: 0 },
  exit: { x: 0, opacity: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {title && (
        <Head>
          <title>{title} - Riya Negi</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </motion.article>
  )
}

export default Layout
