import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProfileEdit = () => {
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

  const goToProfilePage = () => {
    navigate("/profile");
  };

  const textdeco = {
    textDecoration: "none",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="select">
        <header>내 프로필 수정</header>
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
            />
            세
          </label>
          <br />
          <br />
          <br />
          <div>
            <button type="submit" className="submit" onClick={goToProfilePage}>
              변경 완료
            </button>

            <button type="submit">입력 정보 저장</button>
          </div>
        </p>
      </div>
    </form>
  );
};

export default MyProfileEdit;
