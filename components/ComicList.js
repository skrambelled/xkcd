import Link from 'next/link'


function ComicList({ comics }) {
    return (
        <ul>
            {comics && comics.length && comics.map( comic => (
                <ComicLink key={comic.id} />
            ))}
        </ul>
    )
}


function ComicLink({ comic }) {
    return (
        <li>
            <Link href="/comic/[id].js" as={'/comic/${comic.id}'}>
                <a>{comic.id}</a>
            </Link>
        </li>
    )
}


export default ComicList