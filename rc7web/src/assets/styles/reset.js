
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// reset : 랜덤으로 키값 설정하여 스타일 따로 적용
const ResetStyles = createGlobalStyle `
${reset} 
body, html{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: .75vw;
    color: #fff;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    line-height: 1.2;
    user-select: none;
    cursor: default;
}
h1 {
    font-size: 2em;
}
`;

export default ResetStyles;