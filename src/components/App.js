import React,{Component} from 'react';
import {connect} from 'react-redux';
import { fetchWeatherReport } from '../store/actions';

import HeaderComponent from './header-component/header-component'
import MainComponent from './view-component/main-list-component';
import WeatherComponent from './view-component/weather-list-component';
import './App.css';

class App extends Component{

    constructor(props) {
        super(props);
        this.props.fetchWeatherReport();
        this.state ={
            selectedView: null,
            selectedTab: "main",

        }
    }
   
    setView = ( view ) =>{
        this.setState({
            selectedTab:view,
            selectedView: view
        })
    }

    renderView = () =>{
        let {selectedView} = this.state;
        let { weatherData } = this.props;
        switch(selectedView){
            case "main":
                return <MainComponent storeData={weatherData}/>
            case "weather":
                return <WeatherComponent storeData={weatherData}/>
            default:
                return <MainComponent storeData={weatherData}/>
        }
    }
    render(){

        const { weatherData, city, error } = this.props;
        const { selectedTab } = this.state;
       
        return(
                <div className="container App">

                    <HeaderComponent/>
                    
                    {weatherData.length > 0 ? 
                    
                        <>
                        
                            <ul className="basic-info-list">
                                <li 
                                    className="city">
                                    City : {city}
                                </li>
                            </ul>
                            <ul className="weather-tab">
                                <li 
                                    onClick={(e)=>this.setView('main')} 
                                    className={`${selectedTab=="main" ? "active" :""}`}
                                    >
                                    Main data
                                </li>
                                <li 
                                    onClick={(e)=>this.setView('weather')} 
                                    className={`${selectedTab=="weather" ? "active":""}`}
                                    >
                                    Weather data
                                </li>
                            </ul>

                            <div className="table-container">
                                {this.renderView()}
                            </div> 
                            </> 
                        
                        : <div> { error !== null ? <div className="error">There is some issue connecting Server / API, <span> {`${error}`}</span> </div> : <div className="loading">...Loading</div> }</div>
                    }
           </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        weatherData: state.list,
        city: state.city.name,
        error:state.error,
    }
}

export default connect(mapStateToProps,{fetchWeatherReport})(App);
