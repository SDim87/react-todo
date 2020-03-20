import Module from '../../Controller/Module'
import { requestMethod } from '../../Controller/Request'
import { MenuItem } from '../../Controller/MenuItem'
import { Store } from '../../Redux/Stores/Store'
import actions from '../../Redux/Actions'

const { setModuleData, setMenuItems } = actions

// Генерим пункты меню с урлами, названиями страниц и записываем
const generateMenuItems = requestResult => {
  const menuItems = []

  for (const key in requestResult.data) {
    if (Object.prototype.hasOwnProperty.call(requestResult.data, key)) {
      const generateSubModules = (obj, parentObjValue) => {
        const subModules = []

        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            subModules.push(new MenuItem(obj[key], parentObjValue))
          }
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
  }

  return menuItems.sort((itemA, itemB) => itemA.sort - itemB.sort)
}

const currentModule = requestResult => {
  for (const key in requestResult.data) {
    if (requestResult.data[key].widgets) {
      return requestResult.data[key]
    }
  }
}

// default content data
export async function getData() {
  if (Store.getState() && Store.getState().systemData.currentArm) {
    const { currentRole } = Store.getState().systemData
    const { currentArm } = Store.getState().systemData

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
  const { currentRole } = Store.getState().systemData
  const { currentArm } = Store.getState().systemData
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
