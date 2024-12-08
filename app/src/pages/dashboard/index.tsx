import { GetServerSideProps } from "next"
interface DashboardProps {
  users: User[]
}
export default (props: DashboardProps) => {
  const { users } = props
  return <>Dashboard {JSON.stringify(users)} </>
}

interface User {
  id: number
  name: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users: User[] = [
    { id: 1, name: "Biologi" },
    {
      id: 2,
      name: "Sociologi",
    },
  ]
  return {
    props: {
      users,
    },
  }
}
