import actions from '../../Redux/Actions'

const { setCurrentRole, } = actions

export function rememberRole(armAcronim, checked) {
  // if checkbox checked-status is true, remember selected arm
  if (checked) {
    // dispatch setCurrentRole to redux
    setCurrentRole(armAcronim)
  } else {
    return null
  }
}
