/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import SliderItem from "views/main/SliderItem";
import HandleNextArrow from "./handleNextArrow";
import HandlePrevArrow from "./handlePrevArrow";

function Viewcontainer2() {
  const [contentList, setContentList] = useState([
    {
      id: 21,
      name: `갯마을 차차차`,
      imgUrl: `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacmF4WDryr9UR0o8YmWr0Tkw9Fin4rsoVMzq5XwN19JtJRC5MvmlxWWfDRvzPiKjiJyEnn2jaXfKJz5yRL0DmlAK2smVAzOQws.webp?r=180`,
    },
    {
      id: 16,
      name: `이상한 나라의 수학자`,
      imgUrl: `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa8QHr_J2yLIIm9n6PfR0ut4YuEb9PdhVH8F_gI69vhnMWq9VFbtkf0odJ_w5LFERL6TPwV7PfkmuqCS49-J_GR0rAQ3UdsHQDhIVrkRD_ybTBL8fvFIb9Pq95Sf75ao51GhaOef9QcXQiPUQ6FXyPnGrvl1Jq8Ib04.webp?r=92f`,
    },
    {
      id: 17,
      name: `스프리건`,
      imgUrl: `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxS0zDxvyoa-X5zi_9CRqJyR_eaaiEK1kNh8ALh-S0ol3ZGxVHgqjknxXWKz-je5LhF4LB7JTD5wgNdP2gfBpX6oPI46epiLOC5w0NzwCRApC9pVS1yCMmCZm9999qZHYjL.jpg?r=eb8`,
    },
    {
      id: 22,
      name: `빈센조`,
      imgUrl: `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc0sVmxcQrKeYhFMmP0cdojzWi2OOKAGJnHGVN_Q88hzNhgK6yKdGc71XGqWzOLJtBezXphSvPNF0ocF4YXOphCos0ogkhmQycg.webp?r=ae4`,
    },
    {
      id: 5,
      name: `나의해방일지`,
      imgUrl:
        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
    },
    {
      id: 15,
      name: `미남당`,
      imgUrl: `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2mV8K-3aRDDDOPv2e_y4rh9HJaD42ITEosiWFCGDs3ssSDfjSmX5J4GGdIq9zRJMtoB8n0Eww2VeOmVOndK5AeDrem5fQTjd6I7B8u0BFw3vnrg5TFuiDBlwNWiXQMbXL7Kb0mMAYv03d9gqGSBh-S649zOc4RnpYVncQKN9jw3WCcX084OZQhLqiUU8xeS21C.webp?r=8c7`,
    },
    {
      id: 6,
      name: `우리들의 블루스`,
      imgUrl: `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkWYPbdQKyiDEtw-1ZdWpNatp0EzIdzn2l9kGiYnRw9vQpVKgZdDbVBIxXtg5ajhuXWNzPoKXhHmsdfSzR7Rtk6u09R0Lhoi60mcSVaefD1_54X8to_qnfFbITgxFYqsbuIHHMoPkQIP8BG5L-RdYh42WCnD97kwoBUkBsElJxT6SWgyXIZhHD-BNeNKWZlYu6X.webp?r=f62`,
    },
    {
      id: 11,
      name: `러브 데스+ 로봇`,
      imgUrl:
        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ8IJybJ9GS7QGCRg-f9vrqAF4fo15lfZ0jI9xlcecE1oqvm0frkT6JC5suQOEtHmc6uUrmEeuZil_ByaZQHyN7PvnX7UsyezWcyj6t9_Iv7MJd9zXK9wSg7AAcltc-GtycJ0JcC95dXQTtt62j_UpHLYtC8PBeHTm7Irg.jpg?r=367",
    },
  ]);

  const settings = {
    dots: false, // 점 안 보이게
    infinite: true, // 무한으로 즐겨요
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HandleNextArrow />,
    prevArrow: <HandlePrevArrow />,
    arrows: true,
  };

  const contentRender = () => {
    const result = [];
    for (let i = 0; i < contentList.length; i += 4) {
      result.push(contentList.slice(i, i + 4));
    }
    return result;
  };

  return (
    <>
      <RowHeader>
        <RowHeaderTitle>React Slick 라이브러리</RowHeaderTitle>
      </RowHeader>

      <Container>
        <CustomSlider {...settings}>
          {contentRender().map((value) => (
            <SliderContent>
              <div>
                {value.map((content) => (
                  <ImgContainer src={content.imgUrl} alt="" />
                ))}
              </div>
            </SliderContent>
          ))}
        </CustomSlider>
      </Container>
    </>
  );
}

const RowHeader = styled.h2`
  font-weight: bold;
  padding: 0 4%;
  vertical-align: bottom;
  line-height: 1.25vw;
  margin-bottom: 0.4em;
  font-size: 1.4vw;
`;

const RowHeaderTitle = styled.div`
  display: table-cell;
  vertical-align: bottom;
  line-height: 1.25vw;
  font-size: 1.4vw;
`;

const SliderContent = styled.div`
  white-space: nowrap;
  & div {
    width: 25%;
  }
`;

const CustomSlider = styled(Slider)`
  z-index: 1;
  .slick-slide {
    display: inline-block;
  }
`;

const ImgContainer = styled.img`
  padding: 0 0.2vw;
`;

const Container = styled.div`
  padding: 0 4%;
  position: relative;
`;

export default Viewcontainer2;
