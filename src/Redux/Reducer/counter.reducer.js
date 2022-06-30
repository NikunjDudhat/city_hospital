import * as ActionType from '../ActionType'


const initialState = {
    count : 0
}

export const CounterReducer = (state= initialState, action) => {
    switch(action.type){
        case ActionType.INCREMENT_COUNTER : 
            return {
                ...state,
                count : state.count + 1
            }
        case ActionType.DECREMENT_COUNTER : 
            return {
                ...state,
                count : state.count - 1
            }            
        default : 
            return state;
    }

}