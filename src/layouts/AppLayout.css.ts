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
    "@media": {
        "screen and (max-width: 1400px)": {
            maxWidth: "1200px",
        },
        "screen and (max-width: 1200px)": {
            maxWidth: "992px",
        },
        "screen and (max-width: 992px)": {
            maxWidth: "768px",
        },
        "screen and (max-width: 768px)": {
            maxWidth: "576px",
        },
    },
});
