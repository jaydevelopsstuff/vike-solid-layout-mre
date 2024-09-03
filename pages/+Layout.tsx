import { ParentProps } from "solid-js";

export function Layout({ children }: ParentProps) {
    return (
        <>
            <h1>ROOT LEVEL LAYOUT</h1>
            {children}
        </>
    );
}
