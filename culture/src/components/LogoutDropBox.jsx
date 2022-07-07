import React from 'react';
import { DownOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { LogoutToReDucer } from '../store/LoginReducer';
import { useNavigate } from 'react-router-dom';

function LogoutDropBox(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const handleButtonClick = (e) => {
    //     message.info('Click on left button.');
    //     console.log('click left button', e);
    //   };
      
    const handleMenuClick = (e) => {
        // console.log('click', e);
        if(e.key==='1'){
            message.info('로그아웃');
            LogoutAction()
        }
        if(e.key==='2'){
            navigate("/Bookmark");
        }
    };
    const LogoutAction = () =>{
        dispatch(
            LogoutToReDucer()
        )
    }
    const menu = (
        <CustomMenu
          onClick={handleMenuClick}
          items={[
            {
              label: '로그아웃',
              key: '1',
              icon: <LogoutOutlined style={{transform: 'rotate(270deg)'}} />,
            },
            {
              label: '내 북마크 목록',
              key: '2',
              icon: <CustomUserOutlined />,
            },
          ]}
        />
      );
    
    return (
        <>
            <DropdownWrapper overlay={menu}>
                <Button>
                    <MenuOutlined />
                </Button>
            </DropdownWrapper>
        </>
    );
}

const DropdownWrapper = styled(Dropdown)`
    padding: 5px 12px;
    border-radius : 15px;
    color: gray!important;
    border-color: gray!important;
`;

const CustomMenu = styled(Menu)`
    border-radius: 20px;
    padding: 0.8rem 0px;
    width: 200px;
`;

const CustomUserOutlined = styled(UserOutlined)`
`;  

export default LogoutDropBox;