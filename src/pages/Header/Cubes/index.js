import React from "react";
import { useTranslation, Trans } from "react-i18next";
import {useState, useEffect} from 'react';
import Cube from "./Cube.js";
import arragement from "./mock";
import {useWindow} from "../../../hooks/window.hook";
import "./style.css";

const Cubes = () => {
  const { t } = useTranslation(["main"]);

  const [width,setWidth]=useState(window.innerWidth);
  const [grid,setGrid]=useState({ x: 210, y: 200 });

  const {width: wd} = useWindow();

  useEffect(() => {
    if( wd>=900 && wd<1240){
           setGrid({ x: 160, y: 200 })
    }
    else if(wd<1000){
           setGrid({ x: 110, y: 170 })
    }
    else{
            setGrid({ x: 210, y: 200 })
     }
    
  }, [wd]);

  // const grid = { x: 210, y: 200 },
  const getPosition = (i) => {
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
  // window.addEventListener('resize',handleResize)

  return (
    <div className="MainContainer" tabIndex="-1">
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <div className="FlexContainer">
        <div className="CubesContainer">{drawCubes}</div>

          <div className="TitleContainer">
            <div className="Title">
              <span>
                <Trans i18nKey="cubes.title">{t("cubes.title")}</Trans>
              </span>
            </div>
            <div className="Subtitle">
              <span>{t("cubes.sub_title")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cubes;
