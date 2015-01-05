# Jasmine Promise Helpers

## Descriptions

Tiny module to make writing tests with jasmine 1.3 a little easier when using
promises (actually, jQuery deferreds).

## Installation

npm install --save-dev jasmine-promise-helpers

## Using

```
var P = require('jasmine-promise-helpers');
describe('my test', function() {
	beforeEach(function() {
		spyOn(MyModule, 'myFunction').andCallFake(_(P.resolveDummyPromiseAsync).partial(42));
		spyOn(MyModule, 'myOtherFunction').andCallFake(P.rejectDummyPromiseAsync);
		runsAndWaitsFor(MyModule.testIt);
	});
	it('should call my async function', function() {
		expect(MyModule.myFunction).toHaveBeenCalled();
	});
});
