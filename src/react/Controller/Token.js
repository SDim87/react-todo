export default class Token {
  constructor(params) {
    this.access_token = params.access_token
    this.refresh_token = params.refresh_token
    this.expires_in = params.expires_in
    this.token_type = params.token_type
    this.token_die_date = this.setTokenDieDate()
  }

  // set token_die_date
  setTokenDieDate = () => {
    const today = new Date()
    const token_die_date = +today + this.expires_in
    return token_die_date
  }
}
