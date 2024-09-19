import { style, globalStyle } from "@vanilla-extract/css";

export const postContainer = style({
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    padding: "0 5vw",
});

globalStyle(`${postContainer} > *`, {
    width: "100%",
});

export const post = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
});

globalStyle(`${post} > *`, {
    width: "100%",
});

export const postHeader = style({
    paddingTop: "5vh",
});

export const title = style({
    width: "100%",
    fontSize: "30px",
    border: "none",
    outline: "none",
});

export const postFooter = style({
    position: "absolute",
    bottom: "0",
    left: "0",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
});

export const buttonGroup = style({});
