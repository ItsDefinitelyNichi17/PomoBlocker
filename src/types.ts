import type { MouseEventHandler } from "react";

export interface ButtonType {
    width? : string;
    height? : string;
    type? : "button";
    children?: React.ReactNode;
    onClick? : MouseEventHandler | undefined;
    color? : string;
    hoverC? : string;
    roundness? : string;
}