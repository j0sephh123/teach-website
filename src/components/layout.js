import * as React from "react"
import Header from "./header"
import "./style.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
