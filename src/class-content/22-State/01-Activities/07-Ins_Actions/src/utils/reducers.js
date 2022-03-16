import { useReducer } from 'react';
import { ADD_CAR, REMOVE_CAR, START_CAR, STOP_CAR } from '../utils/actions';

const randomNum = () => Math.floor(Math.random() * 20);

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CAR: {
      const newID = randomNum();
      const newCar = { ...action.payload, id: newID };

      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    }
    case REMOVE_CAR: {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    case START_CAR: {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      const updatedCar = { ...state.cars[carIndex], isRunning: true };

      const carsCopy = [...state.cars];
      carsCopy[carIndex] = updatedCar;

      return {
        ...state,
        cars: carsCopy,
      };
    }
    default: {
      return state;
    }
  }
}
