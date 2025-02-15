import {Excalidraw, exportToSvg, loadSceneOrLibraryFromBlob, MIME_TYPES} from "@excalidraw/excalidraw";

import {useEffect, useRef, useState} from "react";
import {ExcalidrawImperativeAPI, ExcalidrawInitialDataState} from "@excalidraw/excalidraw/types/types";


interface Excaildraw2svgProps {
    file: string;
    onRenderComplete?: () => void;
}

function Excaildraw2svg({file, onRenderComplete}: Excaildraw2svgProps) {


    const [
        excalidrawAPI,
        setExcalidrawAPI
    ] = useState<ExcalidrawImperativeAPI | null>(null);
    //tslint:disable-next-line
    const appRef = useRef<any>(null);
    const [initialData, setInitialData] = useState<ExcalidrawInitialDataState | null>(null);


    const exportToSVG = async () => {
        if (!excalidrawAPI) {
            return;
        }
        const svg = await exportToSvg({
            elements: excalidrawAPI?.getSceneElements(),
            appState: {
                ...initialData?.appState,
            },
            files: excalidrawAPI?.getFiles()
        });
        appRef.current.querySelector(".export-svg").innerHTML = svg.outerHTML;
        if (onRenderComplete) {
            onRenderComplete();
        }
    };

    const fetchFile = async (file: string) => {
        try {
            const response = await fetch(file);
            const blob = await response.blob();
            const contents = await loadSceneOrLibraryFromBlob(blob, null, null);
            if (contents.type === MIME_TYPES.excalidraw) {
                setInitialData(contents.data)
            }
        } catch (error) {
            console.error("Failed to fetch file:", error);
        }
    };

    useEffect(() => {
        fetchFile(file);
    }, [file])

    useEffect(() => {
        exportToSVG();
    }, [excalidrawAPI]);

    return (
        <>
            <div ref={appRef}>
                <div className="export-svg"></div>
                <div>
                    {initialData &&
                        <Excalidraw initialData={initialData}
                                    excalidrawAPI={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}/>}
                </div>
            </div>
        </>
    );
}

export default Excaildraw2svg
