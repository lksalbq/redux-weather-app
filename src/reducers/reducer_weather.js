import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action){

	switch(action.type){
		case FETCH_WEATHER:
			//important never mutate the state like push, plus what ever
			// return state.concat([action.payload.data]);
			return action.payload.cod === "404" ?   state : [action.payload.data, ...state] ;
	}
	return state;
}