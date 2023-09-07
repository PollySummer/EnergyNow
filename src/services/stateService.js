import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { ELECTR, PERIODS } from "../Body/consts";

const initialState = {
    electricityPrice: null,
    gasPrice: null,
    activeEnergy: ELECTR,
    selectedPeriod: PERIODS[0].value,
    gasCurrentPrice: 0,
    errorMessage: null,
}

export const setElectricityPrice = createAction('setElectricityPrice');
export const setGasPrice = createAction('setGasPrice');
export const setActiveEnergy = createAction('setActiveEnergy');
export const setSelectedPeriod = createAction('setSelectedPeriod');
export const setGasCurrentPrice = createAction('setGasCurrentPrice');
export const setErrorMessage = createAction('setErrorMessage');

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setElectricityPrice, (state, action) => {
            state.electricityPrice = action.payload;
        })
        .addCase(setGasPrice, (state, action) => {
            state.gasPrice = action.payload;
        })
        .addCase(setActiveEnergy, (state, action) => {
            state.activeEnergy = action.payload;
        })
        .addCase(setSelectedPeriod, (state, action) => {
            state.selectedPeriod = action.payload;
        })
        .addCase(setGasCurrentPrice, (state, action) => {
            state.gasCurrentPrice = action.payload;
        })
        .addCase(setErrorMessage, (state, action) => {
            state.errorMessage = action.payload;
        })
});

//создаем облачко для хранения данных
export const store = configureStore({ reducer });