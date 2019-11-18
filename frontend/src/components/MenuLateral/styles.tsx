import styled from 'styled-components';

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em"
});

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  
  ul {
    position: absolute;
    top: 70px;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    padding: 20px 15px;
    color: #bdbdbd;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    :hover {
      background-color:#373737
    }

    ${customMedia.lessThan("tablet")`
        font-size: 14px;
      `}

    svg {
      font-size: 28px;
      margin-right: 10px;

      ${customMedia.lessThan("tablet")`
        font-size: 22px;
      `}
    }
  }

  label {
    padding: 15px;
    position: absolute;
    z-index: 2;
    
    ${customMedia.lessThan("mobile")`
        position: fixed;
      `}
  }

  img {
    width: 40px;
    
  }

  input[type="checkbox"] {
    display: none
  }

  input[type="checkbox"]:checked ~footer {
    transform: translateX(-300px);
    right: -300px;

    ${customMedia.lessThan("tablet")`
      transform: translateX(-220px);
      right: -220px;
 `}
    ${customMedia.lessThan("mobile")`
      transform: translateX(0px);
      right: 0px;
 `}

  }

  input[type="checkbox"]:checked ~ nav 
  {
    transform: translateX(-300px);

    ${customMedia.lessThan("tablet")`
     transform: translateX(-220px);
 `}
    ${customMedia.lessThan("mobile")`
     transform: translateX(250px);
 `}

    li:hover {
      background-color: #373737;
    }
  }

  nav {
    height: 100%;
    overflow-y: auto;
    transition: all .5s ;
    background-color: rgba(16,16,16, .9);
    width: 300px;
    left: 0px;
    position: absolute;
    transition: all .5s;
    z-index: 1;
    ${customMedia.lessThan("tablet")`
      width: 220px;
    `}
    ${customMedia.lessThan("mobile")`
      height: 100%;
      width: 250px;
      left: -250px;
      position: fixed;
  `}
  }
  
  .profile {
    display: flex;

    img {
      width: 60px;
      border-radius: 50%;
      ${customMedia.lessThan("tablet")`
        width: 50px;
      `}
    }
  }

  .profile-info {
    span {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
    }
  }

  .user-name {
    color: #bdbdbd;
    font-weight: bold;
    font-size: 20px;

    ${customMedia.lessThan("tablet")`
        font-size: 16px;
    `}

  }
  .user-prof {
    color: #979797;
    font-size: 16px;

    ${customMedia.lessThan("tablet")`
      font-size: 12px;
    `}

  }

  footer {
    transition: all .5s;
    padding: 20px;
    background-color: #ffffff;
    border-top: 1px solid #e8e8e8;
    position: fixed;
    right: 0px;
    left: 300px;
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    bottom: 0px;
    position: fixed;
    transition: all .5s;
    ${customMedia.lessThan("tablet")`
    height: 50px;
    left: 220px;
 `}
    ${customMedia.lessThan("mobile")`
    left: 0px;
    bottom: 0px;

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
      ${customMedia.lessThan("tablet")`
      font-size: 16px;
   `}
    }
  }
`;