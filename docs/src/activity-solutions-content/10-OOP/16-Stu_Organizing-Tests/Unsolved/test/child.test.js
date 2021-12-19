const Child = require('../child');

describe('Child', () => {
  describe('Initialization', () => {
    it('should create an object with a name and age if provided valid arguments', () => {
      const child = new Child('Sarah', 3);

      expect(child.name).toEqual('Sarah');
      expect(child.age).toEqual(3);
    });
  });

  describe('Validation', () => {
    it('should throw an error if provided no arguments', () => {
      const cb = () => new Child();

      expect(cb).toThrow();
    });

    it('should throw an error if name is an empty string', () => {
      const cb = () => new Child('', 3);

      const expectedError = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(expectedError);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);

      const expectedError = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(expectedError);
    });

    it('should throw an error if not provided an age', () => {
      const cb = () => new Child('Sarah');

      const expectedError = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(expectedError);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child('Sarah', '2');

      const expectedError = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(expectedError);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child('Sarah', -1);

      const expectedError = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(expectedError);
    });
  });
});
