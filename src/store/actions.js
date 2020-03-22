import axios from 'axios';

export const RECEIVE_WEATHER_REPORT = 'RECEIVE_WEATHER_REPORT';
export const API_ERROR = 'API_ERROR';

export const receiveWeatherReport = data => {
    const weatherdata = data;
    const action ={
        type :RECEIVE_WEATHER_REPORT,
        payload :weatherdata
    }
    return action
}

export const weatherReportFailed = error =>{
    const action = {
        type:API_ERROR,
        payload: error
    }
    return action
}
const URL = "http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=416f21735638892910fc788dbd92dc24";

export const fetchWeatherReport=()=> {
    return dispatch => {
      return axios.get(URL)
        .then(({ data }) => {
            console.log("fetched data:::",data);
            
            if(data.cod==200){
                dispatch(receiveWeatherReport(data));
                console.log("data in success",data);
            }
            else{
                dispatch(weatherReportFailed(data.message));
                console.log("data.status",data.message);
            }
        })
        .catch(error => {
            console.log("error in catch",error);
            dispatch(weatherReportFailed(error));
      });
    };
  }
