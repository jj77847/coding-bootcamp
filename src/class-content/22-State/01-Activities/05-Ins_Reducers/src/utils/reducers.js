const randomNum = () => Math.floor(Math.random() * 20);

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAR': {
      const newID = randomNum();
      const newCar = { ...action.payload, id: newID };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    case 'REMOVE_CAR': {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
