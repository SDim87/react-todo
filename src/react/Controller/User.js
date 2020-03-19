export default class User {
  constructor(params) {
    this.id = params.id
    this.login = params.login
    this.first_name = params.first_name
    this.middle_name = params.middle_name
    this.surname = params.surname
    this.full_name = this.setFullName()
    this.blocked = params.blocked
    this.mobile_tel = params.mobile_tel
    this.mobile_work = params.mobile_work
    this.mini_photo = params.mini_photo
    this.photo = params.photo
    this.roles = params.roles
    this.automated_workplaces = params.automated_workplaces
    this.search_field = this.setSearchField()
    this.organization_id = params.organization_id
    this.platform_id = params.platform_id
    this.salegroup_id = params.salegroup_id
  }

  // full_name method
  setFullName = () => `${this.first_name} ${this.middle_name} ${this.surname}`

  // full_name method
  setSearchField = () =>
    `${this.first_name} ${this.middle_name} ${this.surname} ${this.login}`.toLowerCase()
}
