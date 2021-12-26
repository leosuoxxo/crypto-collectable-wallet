import queryString from 'query-string'
const BASE_API_URL = 'https://api.opensea.io/api/v1'
// const BASE_API_URL = 'https://testnets-api.opensea.io'

export class CollectableRepository {
  getCollectableById({ address, id }) {
    return fetch(`${BASE_API_URL}/asset/${address}/${id}`).then(res =>
      res.json(),
    )
  }

  getCollectables({ address, offset = 0, limit = 10 }) {
    const query = queryString.stringify({
      owner: address,
      offset,
      limit,
      format: 'json',
    })
    return fetch(`${BASE_API_URL}/assets?${query}`)
      .then(res => res.json())
      .then(res => res.assets)
  }
}
