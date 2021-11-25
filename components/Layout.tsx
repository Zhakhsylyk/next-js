import Header from "./Header";
import Footer from "./Footer";
import React , {FC, ReactNode} from "react";

type layoutProps = {
   children : ReactNode,
}
const Layout = ({children}) => (
   <>
   <Header />
   {children}
   <Footer />
   </>
);

export default Layout;

