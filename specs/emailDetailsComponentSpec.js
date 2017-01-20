
describe('email details component', function () {

	beforeEach(module('emailApp'));

	var $componentController
	beforeEach(inject(function ($injector) {
		$componentController = $injector.get('$componentController')
	}))

	it('should start with html true', function () {

		testScope = {}

		var ctrl = $componentController('emailDetails', {
			$scope: testScope
		});

		expect(testScope.html).toBe(true)
	});

	it('should change html on false on toggleText', function () {

		testScope = {};

		var ctrl = $componentController('emailDetails', {
			$scope: testScope
		});

		testScope.toggleText();

		expect(testScope.html).toBe(false);
	});

	it('should change html to true on toggleHtml', function () {
		testScope = {};

		var ctrl = $componentController('emailDetails', {
			$scope: testScope
		});

		testScope.toggleText();
		testScope.toggleHtml();

		expect(testScope.html).toBe(true);
	})
})