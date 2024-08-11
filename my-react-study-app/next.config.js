export default {
    reactStrictMode: true,
    swcMinify: true,

    webpack(config) {
        config.module.rules.push({
            test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
            type: 'asset/resource',
        });

        return config;
    },
};
