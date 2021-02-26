import vite from 'vite';

async function main() {
	const server = await vite.createServer();
	const mod = await server.ssrLoadModule('src/index.js');

	try {
		mod.foo();
	} catch (e) {
		console.log(`stack before: ${e.stack}`);
		server.ssrFixStacktrace(e);
		console.log(`stack after: ${e.stack}`);
	}
}

main();