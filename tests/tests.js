/**
 * Created by jhershey on 2/27/14.
 */


var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('should have mocha installed and running', function () {
        assert(true, true);
    });
    it('should have the should library installed and running for fluent testing', function () {
        true.should.equal(true);
    });
});

describe('Asynchronous testing', function () {

    var result = false;

    beforeEach(function (done) {
        setTimeout(function () {
            result = true;
            done();
        }, 2000);
    });

    it('should not be so hard so this makes it easier', function () {
        result.should.equal(true);
    });

    it('should not be so and so');

});