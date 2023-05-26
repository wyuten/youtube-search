export default class RequestClient {
  constructor({ baseURL }) {
    this.baseURL = baseURL
  }

  async get() {
    const { url, searchParams } = this.#buildRequest(...arguments)
    const response = await fetch(`${this.baseURL}${url}${searchParams}`)
    return await response.json()
  }

  #buildRequest(url, options) {
    return {
      url,
      searchParams: `?${new URLSearchParams(options.params).toString()}`
    }
  }
}
