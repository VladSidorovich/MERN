import React from 'react'

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи ссылку</h1>
        <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Авторизация</span>
          <div>
          
          <div className="input-field">
            <input
              placeholder="Введите email"
              id="email"
              type="text"
              name="email"
              className="yellow-input"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              placeholder="Введите пароль"
              id="password"
              type="password"
              name="password"
              className="yellow-input"
            />
            <label htmlFor="password">Пароль</label>
          </div>
          </div>
        </div>
        <div className="card-action">
          <button class="btn yellow darken-4" style={{marginRight: 10}}> Войти</button>
          <button class="btn grey lighten-1"> Регистрация </button>
        </div>
      </div>
      </div>
    </div>
  )
}