import Link from 'next/link'


function ComicList({ comics }) {
    return (
        <ul>
            {comics && comics.length && comics.map( comic => (
                <Comic key={comic.id} />
            ))}
        </ul>
    )
}


function Comic({ comic }) {
    return (
        <li>
            <Link href="/comic/[id].js" as={'/comic/${comic.id}'}>
                <a>{comic.id}</a>
            </Link>
        </li>
    )
}


export default ComicList