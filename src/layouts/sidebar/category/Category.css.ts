import { style, globalStyle } from "@vanilla-extract/css";

const fontGrey: string = "#6B6B6B";

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
