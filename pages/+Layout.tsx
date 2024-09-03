import { ParentProps } from "solid-js";

export function Layout(props: ParentProps) {
    return (
        <>
            <h1>ROOT LEVEL LAYOUT</h1>
            {props.children}
        </>
    );
}
