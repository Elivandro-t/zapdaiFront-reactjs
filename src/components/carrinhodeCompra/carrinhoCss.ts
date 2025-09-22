import styled from "styled-components";

export default {
  MainArea: styled.div`
      position: fixed;
      z-index: 9999;
      top: 0;
      width: 100%;
      background-color:rgba(0,0,0,0.5);
      display: flex;
      justify-content:end;
    `,
  AreaCar: styled.div`
     max-width:620px;
     width: 100%;
     height: 100vh;
     box-sizing:border-box;
     background-color:#FFF;
     position: relative;

    `,
  AreaHeader: styled.div`
     width: 100%;
     height: 40px;
     display:flex;
     justify-content:start;
     align-items:center;
     padding:0 10px;
       box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

    `,
  Btn: styled.button`
      background:transparent;
      border:0;
      transition: transform 0.1s ease-in-out;
      cursor: pointer;
      &:active{
        transform:scale(0.92);

      }

    `,
  Titulo: styled.h1`
      color:rgb(39, 37, 37);
     margin-left:10px;
     font-size:18px;

    `,
  AreaMain: styled.div`
    height:90vh;
    position: relative;
    display: flex;
    flex-direction: column;
         padding: 0 10px;

    `,
  henfleBtn: styled.div`
    width: 100%;
        height: 60px;
        position: absolute;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 25px;
        bottom:0;
        background-color:#FFF;
       box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);



    `,
  Finally: styled.button`
        padding: 10px 20px;
        width: 50%;
         background-color: #28a745; /* verde sucesso */
         color: #fff;
         z-index: 999;
         bottom: 0;
         border: 0;
         border-radius: 5px;
         cursor: pointer;
         &:hover{
          background-color:rgb(54, 138, 73);
          color: #000;
         }
         &:active{
           transition:1ms ease-in;
           transform:scale(0.97);
         }
    `
}