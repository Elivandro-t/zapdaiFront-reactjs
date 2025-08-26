import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const banners = [
  { id: 1, text: "BANNER 1", bg: "#ccc" },
  { id: 2, text: "BANNER 2", bg: "#e0e0e0" },
  { id: 3, text: "BANNER 3", bg: "#dcdcdc" },
  { id: 4, text: "BANNER 4", bg: "#f0f0f0" },
];

export const BannerSlider: React.FC = () => {
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1275px", margin: "0 auto",position: "relative"  }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <Box
            key={banner.id}
            sx={{
              height: "280px",
              backgroundColor: banner.bg,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              position: "relative",
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="GrayText">
              {banner.text}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
