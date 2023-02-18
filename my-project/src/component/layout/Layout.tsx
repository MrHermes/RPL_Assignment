import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProp = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProp) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}

export default Layout