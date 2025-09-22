import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./index.css"
const banners = [
  { id: 1, text: "BANNER 1", bg: "#ccc" },
  { id: 2, text: "BANNER 2", bg: "#e0e0e0" },
  { id: 3, text: "BANNER 3", bg: "#dcdcdc" },
  { id: 4, text: "BANNER 4", bg: "#f0f0f0" },
];
import Api from "../../service/api"

export const BannerSlider: React.FC = () => {
  let [lista, setLista] = useState<any[]>();
  useEffect(() => {
    const banner = async () => {
      const json = await Api.banner();
      setLista(json)
      console.log("minha lista " + lista)

    }
    banner()
  }, [])
  const PrevArrow = ({ onClick }: any) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "16px",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "rgba(255,255,255,0.6)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );

  // Botão direito
  const NextArrow = ({ onClick }: any) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "16px",
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "rgba(255,255,255,0.6)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box sx={{
      width: "100%", padding: "30px 0;"
      , maxWidth: "100%", margin: "0 auto", position: "relative"
    }}>
      <Slider {...settings}>
        {lista?.map((banner) => (
          <Box
            key={banner.id}
            sx={{
              height: "280px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              position: "relative",
              objectFit: "contain"
            }}
          >
           <img
  src={banner.logoUrl}
  alt="Banner"
  style={{
    width: "100%",
    height: "400px",
    objectFit: "cover", // cobre toda a área
    objectPosition: "center",
    borderRadius: "4px",
  }}
/>
            {/* <Typography variant="h4" fontWeight="bold" color="GrayText" sx={{
      position: "absolute",
      bottom: "16px",
      left: "16px",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "6px 10px",
      borderRadius: "4px",
      
    }}>
              {banner.nome}
            </Typography> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
