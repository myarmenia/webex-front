import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

import "./style.css";

import styled from "styled-components";

import Cube from "./Cube.js";

const MainContainer = styled.div`
    background: radial-gradient(ellipse at bottom, #090a0f 0%, #222a35 100%);
    position: "relative";
    outline: none;
  `,
  FlexContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 100vh;
    flex-direction: row;
    max-width: 1280px;
    flex: 1 1 auto;
    margin: 0px auto;
    padding: 0px 1.0875rem 1.45rem;
  `,
  CubesContainer = styled.div``,
  TitleContainer = styled.div`
    position: absolute;
    text-align: center;
    color: #fff;
    width: 45%;
    right: 0;
  `,
  Title = styled.h1`
    font-size: 44px;
  `,
  Subtitle = styled.h2`
    font-size: 31px;
  `;

const Cubes = (props) => {
  const { t } = useTranslation(["main"]);
  const [arragement, setArrangement] = useState([
    {
      color: "rgb(223, 176, 122)",
      title: "Vanilla",
      main: true,
    },
    {
      color: "rgb(97, 218, 251)",
      title: "React",
      main: false,
    },
    {
      color: "rgb(65, 184, 131)",
      title: "Vue",
      main: false,
    },
    {
      color: "rgb(221, 0, 49)",
      title: "Angular",
      main: false,
    },
    {
      color: "rgb(221, 80, 49)",
      title: "Angular",
      main: false,
    },
  ]);

  const grid = { x: 210, y: 200 },
    getPosition = (i) => {
      switch (i) {
        case 0:
          return { top: grid.y * 1 + "px", left: grid.x * 1 + "px" };
        case 1:
          return { top: grid.y * 1 + "px", left: grid.x * 2 + "px" };
        case 2:
          return { top: grid.y * 2 + "px", left: grid.x * 0.5 + "px" };
        case 3:
          return { top: grid.y * 1 + "px", left: grid.x * 0 + "px" };
        case 4:
          return { top: grid.y * 2 + "px", left: grid.x * 1.5 + "px" };
        default:
          return { top: grid.y * 1 + "px", left: grid.x * 1 + "px" };
      }
    },
    drawCubes = arragement.map((e, i) => (
      <Cube
        key={i}
        onClick={(e) =>
          console.log({
            transform: `matrix(${e.main ? 1 : 0.4}), 0, 0, ${
              e.main ? 1 : 0.4
            }, 0, 0`,
            ...getPosition(e.main ? 100 : i),
          })
        }
        color={e.color}
        position={{
          transform: `matrix(${e.main ? 1 : 0.4}), 0, 0, ${
            e.main ? 1 : 0.4
          }, 0, 0`,
          ...getPosition(e.main ? 100 : i),
        }}
      />
    ));

  return (
    <MainContainer tabindex="-1">
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <FlexContainer>
          <TitleContainer>
            <Title>
              <span style={{ fontSize: "73px" }}>
                <Trans i18nKey="cubes.title">{t("cubes.title")}</Trans>
              </span>
            </Title>
            <Subtitle>
              <span>{t("cubes.sub_title")}</span>
            </Subtitle>
          </TitleContainer>
          <CubesContainer>
            {drawCubes}
            {/* <Cube color="rgb(223, 176, 122)" position={{ top: "50px", left: "500px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }} title="Vanilla" />
            <Cube color="rgb(97, 218, 251)" position={{ top: "250px", left: "250px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }} title="React" />
            <Cube color="rgb(65, 184, 131)" position={{ top: "250px", left: "500px", transform: "matrix(1, 0, 0, 1, 0, 0)" }} title="Vue" />
            <Cube color="rgb(221, 0, 49)" position={{ top: "250px", left: "750px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }} title="Angular" /> */}
            {/* <div title="Vanilla" i="0" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
              style={{ top: "0px", left: "500px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }}>
              <div className="Cube-qzxh3j-0 gkDrhn" size="170">
                <div offset="84" speed="120" size="170" className="Cube__Sides-qzxh3j-1-Component gVVvBL">
                  <div rotate="rotateX(90deg)" size="170" className="Cube__Side-qzxh3j-2 jJRyHU"
                    style={{ boxShadow: "rgb(223, 176, 122) 0px 0px 150px" }}></div>
                  <div rotate="rotateX(-90deg)" size="170" className="Cube__Side-qzxh3j-2 ncnDB"
                    style={{ boxShadow: "rgb(223, 176, 122) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(0deg)" size="170" className="Cube__Side-qzxh3j-2 bFGBnM"
                    style={{ boxShadow: "rgb(223, 176, 122) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-180deg)" size="170" className="Cube__Side-qzxh3j-2 LlAWJ"
                    style={{ boxShadow: "rgb(223, 176, 122) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-90deg)" size="170" className="Cube__Side-qzxh3j-2 knSaSt"
                    style={{ boxShadow: "rgb(223, 176, 122) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(90deg)" size="170" className="Cube__Side-qzxh3j-2 gnJuAh"
                    style={{ boxShadow: "rgb(223, 176, 122) 0px 0px 150px" }}></div>
                </div>
              </div>
            </div> */}
            {/* <div title="React" i="1" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
              style={{ top: "250px", left: "250px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }}>
              <div className="Cube-qzxh3j-0 gkDrhn" size="170">
                <div offset="32" speed="120" size="170" className="Cube__Sides-qzxh3j-1-Component fKvJsR">
                  <div rotate="rotateX(90deg)" size="170" className="Cube__Side-qzxh3j-2 jJRyHU"
                    style={{ boxShadow: "rgb(97, 218, 251) 0px 0px 150px" }}></div>
                  <div rotate="rotateX(-90deg)" size="170" className="Cube__Side-qzxh3j-2 ncnDB"
                    style={{ boxShadow: "rgb(97, 218, 251) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(0deg)" size="170" className="Cube__Side-qzxh3j-2 bFGBnM"
                    style={{ boxShadow: "rgb(97, 218, 251) 0px 0px 150px;" }}></div>
                  <div rotate="rotateY(-180deg)" size="170" className="Cube__Side-qzxh3j-2 LlAWJ"
                    style={{ boxShadow: "rgb(97, 218, 251) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-90deg)" size="170" className="Cube__Side-qzxh3j-2 knSaSt"
                    style={{ boxShadow: "rgb(97, 218, 251) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(90deg)" size="170" className="Cube__Side-qzxh3j-2 gnJuAh"
                    style={{ boxShadow: "rgb(97, 218, 251) 0px 0px 150px" }}></div>
                </div>
              </div>
            </div> */}
            {/* <div title="Vue" i="2" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
              style={{ top: "250px", left: "250px", transform: "matrix(1, 0, 0, 1, 250, 3.06162e-14)" }}>
              <div className="Cube-qzxh3j-0 gkDrhn" size="170">
                <div offset="54" speed="120" size="170" className="Cube__Sides-qzxh3j-1-Component gMDyYF">
                  <div rotate="rotateX(90deg)" size="170" className="Cube__Side-qzxh3j-2 jJRyHU"
                    style={{ boxShadow: "rgb(65, 184, 131) 0px 0px 150px" }}></div>
                  <div rotate="rotateX(-90deg)" size="170" className="Cube__Side-qzxh3j-2 ncnDB"
                    style={{ boxShadow: "rgb(65, 184, 131) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(0deg)" size="170" className="Cube__Side-qzxh3j-2 bFGBnM"
                    style={{ boxShadow: "rgb(65, 184, 131) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-180deg)" size="170" className="Cube__Side-qzxh3j-2 LlAWJ"
                    style={{ boxShadow: "rgb(65, 184, 131) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-90deg)" size="170" className="Cube__Side-qzxh3j-2 knSaSt"
                    style={{ boxShadow: "rgb(65, 184, 131) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(90deg)" size="170" className="Cube__Side-qzxh3j-2 gnJuAh"
                    style={{ boxShadow: "rgb(65, 184, 131) 0px 0px 150px" }}></div>
                </div>
              </div>
            </div> */}
            {/* <div title="Angular" i="3" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
              style={{ top: "250px", left: "750px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }}>
              <div className="Cube-qzxh3j-0 gkDrhn" size="170">
                <div offset="110" speed="120" size="170" className="Cube__Sides-qzxh3j-1-Component UVCGp">
                  <div rotate="rotateX(90deg)" size="170" className="Cube__Side-qzxh3j-2 jJRyHU"
                    style={{ boxShadow: "rgb(221, 0, 49) 0px 0px 150px" }}></div>
                  <div rotate="rotateX(-90deg)" size="170" className="Cube__Side-qzxh3j-2 ncnDB"
                    style={{ boxShadow: "rgb(221, 0, 49) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(0deg)" size="170" className="Cube__Side-qzxh3j-2 bFGBnM"
                    style={{ boxShadow: "rgb(221, 0, 49) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-180deg)" size="170" className="Cube__Side-qzxh3j-2 LlAWJ"
                    style={{ boxShadow: "rgb(221, 0, 49) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(-90deg)" size="170" className="Cube__Side-qzxh3j-2 knSaSt"
                    style={{ boxShadow: "rgb(221, 0, 49) 0px 0px 150px" }}></div>
                  <div rotate="rotateY(90deg)" size="170" className="Cube__Side-qzxh3j-2 gnJuAh"
                    style={{ boxShadow: "rgb(221, 0, 49) 0px 0px 150px" }}></div>
                </div>
              </div>
            </div> */}
          </CubesContainer>
        </FlexContainer>
      </div>
    </MainContainer>
  );
};

export default Cubes;
