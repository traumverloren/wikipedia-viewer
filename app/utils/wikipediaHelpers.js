import jsonp from 'jsonp-promise'

export async function getResults(keyword) {
    const results = await jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${keyword}`).promise;
    return results
// need to map these and create an array with title + description
}
