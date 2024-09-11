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
    position: "relative",
});

globalStyle(`${posting} > *`, {
    width: "100%",
});

export const postingHeader = style({
    paddingTop: "5vh",
});

export const title = style({
    width: "100%",
    fontSize: "30px",
    border: "none",
    outline: "none",
});

export const postingFooter = style({
    position: "absolute",
    bottom: "0",
    left: "0",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
});

export const buttonGroup = style({});
