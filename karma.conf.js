// exports.config = {
//     reporters: ['junit'],
//     junitReporter: {
//         outputDir: process.env.JUNIT_REPORT_PATH,
//         outputFile: process.env.JUNIT_REPORT_NAME,
//         useBrowserName: false
//     },
// };

// module.exports = function(config) {
//     config.set({
//         reporters: ["junit"],
//         frameworks: ["jasmine-jquery" ,"jasmine"],
//         plugins: [
//             "karma-jasmine",
//             "karma-junit-reporter"
//         ],
//         junitReporter: {
//             outputDir: process.env.JUNIT_REPORT_PATH,
//             outputFile: process.env.JUNIT_REPORT_NAME,
//             useBrowserName: false
//         },
//         autoWatch: true
//     });
// };

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, '../coverage/example'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      // updated
      browsers: ['ChromeHeadless'],
      // new
      customLaunchers: {
        'ChromeHeadless': {
          base: 'Chrome',
          flags: [
            '--no-sandbox',
            '--headless',
            '--disable-gpu',
            '--remote-debugging-port=9222'
          ]
        }
      },
      singleRun: false,
      restartOnFileChange: true
    });
};