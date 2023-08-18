/* import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./static/Base.css";
import "./static/HelperList.css";

class Helper extends Component {
  goToHelperProfile = (helperId) => {
    this.props.history.push(`/match/profile/${helperId}`); // Use helperId to create the dynamic URL
  };

  handleGoBack = () => {
    this.props.history.goBack(); // Use history.goBack() to navigate back
  };

  render() {
    const helpers = [
      {
        id: 0,
        name: "김눈송",
        voluntime: 60,
        stamps: 24,
      },
      {
        id: 1,
        name: "박눈송",
        voluntime: 43,
        stamps: 25,
      },
      {
        id: 3,
        name: "힝눈송",
        voluntime: 43,
        stamps: 25,
      },
    ];

    const helperList = helpers.map((helper) => (
      <div key={helper.id}
      <p onClick={() => this.goToHelperProfile(helper.id)}>
        <p>Name: {helper.name}</p>
        <p>Volunteer Time: {helper.voluntime}</p>
        <p>Stamp: {helper.stamps}</p>
      </div>
    ));

    // Generate a random index within the range of helpers array length
    const randomIndex = Math.floor(Math.random() * helpers.length);

    // Get a random helper using the generated index
    const randomHelper = helpers[randomIndex];

    return (
      <div>
        <header>
          <img
            src="/images/back.png"
            className="GoBackButton"
            onClick={this.handleGoBack}
            width="20"
            height="20"
          />
          안내사 목록
        </header>
        <div className="content">{helperList}</div>
        <hr />
        <div className="helper_notice">
          D:raw 안내사는 최대 3명까지 선택 가능합니다.
        </div>
        <div className="helperlist">
          <div className="helper">
            <br />
            <div className="helperlist_content_left">
              <span className="helperlist_name">
                <p>{randomHelper.name}</p>
              </span>
              <br />
              <span className="helperlist_time">
                D:raw 활동 {randomHelper.voluntime}시간
              </span>{" "}
              <br />
              <span className="helperlist_stamp">
                🎖 도장 &#40;{randomHelper.stamps}&#41;
              </span>
            </div>
            <div className="helperlist_content_right">
              <img
                className="helperlist_image"
                src="/images/default_profile.png"
              />
              <br />

              <span className="helperlist_image_detail">
                상세프로필 
                <span
                  className="helperlist_image_detail"
                  onClick={() => this.goToHelperProfile(helper.id)}
                >
                  {" "}
                  &#62;
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Helper;
 */
