export default class RequestClient {
  constructor({ baseURL }) {
    this.baseURL = baseURL
  }

  async get(url) {
    const response = await fetch(`${this.baseURL}${url}`)
    return await response.json()
  }
}
