import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/typeinfo.css";

const Typeinfo = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //회원 정보를 처리하거나 저장하는 로직 추가
    console.log("Name: ", name);
    console.log("Gender: ", gender);
    console.log("Age: ", age);
  };

  const goToNextpage = () => {
    navigate("/type/info/selectregion");
  };

  const textdeco = {
    textDecoration: "none",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="select">
        <header></header>
        <h3>
          안내사 등록을 위한
          <br /> 정보를 입력해 주세요 🙂
        </h3>
        <p>
          <label>
            이름
            <br />
            <input
              className="textarea"
              type="text"
              value={name}
              onChange={handleNameChange}
              name="full_name"
              placeholder="  실명을 입력해주세요"
              required
            />
          </label>
          <br />
          성별
          <label>
            <br />
            <div id="wrapper">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
                required
              />
              남자
            </div>
          </label>
          <label>
            <div id="wrapper">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              여자
            </div>
          </label>
          <br />
          <label>
            나이
            <br />
            <input
              className="numarea"
              type="number"
              name="age"
              value={age}
              onChange={handleAgeChange}
              placeholder="  나이를 입력해주세요"
              required
            />
            세
          </label>
          <br />
          <br />
          <label>활동지역</label>
          <br />
          {/*           <button type="submit" className="add" onClick={goToNextpage}>
            추가하기
          </button> */}
          {name != "" && gender != "" && age != "" ? (
            <button type="submit" className="add" onClick={goToNextpage}>
              추가하기
            </button>
          ) : (
            ""
          )}
        </p>
        <button type="submit">입력 정보 저장</button>
      </div>
    </form>
  );
};

export default Typeinfo;
