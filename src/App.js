import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentCard from "./app/studentCard";
import StudentEdit from "./app/studentEdit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<StudentCard />} />
        <Route path="/edit" exact element={<StudentEdit />} />
      </Routes>
    </>
  );
};

export default App;
