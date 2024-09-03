import { ParentProps } from "solid-js";

export function Layout({ children }: ParentProps) {
    return (
        <>
            <h2>LAYOUT 2</h2>
            {children}
        </>
    );
}
