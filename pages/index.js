import Layout from '../components/layout'
import Comic, { ComicList } from '../components/Comic'
import { fetch } from '../services/fetcher'

export default function Home({ comic }) {
  return (
    <Layout>
        <Comic comic={comic} />
        <ComicList mostRecentNum={comic.num} />
    </Layout>
  )
}

export async function getStaticProps() {
    const comic = await fetch();

    return {
        props: { comic }
    }
}
