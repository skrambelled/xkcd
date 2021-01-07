import Link from 'next/link'

export default function Comic({ comic }) {
    return (
        <>
            <h2>{comic && comic.title}</h2>
            <img
                src={comic && comic.img}
                alt={comic && comic.alt}
            />
        </>
    )
}

export function ComicList({ mostRecentNum }) {
    let nums = []
    // iterate downwards, for 10 units
    for(let i=mostRecentNum; i > mostRecentNum-10; i--) {
        nums = [...nums, i]
    }

    return (
        <ul>
            {nums.map(num => <ComicLink num={num} /> )}
        </ul>
    )
}


function ComicLink({ num }) {
    return (
        <li>
            <Link href="/comic/[id].js" as={`/comic/${num}`}>
                <a>{num}</a>
            </Link>
        </li>
    )
}