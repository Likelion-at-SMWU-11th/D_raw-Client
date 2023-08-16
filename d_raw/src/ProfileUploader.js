import React, { useState } from "react";
import axios from "axios";

const ProfileUploader = () => {
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
        const response = await axios.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Upload successful:", response.data);
        // 여기에서 서버 응답 처리 가능
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div>
      <header>내 프로필 수정</header>
      <div class="box">
        {previewImage && (
          <img
            className="box"
            src={previewImage}
            alt="프로필 사진 미리보기"
            style={{ width: "20px", height: "20px" }}
          />
        )}
      </div>
      <input
        className="profile_input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};

export default ProfileUploader;
