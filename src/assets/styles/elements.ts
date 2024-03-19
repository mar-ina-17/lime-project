import { css } from "@emotion/css";

export const navbarCss = css({
  top: "0",
  width: "100%",
  height: "60px",
  backgroundColor: "#00d2b2",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 768px)": {
    display: "inline-flex",
    flexWrap: "wrap",
  },
});

export const navbarTitleCss = css({
  fontSize: "2rem",
  fontWeight: "bold",
  marginLeft: "10px",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

export const menuList = css({
  display: "flex",
  padding: "0",
  marginLeft: "auto",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const menuLinks = css({
  display: "flex",
  listStyle: "none",
  margin: "10px",
  cursor: "pointer",
  textDecoration: "none",
  padding: "5px",

  "& > a": {
    "&:hover": {
      textDecoration: "none",
    },
  },
  "&:hover": {
    transition: "background-color 0.3s ease",
    backgroundColor: "#ddefe3",
    borderRadius: "5px",
  },
});

export const disconnectCss = css({
  display: "flex",
  listStyle: "none",
  margin: "10px",
  cursor: "pointer",
  textDecoration: "none",
  padding: "5px",
  color: "#7643B6",
  fontWeight: "900",
  "&:hover": {
    transition: "color 0.3s ease",
    color: "#B49ED4",
  },
});

export const mobileMenuList = css({
  display: "flex",
  padding: "0",
  margin: "5px",
  marginLeft: "auto",
  "@media (min-width: 768px)": {
    display: "none",
  },
});

export const randomBreweryCss = css({
  "@media (min-width: 768px)": {
    display: "flex",
    listStyle: "none",
    margin: "10px",
    cursor: "pointer",
    textDecoration: "none",
    padding: "5px",
    borderRadius: "5px",
  },
  "& > button": {
    marginLeft: "5px",
    backgroundColor: "#7643B6",
    color: "#BCA3DC",

    ":hover": {
      color: "#7643B6",
      transition: "background-color 0.3s ease",
      backgroundColor: "#BCA3DC",
    },
  },
});

export const rowStyles = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const starCss = css({
  margin: "10px",
  cursor: "pointer",
});

export const scrollCss = css({
  scrollbarColor: "transparent",
  "&::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "transparent",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#cdd1d6",
    borderRadius: "4px",
  },
});

export const cardImageCss = css({
  cursor: "pointer",
});

export const favouritesCardCss = css({
  borderRadius: "10px",
});
