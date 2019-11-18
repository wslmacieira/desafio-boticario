import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em"
});

export const Container = styled.header`

  nav.header {
  display: flex;
    background-color: #4CAF50;
    width: 100%;
    height: 70px;
    position:absolute;
    z-index: 2;

    ${customMedia.lessThan("tablet")`
        height: 60px;
      `}
    ${customMedia.lessThan("mobile")`
        height: 60px;
        position:fixed;
      `}

    img {
      padding: 10px 10px 10px 70px;
      width: 300px;
      background-color: #66bb6a;

      ${customMedia.lessThan("tablet")`
        width: 220px;
      `}

      ${customMedia.lessThan("mobile")`
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 0px;
        width: 60%;
        background-color: transparent;
      `}   
    }
  }
  `;