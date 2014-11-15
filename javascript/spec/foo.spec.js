describe("foo", function() {
  var fooModule = require('../src/foo');
  var foo;

  describe("bar", function() {
    beforeEach(function() {
      foo = fooModule.create();
    });

    it("does nothing", function() {
      expect(foo.bar()).toBe("");
    });
  });
});
