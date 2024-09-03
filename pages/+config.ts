import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.js";

// Default config (can be overridden by pages)
export default {
    Head,

    // <title>
    title: "My Vike App",
    extends: vikeSolid,
} satisfies Config;
