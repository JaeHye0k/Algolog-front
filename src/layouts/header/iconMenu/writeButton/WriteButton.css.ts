import { style } from "@vanilla-extract/css";

export const writeButton = style({
    border: "1px solid black",
    borderRadius: "1rem",
    padding: "3px 5px",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    transition: "all .2s ease-in-out",
    selectors: {
        "&:hover": {
            color: "white",
            backgroundColor: "black",
        },
    },
});
