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
     gap: 5px;
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
      font-size: 32px;
      margin: 0;
      padding: 0;
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
     padding: 2px 12px;

     `,
     imagemITens:styled.section`
      flex:1;
      background:blue;

     `,
     BannerCarrossel:styled.section`
      max-width: 600px;
      width: 100%;
      padding:0 10px;

     `,
     Input:styled.input`
      height: 30px;
     width:50%;
     border-radius: 7px;
     border: 0;
     padding:5px;

     `
}