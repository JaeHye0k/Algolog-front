import { style } from "@vanilla-extract/css";
import avartaImage from "@avatar/avatar.png";

export const avatar = style({
    border: "1px solid #52FF00",
    borderRadius: "50%",
    width: "1rem",
    height: "1rem",
    background: `url(${avartaImage}) no-repeat`,
    backgroundSize: "contain",
});

export const iconmenu = style({
    display: "flex",
    alignItems: "center",
});

export const writeButton = style({
    selectors: {
        [`${iconmenu} &`]: {
            border: "1px solid black",
            borderRadius: "1rem",
            padding: "3px 5px",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            transition: "all .2s ease-in-out",
        },
        "&:hover": {
            color: "white",
            backgroundColor: "black",
        },
    },
});
