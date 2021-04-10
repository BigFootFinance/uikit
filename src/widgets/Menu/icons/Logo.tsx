import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const Text = styled.text`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
`;
const Tspan = styled.tspan`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
  letter-spacing: 0em;
`;

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#432918";
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg6532"
        version="1.1"
        viewBox="0 0 58.208332 13.229167"
        height="50"
        width="220"
        {...props} >
        <defs
          id="defs6526" />
        <g
          transform="translate(0,-283.77082)"
          id="layer1">
          <image width="12.870089" height="12.870089" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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
      " id="image7096" x="1.0394373" y="283.90311"></image>
          <text
            id="text7101"
            y="294.65652"
            x="13.644942"
            style={{fontSize:"6.3499999px",fontFamily:"sans-serif",fill:'#ceb123'}}
            xmlSpace="preserve"><tspan
              style={{fontWeight:'bold',fontSize:'8.46666622px',fontFamily:'sans-serif',fill:'#ceb123'}}
              y="294.65652"
              x="13.644942"
              id="tspan7099">BIGFOOT</tspan></text>
        </g>
      </svg>
  );
};

export default Logo;
