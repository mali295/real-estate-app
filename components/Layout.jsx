import Head from 'next/head'
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar'
import Footer from './Footer'



const Layout = ({ children }) => (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
)


export default Layout