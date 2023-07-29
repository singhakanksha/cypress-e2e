const { defineConfig } = require("cypress");

const cypressRunEnv = process.env.cypress_run_env;

// Set the base URL based on the value of "cypress_run_env"
let baseUrl;
switch (cypressRunEnv) {
  case 'test':
    baseUrl = 'http://zero.webappsecurity.com/index.html';
    break;
  case 'dev':
    baseUrl = 'http://zero.webappsecurity.com/index.html';
    break;
  case 'prod':
    baseUrl = 'http://zero.webappsecurity.com/index.html';
    break;
  default:
    baseUrl = 'http://zero.webappsecurity.com/index.html'; // Default base URL if the value is not recognized
}

module.exports = defineConfig({
  projectId: "mgf7ee",
  e2e: {
    baseUrl: baseUrl,
    // watchForFileChanges: false, //by default true
    viewportHeight: 800, // in pixels
    viewportWidth: 1280, // in pixels
    waitForAnimations: true,
    animationDistanceThreshold: 20, // this is the number of pixels by which the object should move to consider in animation
    defaultCommandTimeout: 5000 , // defualt 4000
    execTimeout: 60000, // 1 min - cy.exec generally take a little longer
    pageLoadTimeout: 60000,
    requestTimeout: 15000,// 15 sec wait for xhr to timeout
    responseTimeout: 15000,// 15 sec wait for xhr to timeout
    video: false, // should record video in headless mode or not
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
