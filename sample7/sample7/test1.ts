﻿QUnit.module("Test Suite 1");
QUnit.test("Test A", (assert) => {
    assert.ok(true, "This shouldn't fail");
});

QUnit.test("Test B", (assert) => {
    assert.ok(1 === 1, "This shouldn't fail");
    assert.ok(false, "This should fail");
});