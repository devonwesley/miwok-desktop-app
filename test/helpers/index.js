import chai from 'chai';
import jest from 'jest';

function describeTest(message, callback) {
  describe(message, function() {
    callback();
  });
}

function itShould(message, callback) {
  it(message, function() {
    callback();
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
