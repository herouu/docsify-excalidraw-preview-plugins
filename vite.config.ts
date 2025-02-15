import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((mode) => {
        return {
            plugins: [react()],
            define: {
                "process.env.IS_PREACT": JSON.stringify("true"),
                'process.env.NODE_ENV': JSON.stringify(mode.mode)
            },
            build: {
                lib: {
                    entry: 'src/index.ts', // 插件入口文件
                    name: 'docsifyPluginExcalidraw', // 插件名称
                    formats: ['umd'], // 打包格式，这里选择 UMD 格式，方便在不同环境使用
                    fileName: () => `docsify-excalidraw-preview-plugin.js`
                },
                rollupOptions: {
                    // 确保外部化处理那些你不想打包进库的依赖
                    external: [],
                    output: {
                        // 在 UMD 构建模式下为这些外部化的依赖提供全局变量
                        globals: {}
                    }
                }
            }
        }
    }
)
