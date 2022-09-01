import React, { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

type Props = {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <main role="main" className="container pb-5 pt-3 px-5">
                {children}
            </main>
            <Footer />
        </>
    )
}