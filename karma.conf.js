// exports.config = {
//     reporters: ['junit'],
//     junitReporter: {
//         outputDir: process.env.JUNIT_REPORT_PATH,
//         outputFile: process.env.JUNIT_REPORT_NAME,
//         useBrowserName: false
//     },
// };

module.exports = function(config) {
    config.set({
        reporters: ["junit"],
        frameworks: ["jasmine-jquery" ,"jasmine"],
        plugins: [
            "karma-jasmine",
            "karma-junit-reporter"
        ],
        junitReporter: {
            outputDir: process.env.JUNIT_REPORT_PATH,
            outputFile: process.env.JUNIT_REPORT_NAME,
            useBrowserName: false
        },
    });
};
