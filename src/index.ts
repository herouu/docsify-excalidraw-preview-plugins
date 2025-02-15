import {docsifyPluginExcalidraw} from "./excalidrawPlugins.tsx";

globalThis.$docsify = globalThis.$docsify || {};
globalThis.$docsify.plugins = (globalThis.$docsify.plugins || []).concat(
    docsifyPluginExcalidraw
);