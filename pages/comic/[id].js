import ComicList from '../../components/ComicList'
import Layout from '../../components/layout'
import { fetch } from '../../services/fetcher'


const Comic = ({ comic }) => (
    <Layout>
        <h2>{comic && comic.name}</h2>
        <img
            src={comic && comic.src}
            alt={comic && comic.text}
        />
    </Layout>
)

export default Comic