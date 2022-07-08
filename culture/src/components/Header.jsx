
import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { LogoutToReDucer } from '../store/LoginReducer';
import LogoutDropBox from './LogoutDropBox';

function Header(props) {


    const [yoffset,setOffset] = useState(0);
    // startTransition이 지속중일 때 isPending은 true가됨
    const [isPending, startTransition] = useTransition({
        timeOutms: 10,
    });
    // 늦게 변해도 되는 값은 useDefferedValue로 감싼다.
    const yoffsetState = useDeferredValue(yoffset);

    const {isLogin,nickname,profileImg} = useSelector((state)=>state.LoginReducer);

    const onScroll = () => {
        startTransition(()=>{
            setOffset(window.pageYOffset)
        })
    };

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll ,{ passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.scrollTo(0,0);
        };
    }, []);
    

    return (
        <Container 
            yoffset={yoffsetState}>
            <HeaderContainer>

                <Link to='/' style={{textDecoration: 'none'}}>
                    <div style={{color:'#141414', fontSize:'1.5rem',fontWeight:'600'}}>
                        CCFM
                    </div>
                </Link>
                
                <HeaderTabContainer>
                    <Link to='/camping'>
                        캠핑 
                    </Link>
                    <Link to='/tourism'>
                        관광
                    </Link>
                    <Link to='/exhibition'>
                        공연/전시
                    </Link>
                </HeaderTabContainer>
                {!isLogin ? <Link
                    to="/login"
                    style={{marginRight:"2%",
                            textDecoration:'none',
                            color:'#2b2b2b',
                            fontSize: "15px",
                            lineHeight: "20px",
                            fontWeight:'500'
                            }}>
                    로그인
                </Link>:
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                        <ProfileContainer>
                            <img src={profileImg}/>
                        </ProfileContainer>
                        <span style={{marginRight:"1rem"}}>{nickname}님 안녕</span>
                        {/* <LogoutBt onClick={LogoutAction}>로그아웃</LogoutBt> */}
                        <LogoutDropBox />
                    </div>
                }
                
                
            </HeaderContainer>
            
        </Container>
    );
}

const LogoutBt = styled.button`
    margin-left : 10px;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 5px 20px;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,0.2);
    }
`;

const ProfileContainer = styled.div`
    margin: 5px;
    padding : 5px;
    position: relative;
    & img {
        width: 36px;
        border-radius: 50%;
    }
`


const HeaderTabContainer = styled.div`
    margin-left:3rem;
    flex-grow: 1;
    & a{
        margin-left : 1rem;
        color: #2b2b2b;
        padding: 12px 10px;
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
        text-decoration: none;
        letter-spacing: 0;
        cursor: pointer;
        font-family: 'Roboto';
        &:hover{
            font-weight: 700;
        }
    }
`

const HeaderContainer = styled.div`
    height : 56px;
    padding: 0 4%;
    border-bottom: 1px solid rgba(0,27,55,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`;

const Container = styled.div`
    height : 56px;
    top : 0;
    left : 0;
    right : 0;
    z-index: 2;
    position: ${(props)=>props.yoffset===0?"relative":"fixed"};
`

export default Header;