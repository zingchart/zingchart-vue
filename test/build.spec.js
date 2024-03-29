const utils = require('./utils.js');
const chai = require('chai');
chai.use(require('chai-fs'));

// server/controllers/api/card.js
describe('Build', function() {

  describe('dist/ files exist', function() {
    // verify the ZingChart object exists
    it(`zingchartVue.cjs.js file should exist`, async function() {
      let vueDistFilePath = 'dist/zingchartVue3.cjs.min.js';
      expect(vueDistFilePath).to.be.a.path();
    });
    it(`zingchartVue.umd.js file should exist`, async function() {
      let vueDistFilePath = 'dist/zingchartVue3.umd.min.js';
      expect(vueDistFilePath).to.be.a.path();
    });
  });
});
