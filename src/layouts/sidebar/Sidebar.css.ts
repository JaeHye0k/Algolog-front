import { style, globalStyle } from "@vanilla-extract/css";

const sidebarPadding: number = 20;

export const sidebar = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0 ${sidebarPadding}px`,
    "@media": {
        "screen and (max-width: 768px)": {
            display: "none",
        },
    },
});

globalStyle(`${sidebar} > *`, {
    width: "max-content",
});

export const hrLine = style({
    // width: `calc(100% + ${(sidebarPadding - 10) * 2}px)`,
    width: "100%",
    borderTop: `#ccc solid 1px`,
    marginTop: "30px",
    // margin: `20px -${sidebarPadding}px 0`,
});
