import queryString from 'query-string'
const BASE_API_URL = 'https://api.opensea.io/api/v1/assets'

export class CollectableRepository {
  getCollectables({ address, offset = 0, limit = 20 }) {
    const query = queryString.stringify({
      owner: address,
      offset,
      limit,
      format: 'json',
    })
    return fetch(`${BASE_API_URL}?${query}`)
      .then(res => res.json())
      .then(res => res.assets)
  }
}
