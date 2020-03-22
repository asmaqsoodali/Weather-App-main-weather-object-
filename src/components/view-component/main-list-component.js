import React from 'react';


const MainComponent = (props) =>{
    let { storeData } = props;

    let mainObject = storeData.map(item =>{
        return item.main
    })
    console.log("mainObject",mainObject);
    return(
        <>
          
            <table className="main-table">
                <thead>
                    <tr>
                        <th>Temp</th>
                        <th>feels like</th>
                        <th>temp min</th>
                        <th>temp max</th>
                        <th>pressure</th>
                        <th>sea level</th>
                        <th>ground level</th>
                        <th>humidity</th>
                    </tr>
                </thead>
                {mainObject!==undefined &&
                    <tbody>
                        {mainObject.map((item,index)=>{
                            return (
                                <tr key={`${index}+${item.pressure}`}>
                                    <td>{`${Math.floor(item.temp-273.15)} deg`} </td>
                                    <td>{`${Math.floor(item.feels_like-273.15)} deg`} </td>
                                    <td>{`${Math.floor(item.temp_min-273.15)} deg`}</td>
                                    <td>{`${Math.floor(item.temp_max-273.15)} deg`}</td>
                                    <td>{item.pressure}</td>
                                    <td>{item.sea_level}</td>
                                    <td>{item.grnd_level}</td>
                                    <td>{item.humidity}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                  
                  }
           </table>
          
        </>
    )
}

export default MainComponent;