import React from "react";
import styled from "styled-components";

// 에러 경계도 리엑트 컴포넌트 중 하나
// 컴포넌트가 뷰뿐만 아니라 핸들러, 컨트롤러, 이벤트 등의 요소들도 다 컴포넌트라고 하는 듯?
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
			// 클래스 컴포넌트의 state 생성자
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        //  console.log(error)
    //   logErrort(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <Container> 
            <div>
                <Title>
                죄송합니다. 
                <br/>
                에러가 발생했습니다.
                </Title>
            </div>
            <div>
                <SubContent>
                요청하신 페이지를 처리하는 도중 예기치 못한 에러가 발생했습니다.
                <br/>
                사용에 불편을 드려 죄송합니다.
                </SubContent>
            </div>
        </Container>;
      }
      return this.props.children; 
    }
  }

const SubContent = styled.div`
    margin-top: 20px;
    color: gray;
    font-weight: 300;
    letter-spacing: 3px;
`;

const Title = styled.div`
    font-size: 2rem;
`;

const Container = styled.div`
    display: flex;
    margin-top: 10%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & div {
        text-align: center;
    }
`;

export default ErrorBoundary;