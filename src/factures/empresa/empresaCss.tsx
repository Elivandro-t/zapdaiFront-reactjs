import styled from "styled-components";

export default {
    Container: styled.div`
    width: 100%;
       height: 100vh;
    `,
    HeaderComponet:styled.div`
    width: 100%;
    height: 80px;
    background-color:red;
    position: relative;
    margin-bottom: 10px;
    `,
    areaBanner:styled.div`
    display: flex;
    `,
    AreaHeader:styled.div`
    display: flex;
     position: absolute;
     align-items:center;
     justify-content:space-between;
     padding: 0 30px;
     width: 100%;
     height: 100%;
    `,
     Imagem:styled.div<{imgem:any}>`
        /* background-image:url(${props=>props.imgem}); */
        background-size:cover;
        background-repeat:no-repeat;
        background-position: center; 
        padding: 5px;
        width: 100%;
        height: 100%;
     `,
     Logo:styled.h1`
      color: #FFF;
      font-size: 42px;
      font-weight:800;
      font-family: Arial, Helvetica, sans-serif;
     `,
      LogoImagem:styled.div<{imgem:any}>`
        background-image:url(${props=>props.imgem});
        background-size:cover;
        background-repeat:no-repeat;
        background-position: center; 
        padding: 5px;
        width:80px;
        height:50px;
        border-radius: 50px;
     `,
     Banner_area:styled.div`
     display: flex;

     `,
     imagemITens:styled.section`
      flex:1;
      background:blue;

     `,
     BannerCarrossel:styled.section`
      max-width: 600px;
      width: 100%;
      padding:0 10px;

     `
}