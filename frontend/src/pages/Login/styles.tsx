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

  div.card {
    margin-top: 100px;
    width: 40%;
    padding: 16px;
    background-color: #fff;
    border-radius: 4px;
    ${customMedia.lessThan("tablet")`
       width: 60%;
    `}
    ${customMedia.lessThan("mobile")`
       width: 100%;
    `}

    h1 {
      ${customMedia.lessThan("tablet")`
        margin-bottom: 15px;
        font-size: 20px;
      `}
    }

    label {
      ${customMedia.lessThan("tablet")`
        font-size: 14px;
      `}
    }

    input {
      ${customMedia.lessThan("tablet")`
        font-size: 12px;
        margin-bottom: 5px;
      `}
    }
    }

  button {
    ${customMedia.lessThan("tablet")`
      margin-top: 15px;  
    `}
    ${customMedia.lessThan("mobile")`
      width: 100%
      font-size: 14px;
      margin-top: 10px;
      height: 35px;    
    `}
  }

  button[type="button"] {
    background: #4caf50;
  }
`;
