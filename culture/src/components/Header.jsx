
import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Logout } from '../store/LoginReducer';

function Header(props) {

    const [yoffset,setOffset] = useState(0);
    const [isPending, startTransition] = useTransition({
        timeoutMs: 2000
    });
    const {isLogin,nickname,profileImg} = useSelector((state)=>state.LoginReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const onScroll = () => {
            startTransition(()=>{
                setOffset(window.pageYOffset)
            });
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    const LogoutAction = () =>{
        dispatch(
            Logout()
        )
    }

    return (
        <Container 
            yoffset={yoffset}>
            <HeaderContainer>
                <a href='/' style={{textDecoration: 'none'}}>
                    <div style={{color:'#141414', fontSize:'1.5rem',fontWeight:'600'}}>
                        CCFM
                    </div>
                </a>
                
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
                            color:'#666',
                            fontWeight:'300'}}
                >
                    로그인
                </Link>:
                    <>
                        <ProfileContainer>
                            <img src={profileImg}/>
                        </ProfileContainer>
                        <p>{nickname}님 안녕</p>
                        <LogoutBt onClick={LogoutAction}>로그아웃</LogoutBt>
                    </>
                }
                
            </HeaderContainer>
        </Container>
    );
}

const LogoutBt = styled.button`
    margin-left : 10px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: gray;
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