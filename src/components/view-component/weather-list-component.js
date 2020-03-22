import React from 'react';


const WeatherComponent = (props) =>{

    let { storeData } = props;
       
    let weatherObject = storeData.map(item =>{
        return item.weather
    })

    return(
        <>
            <table className="weather-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Main</th>
                            <th>Description</th>
                            <th>Icon</th>
                        </tr>
                    </thead>
                    {weatherObject!==undefined &&
                        <tbody>
                            {weatherObject.map(item=>{
                                return(item.map((nestedItem,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{nestedItem.id}</td>
                                            <td>{nestedItem.main}</td>
                                            <td>{nestedItem.description}</td>
                                            <td><img src ={`http://openweathermap.org/img/w/${nestedItem.icon}.png`} alt="wthr img" /></td>
                                        </tr>
                                        )
                                    })
                                )})
                            }
                        </tbody>
                    }
                </table>
        </>
    )
}

export default WeatherComponent;