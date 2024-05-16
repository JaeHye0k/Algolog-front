import { style, globalStyle } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "orange",
});

globalStyle(`${header} > :is(ul, li)`, {
  margin: "0",
  padding: "0",
  listStyle: "none",
});

export const avatar = style({
  border: "1px solid #52FF00",
  borderRadius: "50%",
  width: "1rem",
  height: "1rem",
  background: "url(../assets/avatar.png) no-repeat",
  backgroundSize: "contain",
});

export const iconmenu = style({
  display: "flex",
});
