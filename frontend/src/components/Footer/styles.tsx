import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em"
});

export const Container = styled.div`

footer {
    transition: all .5s;
    padding: 20px;
    background-color: #ffffff;
    border-top: 1px solid #e8e8e8;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    ${customMedia.lessThan("tablet")`
    height: 50px;
 `}


    svg {
      color: #bdbdbd;
      font-size: 30px;
      ${customMedia.lessThan("tablet")`
      font-size: 20px;
   `}
    }
 
    strong {
      font-size: 20px;
      color: #bdbdbd;
      display: flex;
      /* padding-left: 320px; */
      ${customMedia.lessThan("tablet")`
      font-size: 16px;
   `}
    }
  }
  
`;
