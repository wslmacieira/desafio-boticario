import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em"
});

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  .card {
    margin-top: 100px;
    padding: 16px;
    background-color: #fff;
    border-radius: 4px;
    ${customMedia.lessThan("desktop")`
       position: absolute;
       left: 310px;
       right: 10px;
    `}
    ${customMedia.lessThan("tablet")`
       position: absolute;
       left: 230px;
       
    `}
    ${customMedia.lessThan("mobile")`
       width: 100%;
       left: 0px;
    `}

    h1 {
      ${customMedia.lessThan("tablet")`
        font-size: 22px;

      `}
    }

    li {
      text-transform: uppercase;
      font-size: 24px;
      font-weight: bold;
      color: #198ccf;
      margin: 15px 10px 0px 0px;
      ${customMedia.lessThan("tablet")`
        font-size: 20px;
      `}
      ${customMedia.lessThan("mobile")`
        font-size: 14px;
      `}

      span {
      font-size: 20px;
      font-weight: bold;
      color: #222;
      text-transform: uppercase;
      ${customMedia.lessThan("tablet")`
        font-size: 16px;
      `}
      ${customMedia.lessThan("mobile")`
        font-size: 10px;
      `}
      }
    }

    p {
      width: 100%;
    }

  }
    
  `;