import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const goToEditCareer = () => {
    navigate("/account/guideedit/<int:guide_id>/");
  };

  const goToStartDate = () => {
    navigate("/profile/edit/date");
  };

  /*   const goToReview = () => {
    navigate("/match/profile/<int:pk>");
  }; */

  const goToHelperProfile = () => {
    navigate("/match/profile/<int:pk>");
  };

  /*   프로필 사진 구현 */

  const [previewImage, setPreviewImage] = useState(
    "/images/default_profile.png"
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("profileImage", selectedImage);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/account/guideprofile",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Upload successful:", response.data);
        // 여기에서 서버 응답 처리 가능
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
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
        내 프로필 수정
      </header>
      <div>
        {/*       <img class="profile" src="" />
        <br /> */}
        {previewImage && (
          <img
            className="box"
            src={previewImage}
            alt="프로필 사진 미리보기"
            style={{ width: "150px", height: "150px" }}
          />
        )}
      </div>
      <div className="profile_input">
        <label for="input-file">
          <img
            className="profile_input_label"
            src="/images/camera.png"
            width="40"
            height="40"
          />
        </label>
        <input
          type="file"
          id="input-file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />{" "}
      </div>
      <div className="profile_info">
        <div className="profile_info_title">
          총 봉사 경력
          <div className="profile_info_content">
            1년 &nbsp;
            <img
              src="/images/next.png"
              className="GoNextButton"
              onClick={goToEditCareer}
              width="20"
              height="20"
            />
          </div>
        </div>
        <hr className="profile_info_hr" />
        <div className="profile_info_title">
          D:raw 활동 시작 일자
          <div className="profile_info_content">
            {" "}
            3년 8개월 &nbsp;
            <img
              src="/images/next.png"
              className="GoNextButton"
              onClick={goToStartDate}
              width="20"
              height="20"
            />
          </div>
        </div>
        <hr className="profile_info_hr" />
        <div className="profile_info_title">
          내 리뷰 보기{" "}
          <div className="profile_info_content">
            <img
              src="/images/next.png"
              className="GoNextButton"
              onClick={goToHelperProfile}
              width="20"
              height="20"
            />
          </div>
        </div>
        <div className="submit_profile_position">
          <button className="submit">수정 완료</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
