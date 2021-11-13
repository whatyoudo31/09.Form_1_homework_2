import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { renderYears } from "../utils/helpers";

const StudentCard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  if (user) {
    return (
      <div>
        <h1>Карточка студента</h1>
        <p>
          <b>Имя: </b>
          {user.name}
        </p>
        <p>
          <b>Фамилия: </b>
          {user.secondName}
        </p>
        <p>
          <b>Год рождения: </b>
          {user.yearOfBirth} {renderYears(user.yearOfBirth)}
        </p>
        <p>
          <b>Портфолио: </b>
          <a href={user.portfolio}>{user.portfolio}</a>
        </p>
        <Link to="/edit">
          <button className="btn btn-primary">Изменить</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Карточка студента</h1>
      <p>Нет данных</p>
      <Link to="/edit">
        <button className="btn btn-primary">Добавить</button>
      </Link>
    </div>
  );
};

export default StudentCard;
