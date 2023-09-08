import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	build: {
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: false,
			},
		},
	},
	server: {
		port: 2223,
		strictPort: true,
		open: true,
		proxy: {
			"/api": {
				target: "http://jsonplaceholder.typicode.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
