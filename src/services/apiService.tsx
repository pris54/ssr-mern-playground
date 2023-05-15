class ApiHandler {
  method: string
  endpoint: string
  body: string
  headers: {
    'Accept': string,
    'Content-Type': string
  }

  /**
   * API Handler class.
   */
  constructor (_method: string, _endpoint: string, _body: string | null) {
    this.method = _method;
    this.endpoint = _endpoint
    if (_body) {
      this.body = JSON.stringify(_body)
    }
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  /**
   * GET request;
   * @returns {Promise<Error|any>}
   */
  async getRequest () {
    let response = await fetch(
      this.endpoint,
      {
        method: 'GET',
        headers: this.headers
      }
    )
    if (!response.ok) {
      return new Error(`Req failed: ${response.status}`)
    }
    return response.json()
  }

  /**
   * POST request.
   * @returns {Promise<Error|any>}
   */
  async postRequest () {
    let response = await fetch(
      this.endpoint,
      {
        method: this.method,
        headers: this.headers,
        body: this.body
      }
    )
    if (!response.ok) {
      return new Error(`Req failed: ${response.status}`)
    }
    return response.json()
  }
}

const API_URL = 'http://localhost:8000/'

const fetchPage = async (page: string) => {
  if (!page) {
    console.error('ERROR: PAGE NOT FOUND')
  }
  const endpoint = `${API_URL}?id=${page}`
  const apiHandler = new ApiHandler('GET', endpoint, null)
  return apiHandler.getRequest()
}

export {
  fetchPage
}
