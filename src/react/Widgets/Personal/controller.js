import { requestMethod } from '../../Controller/Request'

export function getAllArms() {
  // get all possible arms in this system
  const requestResult = requestMethod({
    method: 'POST',
    addURL: 'armlist',
    data: {},
  })
  return requestResult
}

export const dataInputsUser = [
  {
    name: 'second-name',
    label: 'Фамилия',
    type: 'text',
  },
  {
    name: 'first-name',
    label: 'Имя',
    type: 'text',
  },
  {
    name: 'middle-name',
    label: 'Отчество',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'login',
    label: 'Логин',
    type: 'login',
    value: 't.smirnov',
  }
]

export const dataInputsContacts = [
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
    value: '79374446644',
  },
  {
    name: 'inner-number',
    label: 'Внутренний номер',
    type: 'text',
    value: '911',
  }
]

export const optionsSelect = {
  working: [
    { value: '5/2', label: '5/2', },
    { value: '3/3', label: '3/3', },
    { value: '2/2', label: '2/2', }
  ],
  position: [
    { value: 'Администратор', label: 'Администратор', },
    { value: 'Оператор', label: 'Оператор', },
    { value: 'Директор', label: 'Директор', }
  ],
  graid: [
    { value: 'Грейд', label: 'Грейд', },
    { value: 'Брейд', label: 'Брейд', },
    { value: 'Зрейд', label: 'Зрейд', }
  ],
  group: [
    { value: 'Бригада Анисимова', label: 'Бригада Анисимова', },
    { value: 'Бригада Пушкина', label: 'Бригада Пушкина', },
    { value: 'Бригада Лермонтова', label: 'Бригада Лермонтова', }
  ],
  chief: [
    { value: 'Анисимов', label: 'Анисимов', },
    { value: 'Пушкин', label: 'Пушкин', },
    { value: 'Лермонтов', label: 'Лермонтов', }
  ],
  branch: [
    {
      value: 'ФЦ ОТП',
      label: 'Федереальный центр обслуживания телемаркетинговых проектов (ФЦ ОТП)',
    },
    { value: 'РЦ ТГВ', label: 'Региональный центр обслуживания теплогазовентиляции (ФЦ ТГВ)', },
    {
      value: 'РЦ ОРП',
      label: 'Региональный центр обслуживания организационно-производственных предприятий (ФЦ ТГВ)',
    }
  ],
  location: [
    { value: 'МРФ', label: 'Международный центр', },
    { value: 'РФ', label: 'Федеральный центр', },
    { value: 'КЦ', label: 'Корпоративный центр', }
  ],
  address: [
    { value: 'ulianovsk1', label: 'г. Ульяновск, пр-т Победы 43', },
    { value: 'ulianovsk2', label: 'г. Ульяновск, ул. Константинопольская 124 стр.2', },
    { value: 'Москва1', label: 'г. Москва, ул. Зои Космодимьянской 326 стр.12', }
  ],
  director: [
    { value: 'Пушкин', label: 'Пушкин', },
    { value: 'Лермонтов', label: 'Лермонтов', },
    { value: 'Толстой', label: 'Толстой', }
  ],
}
