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