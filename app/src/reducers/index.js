import { FETCH_TEAM_START, FETCH_TEAM_SUCCESS } from '../actions';

const initialState = {
    teams: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TEAM_START: 
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case FETCH_TEAM_SUCCESS:
            return {
            ...state,
                teams: action.payload,
                isLoading: false,
                
            }
            
        default: 
            return state;
    }
}