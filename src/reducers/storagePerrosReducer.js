/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  perrosRandom: [],
  perrosFavoritos: [],
};

export const storagePerrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadPerrosRandom:
      return {
        ...state,
        perrosRandom: [...state.perrosRandom, ...action.payload],
      };
    case types.loadFavorites:
      return { ...state, perrosFavoritos: [...action.payload] };
    default:
      return state;
  }
};

export const getPerrosRandom = (state) => state.storagePerros.perrosRandom;
export const getPerrosFavoritos = (state) => state.storagePerros.perrosFavoritos;
