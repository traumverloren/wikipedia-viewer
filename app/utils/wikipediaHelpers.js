import jsonp from 'jsonp-promise'

export async function getResults(keyword) {
  try {
    const results = await jsonp(`https://en.wikipedia.org/w/api.php?format=json&action=opensearch&limit=5&search=${keyword}`).promise;
    return results
  } catch (error) {
    console.warn('Error in getResults', error)
  }
}
