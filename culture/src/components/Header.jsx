
import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';
import styled from 'styled-components'

function Header(props) {

    const [yoffset,setOffset] = useState(0);
    const [isPending, startTransition] = useTransition();



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
    
    return (
        <Container 
            yoffset={yoffset}>
            <HeaderContainer>
                <a href='/' style={{textDecoration: 'none'}}>
                    <div style={{color:'#141414', fontSize:'1.5rem',fontWeight:'600'}}>
                        사이트제목
                    </div>
                </a>
                
                <HeaderTabContainer>
                    <a>
                        캠핑 
                    </a>
                    <a>
                        영화 
                    </a>
                    <a>
                        연극 
                    </a>
                </HeaderTabContainer>
                <LoginBt>
                    로그인
                </LoginBt>
            </HeaderContainer>
        </Container>
    );
}

const LoginBt = styled.button`
    margin-right: 5%;
`;

const HeaderTabContainer = styled.div`
    margin-left:3rem;
    flex-grow: 1;
    & a{
        margin-left : 1rem;
        color: #2b2b2b;
        font-size: 1rem;
        font-weight: 500;
        line-height: 56px;
        letter-spacing: 0;
        cursor: pointer;

        &:hover{
            font-weight: 700;
        }
    }
`

const HeaderContainer = styled.div`
    height : 56px;
    padding: 0 4%;
    width: 100%;
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