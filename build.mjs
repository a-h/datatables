import { build } from 'esbuild'

const options = {
	entryPoints: ['./src/index.ts'],
	outfile: './dist/index.js',
	globalName: 'index',
	minify: true,
	bundle: true,
	define: {
		'process.env.HOST_NAME': '"localhost:8080"'
	},
}

build(options).catch(() => process.exit(1))
