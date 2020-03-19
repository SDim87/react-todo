export function objToArr(obj) {
  const newArr = []
  for (const key in obj) {
    const objToPush = {}
    objToPush.name = key
    for (const keys in obj[key]) {
      objToPush[keys] = obj[key][keys]
    }
    newArr.push(objToPush)
  }
  return newArr
}
