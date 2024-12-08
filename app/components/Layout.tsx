import Footer from "./Footer"
import Header from "./Header"

interface LayoutPropsX {
  children: React.ReactNode
}
export default (props: LayoutPropsX) => {
  const { children } = props
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
