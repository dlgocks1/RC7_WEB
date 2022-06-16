import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// reset : 랜덤으로 키값 설정하여 스타일 따로 적용
const Home_style = createGlobalStyle `
    // 기존 브라우저의 스타일만 Reset 
    ${reset} 
    body, html{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 16px;
        color: #333;
        direction: ltr;
        min-width: 320px;
        font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        line-height: 1.2;
        user-select: none;
        cursor: default;
        background-color: #000;
    }
    
    a{
        text-decoration: none;
        background-color: transparent;
    }
    
    div{
        display: block;
    }
    
    select {
        text-transform: none;
    }
    
    option {
        font-weight: normal;
        display: block;
        white-space: nowrap;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
    
    ul {
        display: block;
        padding: 0;
        margin: 0;
    }
    
    li {
        display: list-item;
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
        border: 0;
    }
    
    .flex{
        display: flex;
    }
    
    .dark-background{
        background-color: #000;
        z-index: 0;
        width: 100%;
        flex-direction: column;
    }
    
    @media screen and (max-width: 949px){
        .header-wrapper{
            height: 45px;
        }
        #logo{
            width: 6.75rem;
            height: 2rem;
        }
        .lang-selection-container{
            margin-right: 1.5rem;
        }
        .hero-card .our-story-card-title {
            font-size: 3.125rem;
        }
        .our-story-card-subtitle {
            font-size: 1.625rem;
        }
        /* h3 {
            font-size: 23px;
        } */
    
    }
    
    @media screen and (min-width: 950px) and (max-width: 1799px){
        .header-wrapper{
            height: 4rem;
        }
        #logo{
            width: 10.4375rem;
            height: 2.8125rem;
        }
        .lang-selection-container{
            margin-right: 2rem;
        }
    }
    
    .header-wrapper{
        /* transition: background-color .5s; */
        position: relative;
        max-width: 1920px;
        margin: 0 auto;
        padding-top: 20px;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-image: linear-gradient(to bottom,rgba(0,0,0,1) 10%,rgba(0,0,0,0));
    
    }
    
    .our-story-container{
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 0.5rem;
        height: auto;   
        margin: 0 45px;
        position: relative;
    }
    
    .logo{
        margin-right: auto;
    }
    
    .lang-selection-container {
        display: inline-block;
        margin: 0 0.75rem;
    }
    
    /* .language-picker-header{
        white-space: nowrap;
        padding: 0;
        background-color: rgba(0,0,0,0.4);
        border: 1px solid #aaa;
        color: #fff;
        border-radius: 2px;
    } */
    
    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 48
    }
    
    .ui-select{
        border: none;
        appearance: none;
        height: 100%;
        background: rgba(0,0,0,.4);
        color: #fff;
        font-size: .875rem;
        top: 50%;
        padding: 8px 28px;
        white-space: nowrap;
        background-color: rgba(0,0,0,0.4);
        border: 1px solid #aaa;
        color: #fff;
        border-radius: 2px;
    }
    
    .select-arrow{
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
    
    }
    
    .select-arrow::before {
        color: white;
        position: relative;
        background-size: 100% 100%; 
        display: inline-block;  
        transform:scale(0.9);
        content:"";
        left: 28px;
        content: url("../src/baseline_public_white_24dp.png");
    }
    
    .select-arrow::after {
        color: white;
        font-size: 15px;
        /* content: '\e898'; */
        content: '▼';
        top: 50%;
        position: relative;
        right: 24px;
    }
    
    .authLinks.redButton {
        background-color: #e50914;
        line-height: normal;
        padding: 7px 17px;
        font-weight: 400;
        font-size: 1rem;
        float: right;
        color: #fff;
        border-radius: 3px;
    }
    
    .our-story-card {
        padding: 70px 45px;
        position: relative;
        border-bottom: 8px solid #222;
        /* padding: 50px 5%; */
        background-color: black;
        margin-bottom: 0;
        /* background: 0 0; */
        color: #fff;
        height: 100%;
    
    }
    
    .concord-img-wrapper{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    
    .concord-img {
        width: 100%;
        height: 100%;
    }
    
    .concord-img-gradient{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.4);
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }
    
    .our-story-card-text {
        position: relative;
        width: 100%;
        padding: 75px 0;
        max-width: 950px;
        margin: 0 auto;
        align-items: center;
        text-align: center;
        flex-direction: column;
        z-index: 3;
    }
    
    
    .our-story-card-title > h1{
        max-width: 640px;
        margin: 0 auto;
    }
    
    .our-story-card-subtitle {
        font-size: 1.625rem;
        margin: 1rem auto;
        text-align: center;
        max-width: 640px;
        font-weight: 400;
    }
    
    .email-form{
        flex-direction: column;
        align-items: center;
    }
    
    .email-form-title {
        font-weight: 400;
        text-align: center;
        font-size: 1.6rem;
        max-width: 450px;
        margin: 30px 0px 0px 0px;
        padding-bottom:20px
    }
    
    .email-form-lockup{
        flex-direction: column;
        align-items: center;
        margin: 10px auto;
        width: 100%;
    }
    
    .nfInput {
        max-width: 500px;
        width: 100%;
        position: relative;
    }
    .nfInputPlacement{
        position: relative;
    }
    
    .nfTextField {
        height: 48px;
        padding: 5px 0 5px 10px;
        font-size: inherit;
        width: 100%;
        font-size: 16px;
        border: solid 1px #8c8c8c;
        border-radius: 2px;
    }
    
    .nfTextField:focus{
        outline: none;
    }
    
    .nfInput .placeLabel {
        position: absolute;
        top: 50%;
        left: 10px;
        color: #8c8c8c;
        font-size: 14px;
        transform: translateY(-50%);
    }
    
    .btn {
        position: relative;
        font-size: 1em;
        padding: 24.5px 2em;
        min-width: 74px;
        min-height: 50px;
    }
    
    .btn-red{
        background-color: #e50914;
        color: #fff;
        background-image: linear-gradient(to bottom,#e50914,#db0510);
        box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    }
    
    .startbt {
        align-items: center;
        margin: 1em auto;
        padding: 0 1rem;
        width: auto;
        border-radius: 5px;
    }
    .chevron-right-arrow{
        width: 0.35em;
        height: 0.8rem;
        flex: 0 1 auto;
        margin: 0 0 0 0.5em;
        position: relative;
    }
    
    .chevron-right-arrow svg {
        position: absolute;
        top: 0;
        left: 0;
        margin: 1px 0;
        fill: white;
        height: 100%;
    }
    
    .our-story-card-text {
        padding: 0;
        padding: 25px 0;
        width: 100%;
    }
    
    .our-story-card-title {
        font-size: 3.125rem;
        text-align: center;
        margin: 0 auto;
        max-width:640px;
        padding: 0;
    }
    
    /* 미디어 쿼리로 짜맞추기 */
    .our-story-card-animation-container {
        margin: -10% 0 0 0;
    }
    
    .animation-card.watchOnTv{
        width: 100%;
        height: 100%;
        max-width: 73%;
        max-height: 54%;
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
    .animation-card-container{
        align-items: center;
        flex-direction: column;   
    }
    
    #our-story-card-subtitle {
        text-align: center;
        font-size: 1.25rem;
    }
    
    .our-story-card-img {
        position: relative;
        z-index: 2;
    }
    .our-card-text{
        z-index: 3;
        width: 100%;
    }
    
    .our-story-card-animation{
        width: 100%;
        height: 100%;
        max-width: 59%;
        max-height: 39%;
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
    .our-story-card-animation2{
        width: 100%;
        height: 100%;
        max-width: 388px;
        max-height: 70px;
        border-radius: 10px;
        align-items: center;
        padding: 0.35em 0.75em;
        position: absolute;
        left:28%;
        bottom: 10%;
        display: flex;
        z-index: 2;
        min-width: 388px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        background: #000;
    }
    
    .our-story-card-animation2::after{
        width: 3em;
        outline: 2px solid #000;
        outline-offset: -2px;
        display: block;
        background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) center center no-repeat;
        background-size: 100%;
        content: '';
        flex-grow: 0;
        
        flex-shrink: 0;
        height: 3.75em;
    } 
    
    .our-story-card-video {
        width: 100%;
        height: 100%;
    }
    
    .our-story-card-img-container {
        width: 100%;
        max-width: 600px;
        height: 100%;
        margin-top: 1em;
    }
    
    .our-story-card-title2 {
        font-size: 3.125rem;
        text-align: center;
        width: 100%;
        margin: 0 0 0.4em;
        padding: 0;
    }
    
    .our-story-card-subtitle2{
        font-size: 1.25rem;
        font-weight: 400;
    }
    
    .animation-card.downloadAndWatch, .our-story-card-animation-container {
        margin: -8% 0 0 0;
        min-height: 100px;
        width: 100%;
    }
    
    
    .our-story-card-animation-image{
        margin: 0 1em 0 0;
        flex-grow: 0;
        flex-shrink: 0;
    }
    
    .our-story-card-animation-image img{
        height: 4em;
    }
    .our-story-card-animation-text{
        font-size: 1em;
        font-weight: 600;
        flex-grow: 1;
    }
    
    .member-footer .member-footer-links {
        font-size: 13px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        margin: 0 0 14px 0;
        padding: 0;
    }
    
    
    .member-footer {
        max-width: 980px;
        margin: 20px auto 0;
        padding: 0 4%;
        color: #757575;
        background: #000;
    }
    
    .member-footer .social-links {
        display: flex;
        margin-bottom: 2em;
    }
    
    .member-footer .social-links .social-link {
        margin-right: 15px;
    }
    
    .member-footer .social-links .social-link .svg-icon {
        fill: grey;
        height: 25px;
        width: 36px;
    }
    
    .member-footer .member-footer-links {
        font-size: 13px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        margin: 0 0 14px 0;
        padding: 0;
    }
    
    @media screen and (min-width: 800px){
        .member-footer-link-wrapper{
        }
    }
    
    .member-footer .member-footer-link-wrapper {
        list-style-type: none;
        flex: 0 0 50%;
        margin-bottom: 16px;
        flex-basis: 25%;
        box-sizing: border-box;
    }
    
    .member-footer .member-footer-link {
        color: grey;
        text-decoration: none;
    }
    
    .member-footer .service-code {
        margin-bottom: 20px;
        font-size: 13px;
        background: 0 0;
        color: grey;
        border: solid 1px grey;
        font-size: 1.3rem;
        padding: 0.5em;
    }
    
    .member-footer .member-footer-copyright {
        font-size: 11px;
        margin-bottom: 15px;
    }
    
    .member-footer .copy-text-block+.copy-text-block a {
        color: grey;
    }
    .member-footer .copy-text-block+.copy-text-block {
        margin-top: 4px;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
    }
    
    .footer-top-a {
        color: #757575;
    }
    
    .footer-top-a:hover {
        text-decoration: underline;
    }
    
    details > summary {
        list-style: none;
    
    }
    
    .question-box{
        padding: 16px 44px 16px 24px;
        margin-bottom: 1px;
        font-weight: 400;
        position: relative;
        width: 90%;
        display: block;
        text-align: left;
        background: #303030;
        border: 0;
        margin: 0 0 8px 0;
        font-weight: 500;
        font-size: 1.2rem;
        cursor: pointer;
    }
    
    .question-box summary{
        margin-top: 1px;
    }
    
    .svg-icon-thin-x {
        right: 1em;
        position: absolute;
        top: 30px;
        height: 1em;
        width: 1em;
        transform: translateY(-50%) rotate(45deg);
        fill: #fff;
    }
    
    .svg-closed {
        transform: translateY(-50%);
    }
    
    .question-detail{
        display: inline-block;
        margin-top: 20px;
        border-top: 1px solid #000 ;
        padding-top: 20px;
        cursor :default;
        padding-bottom: 10px;
    }
    
    .email-form-title2 {
        font-weight: 400;
        text-align: center;
        font-size: 1.6rem;
        max-width: 450px;
        padding: 0 10%;
        margin: 30px 0 0 0;
    }
    
    .qeustion-text-container{
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
    }
    
    .our-story-card-img-container-kid{
        width: 100%;
    
    }
    .kid-image{
        align-items: center;
        flex-direction: column;
    }`
    ;

export default Home_style;