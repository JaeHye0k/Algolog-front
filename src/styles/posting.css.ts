import { style, globalStyle } from "@vanilla-extract/css";

export const postingContainer = style({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  padding: "0 5vw",
});

globalStyle(`${postingContainer} > *`, {
  width: "100%",
});

export const posting = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

globalStyle(`${posting} > *`, {
  width: "100%",
});

export const postingHeader = style({
  flex: "0.2",
  paddingTop: "5vh",
});

export const title = style({
  width: "100%",
  fontSize: "30px",
  border: "none",
  outline: "none",
});

export const postingBody = style({
  flex: "0.75",
});

export const postingFooter = style({
  flex: "0.05",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const buttonGroup = style({});

export const preview = style({
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});
