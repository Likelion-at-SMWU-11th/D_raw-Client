import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999; /* Ensure it's above other content */
`;

const BackIcon = styled.span`
  font-size: 24px;
  margin-left: 13px;
  margin-top: 5px;
`;

const QuestionContainer = styled.div`
  text-align: center;
  margin-left: -20px;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
  position: relative;
`;

const Heading = styled.h3`
  font-weight: bold;
  margin-left: -15px;
  margin-top: 0px;
  margin-bottom: 15px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -15px;
  margin-top: 5px;
  margin-bottom: -15px;
  width: 300px;
  height: 50px;
  border: 2px solid #ccc;
  padding: 10px;
  background: ${(props) => (props.expanded ? "#f1f1f1" : "#ffffff")};
  border: 3px #e6e6e6;
  white-space: nowrap;
  font-size: 15px;
  font-weight: bold;
  color: solidgray;
  text-align: left;
  cursor: pointer;
`;

const Answer = styled.div`
  display: ${(props) => (props.expanded ? "block" : "none")};
  width: 350px;
  margin-left: -25px;
  margin-bottom: -10px;
  background-color: #f1f1f1;
  color: gray;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid #ccc;
  text-align: left;
`;

const QuestionPage = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Q. D:raw는 어떤 서비스인가요?",
      answer:
        "→ D:raw는 디지털 약자를 위한 자원봉사 플랫폼으로, 시각장애인, 노령층 등 디지털 서비스에 접근하기에 어려움을 겪는 이들을 위해 디지털 안내사를 매칭해주는 서비스입니다.",
    },
    {
      question: "Q. 이용 가능한 지역이 어디인가요?",
      answer:
        "→ 매칭 서비스는 전국에서 이용할 수 있어요. 다만, 지역마다 등록하는 안내사의 수가 달라 안내사가 많을 수록 더욱 편리하게 이용할 수 있어요.",
    },
    {
      question: "Q. 매칭 신청은 어떻게 하나요?",
      answer:
        "→ 홈 화면에서 ‘바로 신청하기’를 클릭하거나 하단바에 있는 ‘서비스 신청’을 눌러 매칭을 신청할 수 있어요. 안내 서비스를 받고 싶은 날짜와 시간을 비롯한 상세 정보를 입력하고 빠른 매칭/프로필로 매칭을 선택하면 돼요.",
    },
    {
      question: "Q. 안내사 신청은 어떻게 하나요?",
      answer:
        "→ 첫 로그인 시 안내사를 선택해 부가 정보를 입력하면 안내사로 등록이 완료돼요. 그 다음 홈 화면에서 ‘매칭 찾아보기’를 눌러 여러 매칭 건을 검토하고 지원할 수 있어요. 또는, 프로필 설정을 완료하면 이용자 측에서 매칭 제안이 들어올 수 있어요. 제안을 검토하고 수락하면 매칭이 완료돼요.",
    },
    {
      question: "Q. 봉사 시간은 어떻게 받나요?",
      answer:
        "→ 1365에 가입되어있어야 봉사 시간 입력이 가능해요. 안내사분의 기본 정보를 통해 1365에서 봉사 시간이 입력돼요. 봉사 시간 지급 조건은 이용자가 ‘이용 완료’를 누른 후 안내사가 직접 기준에 부합한 봉사 일지를 작성하면 검토 후 봉사 시간이 지급돼요.",
    },
    {
      question: "Q. 칭찬도장은 어떻게 부여하나요?",
      answer:
        "→ 내 매칭에서 이용을 완료한 매칭 건에 대해 ‘이용 완료’를 누르면 ‘칭찬 도장 주기’ 버튼이 활성화돼요. 이때 버튼을 눌러 자세한 리뷰 내용을 작성해주면 돼요.",
    },
    {
      question: "Q. 서비스 이용 문의는 어떻게 하나요?",
      answer:
        "→ 카카오톡 오픈채팅으로 1:1 상담 서비스를 제공하고 있어요. D:raw 1:1 상담 https://open.kakao.com/o/s8e9uRzf 해당 링크를 통해 상담이 가능하며, 평일 09:00~18:00 (점심시간 13:00~14:00)에 이용할 수 있어요.",
    },
    {
      question: "Q. 매칭 취소는 어떻게 하나요?",
      answer:
        "→ 바로 취소하려면 매칭 신청 후 나오는 대기 페이지에서 우측 상단의 더보기 버튼을 눌러 취소할 수 있어요. 시간이 지난 후 취소하고 싶다면 내 매칭에 들어가 매칭 중, 또는 이용 예정인 매칭 건을 취소할 수 있어요.",
    },
    {
      question: "Q. 서비스 비용은 얼마인가요?",
      answer:
        "→ D:raw는 자원봉사 플랫폼으로, 서비스 이용 비용이 들지 않아요. 홈 화면에 표시되는 광고성 배너를 통해 수입을 창출하여 이용자분들에게 더 질 높은 서비스를 제공할 수 있는 수익을 창출하고 있어요.",
    },
    {
      question: "Q. 나중에 이용 비용을 달라고 하지는 않나요?",
      answer:
        "→ D:raw는 고용 플랫폼이 아닌, 자원봉사 플랫폼이기 때문에 봉사시간 지급이 목적이며 어떠한 안내사도 이용자에게 금전적 보상을 요구할 수 없어요. 안심하고 이용하셔도 돼요.",
    },
  ]);

  const toggleAnswer = (index) => {
    const updatedQuestions = questions.map((q, i) => ({
      ...q,
      expanded: index === i ? !q.expanded : false,
    }));
    setQuestions(updatedQuestions);
  };

  return (
    <QuestionContainer>
      <BackButton to="/usermore">
        <BackIcon>&lt;</BackIcon>
      </BackButton>
      <Heading>자주 묻는 질문</Heading>
      <hr />
      <BoxContainer>
        {questions.map((q, index) => (
          <React.Fragment key={index}>
            <Box
              key={index}
              expanded={q.expanded}
              onClick={() => toggleAnswer(index)}
            >
              {q.question} {q.expanded ? "▲" : "▼"}
            </Box>
            <Answer key={index} expanded={q.expanded}>
              {q.answer}
            </Answer>
          </React.Fragment>
        ))}
      </BoxContainer>
    </QuestionContainer>
  );
};

export default QuestionPage;
