import React from 'react';
import { Space, Spin } from 'antd';
import Header from './Header';
import styled from 'styled-components';

function LoginLoading(props) {
    return (
        <>
            <Header/>
            <Container>
                <h1>
                    로그인 중
                </h1>
                <CustomSpace>
                    <Spin size="large" />
                </CustomSpace>
            </Container>
        </>
    );
}

const CustomSpace = styled(Space)`
    height: 50%;
    .ant-spin-dot{
        font-size: 100px;
    }
    .ant-spin-dot-item{
        background-color: gray;
        width: 55px!important;
        height: 55px!important;
    }
`;

const Container = styled.div`
    margin : 0 auto;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 2.5rem;
        font-weight: 600;
        color: gray;
    }
`;


export default LoginLoading;