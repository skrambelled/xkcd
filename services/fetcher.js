import axios from 'axios'

export async function fetch(id=null, web=false) {
    if(web)
        return webFetch(id)
    else   
        return mockFetch(id)
}

function mockFetch(id) {
    // if(id === null)
    //     return {
    //         num: 2408,
    //         title: "Egg Strategies",
    //         img: "https://imgs.xkcd.com/comics/egg_strategies.png",
    //         alt: "Neutral Evil is for people who like keeping the weight nicely centered in the carton, but also hate everyone else who wants that."
    //     }
    // else 
    return {
        num: 2408,
        title: "Egg Strategies",
        img: "https://imgs.xkcd.com/comics/egg_strategies.png",
        alt: "Neutral Evil is for people who like keeping the weight nicely centered in the carton, but also hate everyone else who wants that."
    }
}

function webFetch(id) {
    // TODO: build a web fetcher
    return
}