import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";
import { useNavigate } from "react-router-dom";

const StudentEdit = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  const history = useNavigate();
  const [data, setData] = useState(
    user || {
      name: "",
      secondName: "",
      yearOfBirth: "",
      portfolio: "",
      isTriedIcecream: "",
    }
  );
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле 'Имя' обязательно для заполнения",
      },
    },
    secondName: {
      isRequired: { message: "Поле 'Фамилия' обязательно для заполнения" },
    },
    yearOfBirth: {
      isRequired: { message: "Поле 'Год рождения' обязательно для заполнения" },
      isTrueYear: { message: "Поле 'Год рождения' не корректно", value: 2022 },
    },
    portfolio: {
      isRequired: { message: "Поле 'Портфолио' обязательно для заполнения" },
      isUrl: { message: "Поле 'Портфолио' должно быть ссылкой" },
    },
    isTriedIcecream: {
      isRequired: { message: "Это поле обязательно для заполнения" },
      isBoolean: { message: "Ответ должен быть 'Да' или 'Нет'" },
      isTried: { message: "Дак бегите пробовать, затем возвращайтесь!" },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem("user", JSON.stringify(data));
    history("/");
    setData({
      name: "",
      secondName: "",
      yearOfBirth: "",
      portfolio: "",
      isTriedIcecream: "",
    });
  };

  const handleBack = () => {
    history("/");
  };

  if (localStorage.length != 0) {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 shadow p-4">
              <h1>Редактировать</h1>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Имя"
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <TextField
                  label="Фамилия"
                  type="text"
                  name="secondName"
                  value={data.secondName}
                  onChange={handleChange}
                  error={errors.secondName}
                />
                <TextField
                  label="Год рождения"
                  type="number"
                  name="yearOfBirth"
                  value={data.yearOfBirth}
                  onChange={handleChange}
                  error={errors.yearOfBirth}
                />
                <TextField
                  label="Портфолио"
                  type="text"
                  name="portfolio"
                  value={data.portfolio}
                  onChange={handleChange}
                  error={errors.portfolio}
                />
                <TextField
                  label="Вы пробовали Сырное Мороженое?"
                  type="text"
                  name="isTriedIcecream"
                  value={data.isTriedIcecream}
                  onChange={handleChange}
                  error={errors.isTriedIcecream}
                />
                <button
                  onClick={handleBack}
                  className="btn w-100 mx-auto m-2 btn-secondary"
                >
                  Назад
                </button>
                <button
                  disabled={!isValid}
                  className="btn btn-primary w-100 mx-auto m-2"
                >
                  Обновить
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h1>Создать</h1>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Фамилия"
                type="text"
                name="secondName"
                value={data.secondName}
                onChange={handleChange}
                error={errors.secondName}
              />
              <TextField
                label="Год рождения"
                type="number"
                name="yearOfBirth"
                value={data.yearOfBirth}
                onChange={handleChange}
                error={errors.yearOfBirth}
              />
              <TextField
                label="Портфолио"
                type="text"
                name="portfolio"
                value={data.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
              />
              <TextField
                label="Вы пробовали Сырное Мороженое?"
                type="text"
                name="isTriedIcecream"
                value={data.isTriedIcecream}
                onChange={handleChange}
                error={errors.isTriedIcecream}
              />
              <button
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentEdit;
