import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./static/Base.css";
import "./static/Matching.css";

const Matching = () => {
  // const [state, setState] = state("");
  const [showItem, setShowItem] = useState({});
  const [isOpenSchedule, setIsOpenSchedule] = useState(false);
  const [isOpenAddress, setIsOpenAddress] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenHelper, setIsOpenHelper] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [checkboxValuesExist, setCheckboxValuesExist] = useState(false);
  const navigate = useNavigate();

  //토글 단추
  const toggleOpenSchedule = () => {
    setIsOpenSchedule((isOpenSchedule) => isOpenSchedule); //on&off 개념
  };
  const toggleOpenAddress = () => {
    setIsOpenAddress((isOpenAddress) => isOpenAddress); //on&off 개념
  };
  const toggleOpenInfo = () => {
    setIsOpenInfo((isOpenInfo) => isOpenInfo); //on&off 개념
  };
  const toggleOpenHelper = () => {
    setIsOpenHelper((isOpenHelper) => isOpenHelper); //on&off 개념
  };

  /*   const toggleItem = () => {
    //상태값 갱신
    setShowItem((prevShowItem) => ({
      //스프레드 연산자를 활용해 나머지 값은 그대로 저장
      ...prevShowItem,
      //파라미터로 받은 값을 key로 사용, 논리연산자를 활용해 해당 값의 true/false 설정
      [id]: !prevShowItem[id],
    }));
  };

  currentList.map((list, index) => {
    <div>
      key={list.reception_no}
      onClick={() => toggleItem(list.reception_no)}
    </div>;
  }); 
  출처 : https://chan-co.tistory.com/158
  

  {
    showItem[list.reception_no] ? <div></div> : null;
  }
*/
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const dataToSend = {
        selectedValue, // 사용자가 선택한 값 ('fast' 또는 'profile')
      };

      const response = await axios.post("/match/submit", dataToSend); // 서버에 데이터 전송
      console.log("서버 응답:", response.data);

      // 기존의 로직을 유지합니다.
      console.log("SelectedValue: ", selectedValue);
    } catch (error) {
      console.error("에러:", error);
    }
  };

  useEffect(() => {
    // Fetch checkbox values using axios.get when the component mounts
    axios
      .get("/match/profile") // Replace with your actual server endpoint
      .then((response) => {
        console.log("Fetched checkbox values:", response.data);
        // Check if checkbox values exist
        if (
          response.data &&
          (response.data.isChecked1 || response.data.isChecked2)
        ) {
          setCheckboxValuesExist(true);
        }
        // ... (rest of the code)
      })
      .catch((error) => {
        console.error("Error fetching checkbox values:", error);
      });
  }, []);

  const goToHelperList = () => {
    navigate("/match/helperlist");
  };

  const goToFastMatching = () => {
    navigate("/match/quick");
  };

  const goToProfileMatching = () => {
    navigate("/match/profile");
  };

  const goToSceduleEdit = () => {
    navigate("/match/1");
  };

  const goToAddressEdit = () => {
    navigate("/match/2");
  };
  const onBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <header>
          {" "}
          <img
            src="/images/back.png"
            className="GoBackButton"
            onClick={onBack}
            width="20"
            height="20"
          />
          신청 정보 확인
        </header>
        <hr />
        <br />
        <div>
          <label>
            <div id="wrapper_way">
              <div className="first">
                <input
                  type="radio"
                  name="matching"
                  value="fast"
                  checked={selectedValue === "fast"}
                  onChange={handleRadioChange}
                />
              </div>
              <div className="second">
                <img src="/images/matching_fast.png" width="30" height="30" />
              </div>
              <div className="third">
                <span className="matching_title">빠르게 찾기</span>
                <br />
                <span className="matching_content">
                  선택 없이 바로 배정받고 싶어요.
                </span>
              </div>
            </div>
          </label>
          <br />
          <label>
            <div id="wrapper_way">
              <div className="first">
                <input
                  type="radio"
                  name="matching"
                  value="profile"
                  checked={selectedValue === "profile"}
                  onChange={handleRadioChange}
                  onClick={() => {
                    setVisible(!visible);
                  }}
                />
              </div>
              {/*                 <div className="second">🕵🏻</div> */}
              <div className="second">
                <img
                  src="/images/matching_profile.png"
                  width="30"
                  height="30"
                />
              </div>
              <div className="third">
                <span className="matching_title">프로필 보고 찾기</span>
                <br />
                <span className="matching_content">
                  프로필 보고 선택하고 싶어요.
                </span>
              </div>
              <br /> <br />
              {visible ? (
                <div className="selecting">
                  💁🏻‍♀ 안내사를 선택해주세요 &nbsp;
                  <button className="selecting_button" onClick={goToHelperList}>
                    선택
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </label>
          {/*           <button type="submit" className="submit">
            신청 완료
          </button> */}
          <br />
        </div>
        <hr />
        📅 일정
        <button
          className="toggle_button"
          onClick={() => setIsOpenSchedule(!isOpenSchedule)}
        >
          {" "}
          &#8744;
        </button>
        {isOpenSchedule ? (
          <>
            <div>
              <div className="content_left">시작일시</div>{" "}
              <div className="content_right">
                &nbsp;&nbsp;&nbsp;2023.8.18 금 오후 1시
              </div>
              <div className="content_left">종료일시</div>{" "}
              <div className="content_right">2023.8.18 금 오후 5시</div>
              <button className="add" onClick={goToSceduleEdit}>
                수정
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        <hr />
        <img src="/images/Location_pin.png" width="20" height="20" />
        &nbsp;주소
        <button
          className="toggle_button"
          onClick={() => setIsOpenAddress(!isOpenAddress)}
        >
          {" "}
          &#8744;
        </button>
        {isOpenAddress ? (
          <>
            <br />
            <div>
              <div className="content_left">기본주소</div>{" "}
              <div className="content_right">
                서울특별시 용산구 청파로 47길 100
              </div>
              <button className="add" onClick={goToAddressEdit}>
                수정
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        <hr />
        👤 이용자 정보
        <button
          className="toggle_button"
          onClick={() => setIsOpenInfo(!isOpenInfo)}
        >
          {" "}
          &#8744;
        </button>
        {isOpenInfo ? (
          <>
            <br />
            <div className="info_user_matching">
              <div></div>
              <button className="add">
                {/* 주은이 주소 입력란으로 돌아가기              <button className="add" onClick={goToEditPage}> */}
                수정
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        <hr />
        👩🏻‍💼 안내사 정보
        <button
          className="toggle_button"
          onClick={() => setIsOpenHelper(!isOpenHelper)}
        >
          {" "}
          &#8744;
        </button>
        {isOpenHelper ? (
          <>
            <br />
            안내사 정보
          </>
        ) : (
          ""
        )}
        <br />
        <br />
        {/* Based on checkboxValuesExist, set the default selectedValue */}
        {checkboxValuesExist
          ? selectedValue === "" && setSelectedValue("profile")
          : selectedValue === "profile" && setSelectedValue("")}
        <div>
          {selectedValue === "fast" ? (
            <>
              {" "}
              '
              <button
                type="submit"
                className="submit_matching"
                onClick={goToFastMatching}
              >
                {" "}
                신청 완료
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                type="submit"
                className="submit_matching"
                onClick={goToProfileMatching}
              >
                {" "}
                신청 완료
              </button>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default Matching;
