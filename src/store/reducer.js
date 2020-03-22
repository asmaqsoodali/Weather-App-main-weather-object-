import { RECEIVE_WEATHER_REPORT, API_ERROR } from './actions';

const initialState = {
    list: [],
    city: {
        name:""
    },
    error: null,
};


const weatherReportReducer = (state = initialState, action) => {

    switch(action.type){
        case RECEIVE_WEATHER_REPORT:
            return {...state, list:action.payload.list,city:{name:action.payload.city.name}}
        case API_ERROR:
            return {...state,error:action.payload}
        default:
        return state;
  }
}

export default weatherReportReducer;