/// <reference path="qunit.d.ts" />
/// <reference path="../_out/merged.d.ts" />

QUnit.module("mathLib");

test("will add 5 to number", function() {
	var res: number = mathLib.add5(10);

	equal(res, 15, "should add 5");
});
