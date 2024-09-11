import { style } from "@vanilla-extract/css";

export const imageCard = style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
});

export const thumbnail = style({
    selectors: {
        [`${imageCard} &`]: {
            width: "100%",
            aspectRatio: "4 / 3",
            objectFit: "cover",
            backgroundColor: "white",
        },
    },
});
