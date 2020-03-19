import React from 'react';
import { connect } from 'react-redux'

import * as Button from '../../Components/Button/Button'

import './index.css'

const UsersManagement = ({ identificator, widgets }) => {
  return (
    <React.Fragment>
      <div className='import-data__wrapper content-widget__default-wrapper'>
        <div className="import-data__buttons">
          <Button.ButtonFirst>Добавить нового пользователя</Button.ButtonFirst>
          <Button.ButtonFirst>Загрузить пользователей</Button.ButtonFirst>
        </div>
        <div className="import-data__filter-choose">
          <Button.ButtonSecond>Выбор фильтров</Button.ButtonSecond>
        </div>
        <h2>Выберите пользователей для редактирования</h2>
        <table className="import-data__table">
          <thead>
            <tr>
              <th>Пользователь</th>
              <th>Логин</th>
              <th>АРМы</th>
              <th>Подразделение/Бригада/Группа продаж</th>
              <th>Проекты</th>
              <th>Площадка</th>
              <th>Состояние</th>
              <th>checkbox</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ armData }) => {
  return {
    widgets: armData.moduleData.widgets
  }
}

export default connect(mapStateToProps)(UsersManagement)
