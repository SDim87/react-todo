import React, { useState } from 'react'
import { connect } from 'react-redux'
import InputInfo from '../../Components/InputInfo/InputInfo'
import { dataInputsUser, optionsSelect, dataInputsContacts } from './controller'
import Select from '../../Components/Select/Select'
import InputDateSelect from '../../Components/InputDateSelect/InputDateSelect'
import ArmFirst from '../../Components/ArmFirst/ArmFirst'
import { ButtonFirst } from '../../Components/Button/Button'
import SliderFirst from '../../Components/SliderFirst/SliderFirst'
// import { requestMethod } from '../../Controller/Request'

import '../../Components/Helpers/visually-hidden.css'
import './index.css'

const Personal = ({ currentArm, userData, photo }) => {
  // console.log('Personal -> userData', userData)
  const [windowAvatar, setWindowAvatar] = useState(false)

  const setListArms = () => {
    const { automated_workplaces = [] } = userData
    return automated_workplaces.map(el => (
      <ArmFirst key={el.id} acronim={el.acronim} name={el.name} />
    ))
  }

  // const requestData = () => {
  //   requestMethod({
  //     method: 'POST',
  //     addURL: 'users/get',
  //     data: { id: 109 },
  //   }).then(res => {
  //     console.log(res)
  //   })
  // }

  // requestData()

  // const requestDataPhotoes = () => {
  //   requestMethod({
  //     method: 'POST',
  //     addURL: 'users/getAllPhotos',
  //     data: { user_id: userData.id },
  //   }).then(res => {
  //     console.log(res)
  //   })
  // }

  // requestDataPhotoes()

  // const setPathActiveImg = (arr = []) => {
  //   const newArr = arr.filter(el => el.is_main === true)
  //   if (newArr.length > 0) {
  //     return `data:image/jpeg;base64,${newArr[0].file}`
  //   } else {
  //     return `${process.env.PUBLIC_URL}/assets/user-images/default-user.jpg`
  //   }
  // }

  return (
    <React.Fragment>
      <SliderFirst
        windowAvatar={windowAvatar}
        setWindowAvatar={setWindowAvatar}
        userData={userData}
      />
      <div className="personal">
        <div className="personal__container personal__container_first">
          <section className="personal__section">
            <header className="personal__header">
              <h1 className="personal__title">Персональная информация</h1>
            </header>
            <div className="personal__content">
              <section className="personal__ava">
                <h2 className="visually-hidden">Блок личная фотография</h2>
                <div className="personal__img-box">
                  <img
                    className="personal__img"
                    // src={setPathActiveImg(photo)}
                    alt="img"
                  />
                </div>
                <ButtonFirst
                  // раскомитить для открытия слайдера
                  onClick={() => {
                    setWindowAvatar(true)
                  }}
                >
                  Изменить фотографию
                </ButtonFirst>
              </section>
              <section className="personal__inner">
                <article className="personal__article">
                  <h2 className="personal__title personal__title_indent">Личная информация</h2>
                  <div className="personal__inputs-box">
                    {dataInputsUser.map(el => (
                      <InputInfo key={el.name.toString()} dataEl={el} />
                    ))}
                  </div>
                  <div className="personal__inputs-box">
                    <Select options={optionsSelect.working} label={'График'} />
                    <Select options={optionsSelect.position} label={'Должность'} />
                    <Select options={optionsSelect.graid} arm={currentArm} label={'Уровень'} />
                  </div>
                </article>
                <article className="personal__article">
                  <div className="personal__date">
                    Дата первого рабочего дня: <InputDateSelect />
                  </div>
                  <div className="personal__date">
                    Дата первого рабочего дня: <InputDateSelect />
                  </div>
                </article>
                <article className="personal__article">
                  <h2 className="personal__title personal__title_indent">Контакты</h2>
                  <div className="personal__inputs-box">
                    {dataInputsContacts.map(el => (
                      <InputInfo key={el.name.toString()} dataEl={el} />
                    ))}
                  </div>
                  <div className="personal__inputs-box">
                    <Select
                      options={optionsSelect.group}
                      label={'Подразделение/Бригада/Группа продаж'}
                    />
                    <Select
                      options={optionsSelect.chief}
                      label={'Руководитель/Бригадир/Супервизор'}
                    />
                  </div>
                </article>
                <article className="personal__arms">
                  <h2 className="personal__title personal__title_indent">АРМЫ</h2>
                  <div className="personal__arms-wrap">{setListArms()}</div>
                  <div className="personal__arms-btn">
                    <ButtonFirst>Применить</ButtonFirst>
                  </div>
                </article>
              </section>
            </div>
          </section>
        </div>
        <div className="personal__container personal__container_second">
          <section className="personal__section">
            <header className="personal__header"></header>
            <div className="personal__content personal__content_second">
              <article className="personal__article">
                <h2 className="personal__title personal__title_indent">Рабочая информация</h2>
                <div className="personal__inputs-box">
                  <Select
                    options={optionsSelect.branch}
                    arm={currentArm}
                    label={'Название филиала'}
                  />
                  <Select options={optionsSelect.location} arm={currentArm} label={'МРФ/РФ/КЦ'} />
                  <Select
                    options={optionsSelect.address}
                    arm={currentArm}
                    label={'Площадка, Адрес площадки'}
                  />
                  <Select options={optionsSelect.director} arm={currentArm} label={'Директор'} />
                </div>
              </article>
              <article className="personal__article">
                <h2 className="personal__title personal__title_indent">Проекты</h2>
                <div className="personal__inputs-box">тут будут выбранные фильтры</div>
              </article>
            </div>
          </section>
          <section className="personal__section">
            <header className="personal__header">
              <h1 className="personal__title">Смена пароля</h1>
            </header>
            <div className="personal__content personal__content_second">
              <article className="personal__article">
                <form className="personal__inputs-pass" action="" method="post">
                  <InputInfo labelText={'Старый пароль'} />
                  <div className="personal__inputs-wrap">
                    <InputInfo labelText={'Новый пароль'} />
                    <InputInfo labelText={'Повторить новый пароль'} />
                  </div>
                  <div className="personal__btn-pass">
                    <ButtonFirst>Применить</ButtonFirst>
                  </div>
                </form>
              </article>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ systemData, userData }) => {
  return {
    currentArm: systemData.currentArm,
    userData: userData,
    photo: userData.photo,
  }
}

export default connect(mapStateToProps)(Personal)
