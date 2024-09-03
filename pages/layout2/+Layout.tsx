import { ParentProps } from "solid-js";

export function Layout(props: ParentProps) {
    return (
        <>
            <h2>LAYOUT 2</h2>
            {props.children}
        </>
    );
}
