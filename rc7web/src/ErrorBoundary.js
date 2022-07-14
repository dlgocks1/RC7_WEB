/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
      console.log(error)
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
        return <h1 style={{color : "white",zIndex:"10",fontSize:"50px"}}> 에러 경계에 걸림 </h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;