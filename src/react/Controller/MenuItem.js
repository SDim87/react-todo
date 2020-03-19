export class MenuItem {
  constructor(params, parent) {
    this.id = params.id
    this.acronim = params.acronim
    this.name = params.name
    this.description = params.description
    this.sort = params.sort
    this.finalUrl = this.generateFinalUrl(this.acronim, parent)
    this.url = this.generateUrl(this.acronim)
    this.submodules = params.submodules ? params.submodules : false
  }

  // generateURL func
  generateFinalUrl = (acronim, parent) => {
    // console.log(parent, acronim)
    if (acronim === 'main') {
      return '/main'
    } else if (parent) {
      return `/main/${this.generateUrl(parent)}/${this.generateUrl(acronim)}`
    } else {
      return `/main/${this.generateUrl(acronim)}`
    }
  }

  generateUrl = acronim => {
    if (acronim.match('_')) {
      return `${acronim.split('_').join('-')}`
    } else {
      return `${acronim}`
    }
  }
}
