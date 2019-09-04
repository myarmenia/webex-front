import React from 'react';

import styled, { keyframes } from 'styled-components';

const
  smallRotate = keyframes`
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(4, 1, 2, 195deg);
    }
  `,
  CubeWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    transform: scale(0.4, 0.4);
    will-change: transform;
  `,
  CubeSize = styled.div`
    width: 171px;
    height: 171px;

    & *{
      position: 'absolute';
      width: 171px;
      height: 171px;
    }
  `,
  SidesWrapper = styled.div`
    transform-style: preserve-3d;
    will-change: transform;
    animation: 10s linear 0s infinite normal none running ${smallRotate};

    & *{
      box-sizing: border-box;
      background-color: ${props => props.color};
      border-width: 2.42857px;
      border-style: solid;
      border-color: rgba(255, 255, 255, 0.4);
      border-image: initial;
    }
  `,
  Side = styled.div`
    transform-origin: 50% 50%;
    will-change: transform;
    transform: ${props => props.rotate} translateZ(85px);
  `;

const Cube = props => {
  return (
    <CubeWrapper style={props.position}>
      <CubeSize className="gkDrhn">
        <SidesWrapper color={props.color}>
          <Side rotate="rotateX(90deg)" style={{ boxShadow: `${props.color} 0px 0px 150px` }}></Side>
          <Side rotate="rotateX(-90deg)" style={{ boxShadow: `${props.color} 0px 0px 150px` }}></Side>
          <Side rotate="rotateY(0deg)" style={{ boxShadow: `${props.color} 0px 0px 150px` }}></Side>
          <Side rotate="rotateY(-180deg)" style={{ boxShadow: `${props.color} 0px 0px 150px` }}></Side>
          <Side rotate="rotateY(-90deg)" style={{ boxShadow: `${props.color} 0px 0px 150px` }}></Side>
          <Side rotate="rotateY(90deg)" style={{ boxShadow: `${props.color} 0px 0px 150px` }}></Side>
        </SidesWrapper>
      </CubeSize>
    </CubeWrapper>
  );
};

export default Cube;