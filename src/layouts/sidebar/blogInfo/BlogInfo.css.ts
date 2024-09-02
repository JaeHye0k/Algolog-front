import { style } from "@vanilla-extract/css";

const fontGrey: string = "#6B6B6B";

const pos: {
    X: number;
    Y: number;
} = {
    X: 20,
    Y: 20,
};

const activeCircle: {
    inner: number;
    outer: number;
} = {
    inner: 30,
    outer: 40,
};

export const blogInfo = style({
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
});

export const profileBox = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export const avatarBox = style({
    width: "150px",
    fontSize: "0",
    backgroundColor: "black",
    borderRadius: "50%",
    position: "relative",
    "::after": {
        content: "",
        display: "block",
        position: "absolute",
        width: activeCircle.inner,
        height: activeCircle.inner,
        backgroundColor: "#1AB700",
        borderRadius: "50%",
        bottom: pos.Y,
        right: pos.X,
        transform: "translate(50%, 50%)",
    },
    "::before": {
        content: "",
        display: "block",
        position: "absolute",
        width: activeCircle.outer,
        height: activeCircle.outer,
        backgroundColor: "#FFFFFF",
        borderRadius: "50%",
        bottom: pos.Y,
        right: pos.X,
        transform: "translate(50%, 50%)",
    },
});

export const avatarImage = style({
    width: "100%",
});

export const nameContainer = style({
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
export const nameEnglish = style({
    textTransform: "capitalize",
    fontSize: "35px",
    fontWeight: "700",
});

export const nameKorean = style({
    color: fontGrey,
    paddingTop: "5px",
    fontSize: "18px",
});

export const infoContainer = style({
    marginTop: "20px",
    fontSize: "14px",
});
