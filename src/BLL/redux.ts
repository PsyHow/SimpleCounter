import { combineReducers, createStore } from "redux";
import { CounterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const Store = createStore(rootReducer)

//types
export type AppStateType = ReturnType<typeof rootReducer>

