import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import Excaildraw2svg from './excaildraw2svg.tsx'

const file = "/src/diy.excalidraw"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Excaildraw2svg file={file} onRenderComplete={() => console.log('over')}/>
    </StrictMode>,
)
