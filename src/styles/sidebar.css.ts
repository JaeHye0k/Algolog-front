import { style, globalStyle } from "@vanilla-extract/css";

const fontGrey: string = "#6B6B6B";
const sidebarPadding: number = 20;
const pos: {
  X: number;
  Y: number;
} = {
  X: 20,
  Y: 20,
};

const activeCircle: {
  inner: number;
  outer: number;
} = {
  inner: 30,
  outer: 40,
};

export const sidebar = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `0 ${sidebarPadding}px`,
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
  height: "70px",
  lineHeight: "70px",
});
export const blogName = style({
  textTransform: "uppercase",
  fontWeight: "bold",
});
export const blogNameSuffix = style({
  textTransform: "lowercase",
  paddingLeft: "10px",
});

export const blogInfo = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
});

export const profileBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const avatarBox = style({
  width: "150px",
  fontSize: "0",
  backgroundColor: "black",
  borderRadius: "50%",
  position: "relative",
  "::after": {
    content: "",
    display: "block",
    position: "absolute",
    width: activeCircle.inner,
    height: activeCircle.inner,
    backgroundColor: "#1AB700",
    borderRadius: "50%",
    bottom: pos.Y,
    right: pos.X,
    transform: "translate(50%, 50%)",
  },
  "::before": {
    content: "",
    display: "block",
    position: "absolute",
    width: activeCircle.outer,
    height: activeCircle.outer,
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    bottom: pos.Y,
    right: pos.X,
    transform: "translate(50%, 50%)",
  },
});

export const avatarImage = style({
  width: "100%",
});

export const nameContainer = style({
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const nameEnglish = style({
  textTransform: "capitalize",
  fontSize: "35px",
  fontWeight: "700",
});

export const nameKorean = style({
  color: fontGrey,
  paddingTop: "5px",
  fontSize: "18px",
});

export const infoContainer = style({
  marginTop: "20px",
  fontSize: "14px",
});

globalStyle(`${infoContainer} > div`, {});

export const hrLine = style({
  // width: `calc(100% + ${(sidebarPadding - 10) * 2}px)`,
  width: "100%",
  borderTop: `#ccc solid 1px`,
  marginTop: "30px",
  // margin: `20px -${sidebarPadding}px 0`,
});

export const category = style({
  listStyle: "none",
  margin: "0",
  padding: "0",
  width: "100%",
  color: fontGrey,
});

globalStyle(`${category} > li`, {
  marginTop: "10px",
});
globalStyle(`${category} > li:hover`, {
  cursor: "pointer",
});
globalStyle(`${category} > li::before`, {
  content: "",
  display: "inline-block",
  marginRight: "10px",
  width: "8px",
  height: "8px",
  border: "none",
  borderRight: `2px solid ${fontGrey}`,
  borderBottom: `2px solid ${fontGrey}`,
  transform: "rotate(-45deg)",
});
