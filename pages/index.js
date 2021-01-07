import Layout from '../components/layout'
import ComicList from '../components/ComicList'
import Comic from '../components/Comic'
import { fetch } from '../services/fetcher'

export default function Home({ comic }) {
  return (
    <Layout>
        <Comic comic={comic} />
        {/* <ComicList /> */}
    </Layout>
  )
}

export async function getStaticProps() {
    const comic = await fetch();

    return {
        props: { comic }
    }
}
