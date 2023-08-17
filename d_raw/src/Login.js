import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./static/Base.css";
import "./static/Login.css";

const Login = () => {
  const hiimgstyle = {
    height: "50px",
    width: "50px",
    margin: "5px 0px",
  };

  const h2hellostyle = {
    fontSize: "40px",
    color: "black",
    fontWeight: "9000",
  };

  const spanstyle = {
    color: "orange",
  };

  //출처 https://stack94.tistory.com/entry/React-%EC%B9%B4%EC%B9%B4%EC%98%A4Kakao-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0
  const Rest_api_key = "c1f4055ecc63cf3fc5b2ede72fce4fa6"; //REST API KEY
  const redirect_uri = "http://localhost:3000/auth"; //Redirect URI

  /*   const Rest_api_key = "d8fd6327b24b302b1d20f0690b10d3f4"; //REST API KEY
  const redirect_uri = "http://localhost:3000/account/kakao/accesstoken/"; //Redirect URI */

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const clientId =
    "555634110952-c5t2rupen80po6djj3ih1sf27500nddk.apps.googleusercontent.com";

  const handleLogin = () => {
    window.location.href = kakaoURL;
    const code = new URL(window.location.href).searchParams.get("code"); //인가코드
  };

  /*   const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;

  const initKakao = async () => {
    const jsKey = "b813f63b1e191fd35ec8337d4594910f";
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
    }
  };
  const KakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        console.log(res);
        Kakao.Auth.setAccessToken(res.access_token);
        console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            console.log("카카오 인가 요청 성공");
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            localStorage.setItem("email", kakaoAccount.email);
            localStorage.setItem(
              "profileImg",
              kakaoAccount.profile.profile_image_url
            );
            localStorage.setItem("nickname", kakaoAccount.profile.nickname);
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };

  const kakaoLogout = () => {
    Kakao.Auth.logout((res) => {
      console.log(Kakao.Auth.getAccessToken());
      console.log(res);
      localStorage.removeItem("email");
      localStorage.removeItem("profileImg");
      localStorage.removeItem("nickname");
      setUser(null);
    });
  };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    console.log(isLogin);
    if (isLogin) {
      setUser({
        email: localStorage.getItem("email"),
        profileImg: localStorage.getItem("profileImg"),
        nickname: localStorage.getItem("nickname"),
      });
    }
  }, [isLogin]); */

  return (
    <>
      <div class="login">
        <header></header>
        <div class="content">
          <img src="/images/Hi.png" style={hiimgstyle} />
          <p>
            <h2 style={h2hellostyle}>어서오세요!</h2>
            <h4>
              D:raw 에 오신 걸 환영합니다.
              <br />
              서비스 이용을 위해 로그인을 해주세요!
              <br />
              <span style={spanstyle}>
                가입 정보는 SNS로 공유되지 않습니다.
              </span>
            </h4>
          </p>
          <img
            className="login_Button"
            src="/images/kakao_login.png"
            height="45px"
            width="300px"
            margin="0 10px"
            alt="카카오 로그인 버튼"
            onClick={handleLogin}
          />
        </div>

        {/*       <h1>👋</h1>
      <h1>어서오세요!</h1>
      <h3>D:raw 에 오신 걸 환영합니다.</h3>
      <h3>서비스 이용을 위해 로그인을 해주세요!</h3>
      <h3>가입 정보는 SNS로 공유되지 않습니다.</h3> */}
        {/*         <div class="wrap">
          <hr class="bar" />
          <span class="txt">또는</span>
          <hr class="bar" />
        </div>
        <p class="textcenter"> 다른 소셜 계정으로 로그인하시겠어요?</p>
        <div class="wrap">
          <div class="inlineblock">네이버 로그인</div>
          <div class="inlineblock">구글 로그인</div>
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={(res) => {
                console.log(res);
              }}
              onFailure={(err) => {
                console.log(err);
              }}
            />
          </GoogleOAuthProvider> 
        </div> */}
      </div>
    </>
  );
};

export default Login;
