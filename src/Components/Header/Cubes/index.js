import React from 'react';

import './style.css';

// import styled, { keyframes } from 'styled-components';


const Cubes = (props) => {
  return (
    <div style={{ outline: "none", position: 'relative', backgroundColor: '#111' }} tabindex="-1" role="group" id="gatsby-focus-wrapper">
      <div>
        <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
          <div className="sc-kGXeez bqtLVu">
            <div className="sc-chPdSV gmIHMR">
              <div style={{ backgroundColor: "rgba(223, 176, 122, 0.030000000000000027)" }}
                className="Background__Container-zmvj8f-0 kITpFh"><canvas style={{ position: "absolute", top: 0, left: 0 }}></canvas>
              </div>
              <div className="sc-kgoBCf Animation__Container-sc-18opm6-0 dqfgkQ">
                {/* <div className="Title__Container-sc-6m17hx-0 fljuMl">
                  <h1 title="CodeSandbox" className="Title-sc-6m17hx-1 otsEm">
                    <div style={{ color: "#dfb07a" }} className="Title__Secondary-sc-6m17hx-6 hMkGhY">Code</div>
                    <div className="Title__Primary-sc-6m17hx-5 dqLreZ">Sandbox</div>
                  </h1>
                  <h2 title="The online code editor tailored for web applications"
                    className="Title__SubTitle-sc-6m17hx-2 bUGanP"><span>The online code editor for web applications</span>
                  </h2>
                  <div className="Title__ResponsiveRollingText-sc-6m17hx-4 ipPcMK"
                    style={{ display: "inline-block", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, width: "inherit" }}></div>
                    <div style={{ display: "inline-block", width: "inherit" }}>
                      <div className="Title__Buttons-sc-6m17hx-3 cwMdZn"><a href="/s/vanilla" style={{ width: "220px" }}
                        className="Button-yto3pm-0-Component fSfZhm">Open
                          Editor</a><a className="Button-yto3pm-0-Component pQpAY" href="/explore">Explore
                          Examples</a></div>
                    </div>
                  </div>
                </div> */}
                <div className="Cubes__Container-er6zb0-0 kwcdNMkM">
                  <div title="Vanilla" i="0" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
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
                  </div>
                  <div title="React" i="1" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
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
                  </div>
                  <div title="Vue" i="2" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
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
                  </div>
                  <div title="Angular" i="3" className="Cubes__SmallCube-er6zb0-1 dtwvmR"
                    style={{ top: "-250px", left: "500px", transform: "matrix(0.4, 0, 0, 0.4, 0, 0)" }}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Cubes;