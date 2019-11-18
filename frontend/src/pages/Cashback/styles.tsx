import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em"
});

export const Container = styled.div`
  position: absolute;
  left: 320px;
  top: 100px;
  right: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  ${customMedia.lessThan("tablet")`
   left: 230px;
    right: 10px;
    padding: 10px;
  `}
  ${customMedia.lessThan("mobile")`
    left: 0px;
    right: 0px;
    margin-bottom: 60px;
  `}

h1 {
  text-transform: uppercase;
  font-size: 34px;
  font-weight: bold;
  color: #198ccf;
  margin-bottom: 20px;
  ${customMedia.lessThan("tablet")`
    font-size: 20px;
  `}
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

}

table tr.tbody {
  :hover {
    background-color: #ececec
  }
}

tr.thead {
  height: 50px;
}

table tr {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: .35em;


}

table th,
table td {
  font-weight: bold;
  text-transform: uppercase;
  padding: .325em;
  font-size: 16px;
  text-align: center;

  ${customMedia.lessThan("tablet")`
    font-size: 12px;
  `}
  
  svg {
    font-size: 20px;
    margin-right: 5px;
    ${customMedia.lessThan("tablet")`
    font-size: 14px;
  `}
  }
  
}

table th {
  color: #198ccf;
  font-size: 18px;
  text-transform: uppercase;
  ${customMedia.lessThan("tablet")`
    font-size: 14px;
  `}
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
    
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
    
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;  
    text-align: right;
  }
  
  table td::before {
    content: attr(data-label);
    float: left;
    color: #198ccf;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}

`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
  ${customMedia.lessThan("mobile")`
    margin-top: 10px;
    margin-bottom: 10px
  `}

  span {
    font-size: 30px;
    font-weight: bold;
    ${customMedia.lessThan("tablet")`
      font-size: 22px;
  `}
  }

  strong {
    font-size: 22px;
    color: #198ccf;
    font-weight: bold;
    ${customMedia.lessThan("tablet")`
        font-size: 16px;
  `}
  }

  button {
    ${customMedia.lessThan("mobile")`
      font-size: 14px;
      height: 35px;    
    `}
  }
  
`;
