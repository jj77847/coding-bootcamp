const DayCare = require('../dayCare');
const Child = require('../child');

describe('DayCare', () => {
  describe('Initialization', () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      expect(dayCare.children).toEqual([]);
      expect(dayCare.capacity).toEqual(3);
      expect(dayCare.ageLimit).toEqual(6);
    });
  });

  describe('addChild', () => {
    it("should add a child to the 'children' array", () => {
      const child = new Child('Tammy', 1);
      const dayCare = new DayCare();

      expect(dayCare.children.length).toEqual(0);

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(1);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child('Tammy', 8);
      const dayCare = new DayCare();

      expect(dayCare.children.length).toEqual(0);

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(0);
    });

    it('should not add a child if already at capacity', () => {
      const child1 = new Child('Alice', 4);
      const child2 = new Child('Tammy', 1);
      const child3 = new Child('Mark', 2);
      const child4 = new Child('Alvin', 1);

      const dayCare = new DayCare();

      expect(dayCare.children.length).toEqual(0);

      dayCare.addChild(child1);
      dayCare.addChild(child2);
      dayCare.addChild(child3);

      expect(dayCare.children.length).toEqual(3);

      dayCare.addChild(child4);

      expect(dayCare.children.length).toEqual(3);
    });

    it('should throw an error if not provided a Child object as an argument', () => {
      const expectedError = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      expect(cb).toThrowError(expectedError);
    });
  });

  describe('pickupChild', () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const child1 = new Child('Tammy', 1);
      const child2 = new Child('Mark', 2);
      const child3 = new Child('Alvin', 1);

      const dayCare = new DayCare();

      dayCare.addChild(child1);
      dayCare.addChild(child2);
      dayCare.addChild(child3);

      expect(dayCare.children.length).toEqual(3);

      const removed = dayCare.pickupChild('Mark');

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const child1 = new Child('Tammy', 1);
      const child2 = new Child('Mark', 2);
      const child3 = new Child('Alvin', 1);

      const dayCare = new DayCare();

      dayCare.addChild(child1);
      dayCare.addChild(child2);
      dayCare.addChild(child3);

      expect(dayCare.children.length).toEqual(3);

      const removed = dayCare.pickupChild('Fred');

      expect(typeof removed).toEqual('undefined');

      expect(dayCare.children.length).toEqual(3);
    });
  });
});
