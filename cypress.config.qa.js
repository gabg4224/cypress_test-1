const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    user_mail: process.env.CYPRESS_user_mail,
    user_password: process.env.CYPRESS_user_password
  },
  e2e: {
    baseUrl: process.env.baseUrl || "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

});
