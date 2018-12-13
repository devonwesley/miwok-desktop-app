import chai from 'chai';
import jest from 'jest';

function describeTest(message, callback) {
  /** eslint no-undef: "error" */
  describe(message, function () { /** eslint-disable-line no-undef prefer-arrow-callback */
    return callback();
  });
}

function itShould(message, callback) {
  it(message, function () { /** eslint-disable-line no-undef prefer-arrow-callback */
    return callback(); 
  });
}

export default {
  should: chai.should,
  expect: chai.expect,
  assert: chai.assert,
  use: chai.use,
  ...jest,
  describeTest,
  itShould,
};
