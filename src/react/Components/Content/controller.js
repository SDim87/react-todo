import Module from '../../Controller/Module'
import { requestMethod } from '../../Controller/Request'
import { MenuItem } from '../../Controller/MenuItem'
import { Store } from '../../Redux/Stores/Store'
import actions from '../../Redux/Actions'

const { setModuleData, setMenuItems } = actions

// default content data
export async function getData() {
  if (Store.getState() && Store.getState().systemData.currentArm) {
    const currentRole = Store.getState().systemData.currentRole
    const currentArm = Store.getState().systemData.currentArm

    const requestResult = await requestMethod({
      method: 'POST',
      addURL: 'module/getArmModules',
      data: {
        arm_acronim: `${currentArm}`,
        role_acronim: `${currentRole}`,
      },
    })

    setModuleData(new Module(currentModule(requestResult)))
    setMenuItems(generateMenuItems(requestResult))
    return requestResult
  }
}

// !== main module data
export async function getModuleContent(moduleAcronim, menuItems) {
  const currentRole = Store.getState().systemData.currentRole
  const currentArm = Store.getState().systemData.currentArm
  let returnValue
  requestMethod({
    method: 'POST',
    addURL: 'widget/getModuleWidgets',
    data: {
      acronim: moduleAcronim.acronim,
      arm_acronim: `${currentArm}`,
      role_acronim: `${currentRole}`,
    },
  })
    .then(res => {
      const currentModule = menuItems.filter(item => item.acronim === moduleAcronim.acronim)[0]
      return {
        ...currentModule,
        widgets: res.data,
      }
    })
    .then(res => {
      setModuleData(new Module(res))
      returnValue = res
    })

  // setModuleData(new Module(newModuleData));
  return returnValue
}

const currentModule = requestResult => {
  for (let key in requestResult.data) {
    if (requestResult.data[key].widgets) {
      return requestResult.data[key]
    }
  }
}

// Генерим пункты меню с урлами, названиями страниц и записываем
const generateMenuItems = requestResult => {
  const menuItems = []
  for (let key in requestResult.data) {
    const generateSubModules = (obj, parentObjValue) => {
      const subModules = []
      for (let key in obj) {
        subModules.push(new MenuItem(obj[key], parentObjValue))
      }
      return subModules
    }

    if (requestResult.data[key].submodules) {
      requestResult.data[key].submodules = generateSubModules(
        requestResult.data[key].submodules,
        key,
      )
      menuItems.push(new MenuItem(requestResult.data[key]))
    } else {
      menuItems.push(new MenuItem(requestResult.data[key]))
    }
  }
  return menuItems.sort((a, b) => a.sort - b.sort)
}
