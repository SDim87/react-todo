export const Test = array => array.map(
  el => `${el.getFullYear()}-${
    el.getMonth() + 1 >= 10 ? el.getMonth() + 1 : `0${el.getMonth() + 1}`
  }-${el.getDate() >= 10 ? el.getDate() : `0${el.getDate()}`}`
)
