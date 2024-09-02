import { style, globalStyle } from "@vanilla-extract/css";

export const headerHeight = "70px";

export const header = style({
    width: "100%",
    height: headerHeight,
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
