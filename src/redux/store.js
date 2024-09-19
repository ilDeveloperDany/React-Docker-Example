import {configureStore} from '@reduxjs/toolkit'
import {counterReducer} from './counterSlice'
import {citiesReducer} from './citiesSlice'
import { peopleReducer } from './peopleSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        cities: citiesReducer,
        people: peopleReducer
    },
})