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