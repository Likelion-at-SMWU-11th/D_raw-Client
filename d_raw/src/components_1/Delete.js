import React from "react";
import "./static/Base.css";
import "./static/Delete.css";

const Delete = () => {
  return (
    <div>
      <div className="info">
        성공적으로 <br /> 취소가 완료되었습니다.
      </div>{" "}
      <br />
      <div className="delete_content">
        <img src="/images/Delete.png" width="120" height="160" />
        <br /> <br />
        정상적으로 취소가 완료되었습니다.
        <br />
        취소상세는 내 예약에서 확인할 수 있습니다.
      </div>
      <div>
        <button className="submit">내 매칭으로 이동</button>
      </div>
    </div>
  );
};

export default Delete;
