import {DocsifyHooks} from "./types/docsify";
import {nanoid} from "nanoid";
import {createRoot} from "react-dom/client";
import Excaildraw2svg from './excaildraw2svg.tsx'
import {StrictMode} from "react";


const docsifyPluginExcalidraw = (hook: DocsifyHooks) => {
    hook.afterEach((html: string) => {
        // 查找所有包含 Excalidraw 标记的元素
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgs = doc.querySelectorAll('img[src$=".excalidraw"]');
        imgs.forEach((img) => {
            const src = img.getAttribute('src');
            const dataOrigin = img.getAttribute('data-origin');
            if (dataOrigin) {
                const div = doc.createElement('div');
                const id = nanoid()
                div.setAttribute('id', id)
                div.setAttribute('data-origin', dataOrigin);
                div.setAttribute('src', src!);
                const root = createRoot(div);

                root.render(
                    <StrictMode>
                        <Excaildraw2svg file={src || dataOrigin} onRenderComplete={() => {
                            document.getElementById(id)!.innerHTML = div.innerHTML;
                        }}/>
                    </StrictMode>,
                )
                img.replaceWith(div);
            }
        });
        return doc.body.innerHTML;
    });
}


export {docsifyPluginExcalidraw}