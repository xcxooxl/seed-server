const defaultEnv = {
	MY_TOKEN: "xxxxxxxxxxxxxxxx",
};

const appConfig = new Proxy(defaultEnv, {
	get(target, p) {
		return process.env[p] || target[p];
	},
});

export default appConfig;
