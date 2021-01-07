import axios from 'axios'

export async function fetch(id, web=false) {
    if(web)
        return webFetch(id)
    else   
        return mockFetch(id)
}

function mockFetch(id) {
    
}

function webFetch(id) {
    // TODO: build a web fetcher
    return
}