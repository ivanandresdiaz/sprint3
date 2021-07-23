/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  perrosRandom: [],

};

export const storagePerrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadPerrosRandom:
      return {
        ...state,
        perrosRandom: [...state.perrosRandom, action.payload],
      };
    default:
      return state;
  }
};

export const getPerrosRandom = (state) => state.storagePerros.name;
