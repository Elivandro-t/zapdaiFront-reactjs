import styled from "styled-components";

export default  { 
    MainArea:styled.div`
      position: fixed;
      z-index: 9999;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color:rgba(0,0,0,0.5);
      display: flex;
      justify-content:end;
      cursor: pointer;
    `,
    AreaCar:styled.div`
     width: 620px;
     height: 100%;
     background-color:#FFF;
    `,
    AreaHeader:styled.div`
     width: 100%;
     height: 40px;
     display:flex;
     justify-content:start;
     align-items:center;
     padding:0 10px;
       box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

    `,
    Btn:styled.button`
      background:transparent;
      border:0;
      transition: transform 0.1s ease-in-out;
      cursor: pointer;
      &:active{
        transform:scale(0.92);

      }

    `,
     Titulo:styled.h1`
      color:rgb(39, 37, 37);
     margin-left:10px;
     font-size:18px;

    `,
    AreaMain:styled.div`
    height: 100vh;
    padding:20px 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    `,
    henfleBtn:styled.div`
        position: fixed;
        display:flex;
        align-items: center;
        justify-content: center;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    `,
    Finally:styled.button`

    `
}