import React, { useEffect } from "react";
import axios from "axios";
import Type from "./Type";

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";
    let client_id = "c1f4055ecc63cf3fc5b2ede72fce4fa6";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
            grant_type=${grant_type}
            &client_id=${client_id}
            &redirect_uri=http://localhost:3000/oauth/callback/kakao
            &code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);

  return (
    <div>
      <Type />
    </div>
  );
};

export default KakaoRedirectHandler;
