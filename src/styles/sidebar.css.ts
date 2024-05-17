import { style, globalStyle } from "@vanilla-extract/css";

export const sidebar = style({
  backgroundColor: "yellow",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 20px",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

globalStyle(`${sidebar} > *`, {
  width: "max-content",
});

export const logo = style({
  fontSize: "30px",
});

export const blogInfo = style({
  display: "flex",
  flexDirection: "column",
});

export const profile = style({});
