import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// css-in-js Style -> React,  
// 최하단 컴포넌트에만 컴포넌트 스타일 적용
// reset : 랜덤으로 키값 설정하여 스타일 따로 적용
const Main_home_style = createGlobalStyle `
    ${reset}    //
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
        background-color: #141414;
    }
    
    div{
        display: block;
    }
    
    .flex{
        display: flex;
    }
    
    ul, li{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: #fff;
        background-color: transparent;
    }
    
    .dark-background{
        background-color: #141414;
        z-index: 0;
        width: 100%;
    }
    
    
    @media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape){
        body, html {
           font-size: .85vw;
       }
    }
    @media screen and (min-width: 1281px) and (max-width: 1600px) and (orientation: landscape){
       body, html {
           font-size: .75vw;
       }
    }
    
    
    @media (max-width: 841px){
        #logo {    
            height: 17px;
        }
        .pinning-header-container{
            height: 41px;
        }
    }
    
    @media screen and (min-width: 841px){
        #logo {    
            height: 27px;
        }
        .pinning-header-container{
            height: 70px;
        }
    }
    
    .pinning-header-container{
        /* height: 70px; */
        flex-direction: row;
        align-items: center;
        left: 0;
        top: 0;
        font-size: 1.2rem;
        right: 0;
        position: fixed;
        padding: 0 4%;
        z-index: 1;
        background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
    }
    
    .tabbed-primary-navigation{
        margin: 0px;
        padding: 0px;
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    
    .navigation-tab a{
        margin-left: 18px;
        font-weight: 700;
        color: #e5e5e5;
    }
    
    .navigation-tab a:hover{
        color: #B3B3B3;
    }
    
    a.current-active{
        color: white;
    }
    
    a.current-active:hover{
        color: white;
    }
    
    .secondary-navigation{
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: flex-end;
        position: absolute;
        right: 4%;
        top: 0px;
        height: 100%;
    }
    
    .nav-element{
        margin-right: 10px;
    }
    
    .searchTab{
        display: inline-block;
        cursor: pointer;
        border: none;
        background-color: 0 0;
        background: transparent;
    }
    
    #vedio{
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
    } 
    
    .searchInput {
        display: flex;
        width: 273px;
        align-items: center;
        flex-direction: row;
        background: rgba(0,0,0,.75);
        border: solid 1px rgba(255,255,255,.85);
        display: none;
    }
    
    
    .searchInput .icon-close {
        cursor: pointer;
        margin: 0 6px;
        text-align: center;
        font-size: 15px;
    }
    
    .icon-close:before {
        content: '\e762';
    }
    
    
    .searchInput input {
        color: #fff;
        display: inline-block;
        background: 0 0;
        border: none;
        flex-grow: 1;
        box-sizing: border-box;
        padding: 7px 14px 7px 7px;
        font-size: 14px;
        width: 212px;
        outline: 0;
    }
    
    .searchInput .search-icon {
        padding: 0 6px;
    }
    
    .notification-pill{
        background-color: #b9090b;
        border: none;
        color: #fff;
        display: inline-block;
        font-size: .75em;
        font-weight: 700;
        min-width: 1em;
        line-height: 1;
        padding: 0.3em;
        text-align: center;
        border-radius: 1000px;
    }
    
    .notifications .notification-pill {
        font-size: .5em;
        line-height: 1;
        z-index: 2;
        position: absolute;
        top: -0.25em;
        right: -0.1em;
    }
    
    .notifications-menu{
        background-color: transparent;
        border: none;
        font-size: 1.5em;
        line-height: 1;
        margin-top: 0.2em;
        padding: 2px 6px 3px;
        position: relative;
    }
    
    .account-menu-item{
        display: block;
        position: relative;
        font-size: 12px;
        z-index: 0;
    }
    
    .account-dropdown-button{
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    
    .profile-icon{
        vertical-align: middle;
        height: 32px;
        width: 32px;
        border-radius: 4px;
    }
    
    .caret{
        margin-left: 10px;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 5px 5px 0px;
        border-color: rgb(255, 255, 255) transparent transparent;
        transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s, -webkit-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s, -moz-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s, -o-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s;
    }
    
    
    .billboard-motion .static-image{
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        position: absolute;
        opacity: 1;
        background-size: cover;
        z-index: 0;
    }
    
    .fill-container{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
    }
    
    .billboard-row{
        top: 0;
        right: 0;
        left: 0;
        user-select: none;
        background-color: #000;
        position: relative;
        z-index: -1;
        height: 0;
        padding-bottom: 40%;
        margin-bottom: 40px;
    }
    
    .embedded-components{
        position: absolute;
        bottom: 10%;
        right: 0%;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    
    .color-supplementary{
        margin-right: 1.1vw;
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.7);
        color: white;
        border-radius: 50%;
        cursor: pointer;
        padding: 5px;
        z-index: 2;
    }
    
    .color-supplementary:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    
    .color-supplementary > .play-icon{
        width: 16px;
        height: 16px;
    }
    
    .maturity-rating{
        border: solid 3px #dcdcdc;
        border-style: none none none solid;
        background-color: rgba(51,51,51,.6);
        font-size: 1.1vw;
        padding: 0.5vw 3.5vw 0.5vw 0.8vw;
        display: flex;
        align-items: center;
        height: 2.4vw;
        box-sizing: border-box;
    }
    
    .ltr-18dhnor{
        height:16px;
        width: 16px;
        line-height: 0;
    }
    
    .billboard-title{
        min-height: 13.2vw;
        position: relative;
        margin-bottom: 1.2vw;
    }
    
    .info{
        position: absolute;
        top: 100%;
        bottom: 35%;
        left: 4%;
        width: 36%;
        z-index: 10;
        justify-content: flex-end;
        flex-direction: column;
    }
    
    .title-logo{
        width: 100%;
        transform-origin: bottom left;
    }
    
    .supplemental-message{
        font-size: 1.6vw;
        color: white;
        margin: 1vw 0;
        align-items: center;
        font-weight: 700;
    }
    .supplemental-message>.svg-icon{
        margin-right: 0.5em;
        width: 1.5em;
        height: 1.5em;
    }
    
    .synopsis{
        font-weight: 400;
        line-height: normal;
        width: 100%;
        font-size: 1.2vw;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
        margin-top: 0.1vw;
    }
    
    .playLink{
        flex-shrink: 0;
        align-items: center;
    }
    
    .ltr-18dhnor{
        height: 2.4rem;
        width: 2.4rem;
    }
    
    .play-button-wrapper{
        align-items: center;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        justify-content: center;
        
        padding: 0.8rem 2.4rem 0.8rem 2rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    
    .play-button-wrapper:hover{
        background-color: rgba(255, 255, 255, 0.7);
    }
    
    .more-infobt-wrapper:hover{
        background-color: rgba(0,0,0, 0.1);
    }
    
    .billboard-links{
        margin-top: 1.5vw;
        white-space: nowrap;
        display: flex;
        line-height: 88%;
    }
    
    .play-icon svg{
        width: 100%;
        height: 100%;
    }
    
    .play-text{
        font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        font-weight: normal;
        display: block;
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2.4rem;
    }
    
    .play-icon-wrapper{
        height: 2.4rem;
        width: 2.4rem;
    }
    
    .more-infobt-wrapper{
        cursor: pointer;
        flex-shrink: 0;
        padding: 0.8rem 2.4rem 0.8rem 2rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        border: 0;
        background-color: rgba(109,109,110,0.7);
        color: white;
        opacity: 1;
        justify-content: center;
        align-items: center;
    }
    
    .more-info-text{
        font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        display: block;
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2.4rem;
    }
    
    @media screen and (min-width: 1100px) and (max-width: 1399px){
        .slider-item {
        /* width: 20%; */
        width: 25%;
        }
    }
    
    @media screen and (min-width: 1400px){
        .slider-item {
            /* width: 16.66666667%; */
            width: 25%;
        }
    }
    
    @media screen and (min-width: 800px) and (max-width: 1099px){
        .slider-item {
            width: 25%;
        }
    }
    
    @media screen and (min-width: 500px) and (max-width: 799px){
        .slider-item {
            /* width: 33.33%; */
            width: 25%;
        }
    }


    
    .lolomoRow{
        margin: 3vw 0;
        z-index: 1;
        line-height: 1.3;
    }
    
    .row-header-title{
        display: table-cell;
        vertical-align: bottom;
        line-height: 1.25vw;
        font-size: 1.4vw;
    }
    
    .rowHeader{
        font-weight: bold;
        padding: 0 4%;
        vertical-align: bottom;
        line-height: 1.25vw;
        font-size: 1.4vw;
    }
    
    .slider{
        z-index: 2;
        position: relative;
        margin: 0;
        padding: 0 4%;
        touch-action: pan-y;
        overflow-x: visible;
    }
    
    .boxart-size-16x9{
        width: 100%;
        height: 0;
        position: relative;
        overflow: hidden;
        padding: 28.125% 0;
    }
    
    .boxart-image-in-padded-container{
        top: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
    }
    
    .slider-item{
        box-sizing: border-box;
        padding: 0 0.2vw;
        width: 25%;
    }
    
    .showPeek{
        padding-bottom: 1px;
    }
    
    .handlePrev{
        background: rgba(20,20,20,.5);
        left: -2px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 4%;
        display: flex;
        color: #fff;
    }
    
    .handlePrev .indicator-icon {
        transform-origin: 55% 50%;
    }
    
    .handleNext{
        background: rgba(20,20,20,.5);
        right: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 4%;
        display: flex;
        color: #fff;
    }
    
    .boxart-size-7x10{
        width: 100%;
        height: 0;
        position: relative;
        overflow: hidden;
        padding: 35.714285714% 0;
    }
    
    .top-10-rank{
        width: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: auto;
        left: 0;
    }
    
    .boxart-size-7x10 .boxart-image-in-padded-container {
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: auto;
        width: 50%;
    }
    
    /* Footer */
    .member-footer {
        max-width: 980px;
        margin: 20px auto 0;
        padding: 0 4%;
        color: grey;
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
    
    
    
    .fadeinanimation{
        animation-duration: 0.4s;
        animation-name: fadein; 
    }
    
    .fadeoutanimation{
        animation-duration: 0.4s;
        animation-name: fadeout; 
    }
    
    @keyframes fadein {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgb(20, 20, 20);
        }
    }
    
    @keyframes fadeout {
        from {
            background-color: rgb(20, 20, 20);
        }
        to {
            background-color: transparent;
        }
    }
    `;

export default Main_home_style;