import React from 'react';
import styled from 'styled-components';

function HandlePrevArrow({ className, style, onClick }) {
    return (
      <HandlePrevArrowContainer
          onClick={onClick}>
        <svg
          version="1.0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="m21 8.5-9 9-9-9"
          ></path>
        </svg>
      </HandlePrevArrowContainer>
    );
  }

  const HandlePrevArrowContainer = styled.div`
    position: absolute;
    color: white;
    top: 0;
    width: 4%;
    left: 0;
    bottom: 0;
    background: hsla(0, 0%, 8%, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    svg{
      transform: rotate(90deg);
      transition: all 0.5s;
      :hover{
          transform: rotate(90deg) scale(1.3);
      }
    }
  `;
  
  export default HandlePrevArrow;