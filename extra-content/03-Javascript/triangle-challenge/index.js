const isValidTriangle = function (side1, side2, side3) {
  if (
    side1 + side2 > side3 &&
    side2 + side3 > side1 &&
    side3 + side1 > side2 &&
    side1 > 0 &&
    side2 > 0 &&
    side3 > 0
  ) {
    return true;
  } else {
    return false;
  }
};

const isEquilateral = function (side1, side2, side3) {
  if (side1 === side2 && side2 === side3 && side3 === side1) {
    return true;
  } else {
    return false;
  }
};

const isIsosceles = function (side1, side2, side3) {
  if (side1 === side2 || side2 === side3 || side3 === side1) {
    return true;
  } else {
    return false;
  }
};

const isScalene = function (side1, side2, side3) {
  if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
    return true;
  } else {
    return false;
  }
};

const triangle = function (side1, side2, side3) {
  // check if all 3 sides are valid

  if (isValidTriangle(side1, side2, side3)) {
    // check if equilateral
    if (isEquilateral(side1, side2, side3)) {
      console.log('EQUILATERAL Triangle');
      return;
    }

    // check if isosceles
    if (isIsosceles(side1, side2, side3)) {
      console.log('ISOSCELES Triangle');
      return;
    }

    // check if scalene
    if (isScalene(side1, side2, side3)) {
      console.log('SCALENE Triangle');
      return;
    }
  } else {
    // display message
    console.log('Is not a triangle');
    return;
  }
};

// scalene triangle
triangle(6, 8, 10);

// equilateral triangle
triangle(6, 6, 6);

// isosceles triangle
triangle(6, 6, 10);

// not a triangle
triangle(6, 80, 10);

// not a triangle
triangle(-6, -80, 10);
