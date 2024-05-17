import { style } from "@vanilla-extract/css";

export const layoutWrapper = style({
  display: "flex",
});

export const container = style({
  width: "100%",
  maxWidth: "1140px",
  minHeight: "100vh",
  margin: "0 auto",
  backgroundColor: "pink",
});
