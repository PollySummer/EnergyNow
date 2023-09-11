import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { ELECTR, PERIODS } from "../Body/consts";
//redux - то же самое состояние, как в реакте useState. Только работает как отдельное облако.
//Благодаря ему мы можем перредавать данные в другие компоненты, которые находятся в другой ветке.
// не затрагивая связные компоненты

//изначальное состояние
const initialState = {
    electricityPrice: null,
    gasPrice: null,
    activeEnergy: ELECTR,
    selectedPeriod: PERIODS[0].value,
    gasCurrentPrice: 0,
    errorMessage: null,
}

//изменение состояния в редакс это actions.
export const setElectricityPrice = createAction('setElectricityPrice');
export const setGasPrice = createAction('setGasPrice');
export const setActiveEnergy = createAction('setActiveEnergy');
export const setSelectedPeriod = createAction('setSelectedPeriod');
export const setGasCurrentPrice = createAction('setGasCurrentPrice');
export const setErrorMessage = createAction('setErrorMessage');

//в редакс само изменение, которое должно произойти, мы сами описываем в reducer.
//то есть, переназначение состояния.
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setElectricityPrice, (state, action) => {
            //reducer - ф-ция, которая запускается при инициализации action
            //reducer принимает в себя 2 аргумента
            //1 - Все нынешнее состояние
            //2 - информация из action. Что является объектом с двумя свойствами:
            //2.1 - type - тип/название actiona
            ///2.2 - payload - инфа (напр. createAction('setErrorMessage')), которую мы передали в action
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

//создаем облачко для хранения данных (все о состоянии) и назыв. store
export const store = configureStore({ reducer });