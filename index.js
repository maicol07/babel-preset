module.exports = () => ({
    presets: [
        ["@babel/preset-env", {
            targets: "defaults",
            modules: false,
            loose: true
        }],
        ["@babel/preset-flow", {
            all: true
        }]
    ],
    plugins: [
        ["@babel/plugin-transform-runtime", { useESModules: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        [
            "@babel/plugin-transform-react-jsx",
            {
                pragma: "m",
                pragmaFrag: "'['",
                useBuiltIns: true
            }
        ]
    ]
});
