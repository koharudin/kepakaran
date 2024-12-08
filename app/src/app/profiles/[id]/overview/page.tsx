import { useRouter } from "next/navigation"
import Layout from "../../../../../components/Layout"

export default ({ params }: { params: { id: string } }) => {
  return <Layout>Categori {params?.id}<br>
  
  </br><hr>
  </hr>Overview 2<hr></hr></Layout>
}
