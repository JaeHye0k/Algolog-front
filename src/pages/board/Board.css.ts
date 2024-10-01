import { style } from "@vanilla-extract/css";

export const cardContainer = style({
    display: "grid",
    listStyle: "none",
    gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
    gap: "20px",
    "@media": {
        "screen and (max-width: 768px)": {
            gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
        },
        "screen and (max-width: 576px)": {
            gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
        },
    },
});

export const boardBanner = style({
    height: "30vh",
});

export const boardTitle = style({
    position: "relative",
    top: "75%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "inline-block",
    fontSize: "50px",
    textTransform: "uppercase",
    borderBottom: "1px solid black",
});
