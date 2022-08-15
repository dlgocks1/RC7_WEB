import React from 'react';
import styled from 'styled-components';

function SkeletonKakaoMap(props) {
    return (
        <>
            <KakaoMapContent/>
        </>
    );
}
const KakaoMapContent = styled.div`
    min-height: 400px;
    max-height: 400px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;

    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }

        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }

        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }
`;

export default SkeletonKakaoMap;