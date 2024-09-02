import { style } from "@vanilla-extract/css";

export const logo = style({
    fontSize: "30px",
    height: "70px",
    lineHeight: "70px",
    ":hover": {
        cursor: "pointer",
    },
});
export const blogName = style({
    textTransform: "uppercase",
    fontWeight: "bold",
});
export const blogNameSuffix = style({
    textTransform: "lowercase",
    paddingLeft: "10px",
});
