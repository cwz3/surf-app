import React, { useState, useEffect } from 'react';

var d = new Date();



function Wave(){
    const[swell,setSwell] = useState(null);
    const[swell2,setSwell2] = useState(null);
    const[swell3,setSwell3] = useState(null);

    function convert(num){
        if (350<num || num<10) return "N";
        if (10<=num<=80) return "NW";
        if (80<num<100) return "E";
        if (100<=num<=170) return "SE";
        if (170<num<190) return "S";
        if (190<=num<=260) return "SW";
        if (260<num<280) return "W";
        else return "NW";
    }
    
    
    useEffect(async () =>{
        const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=21.275767&lng=-157.827374&params=swellHeight,swellDirection,swellPeriod&key=947985f0-4e3b-11eb-a422-0242ac130002-947986ea-4e3b-11eb-a422-0242ac130002`);
        const data = await response.json();
        const [item] = data.hours;
        setSwell(item);

        const response2 = await fetch(`https://api.stormglass.io/v2/weather/point?lat=20.949508&lng=-156.296597&params=swellHeight,swellDirection,swellPeriod&key=947985f0-4e3b-11eb-a422-0242ac130002-947986ea-4e3b-11eb-a422-0242ac130002`);
        const data2 = await response2.json();
        const [item2] = data2.hours;
        setSwell2(item2);

        const response3 = await fetch(`https://api.stormglass.io/v2/weather/point?lat=37.487596&lng=-122.500661&params=swellHeight,swellDirection,swellPeriod&key=947985f0-4e3b-11eb-a422-0242ac130002-947986ea-4e3b-11eb-a422-0242ac130002`);
        const data3 = await response3.json();
        const [item3] = data3.hours;
        setSwell3(item3);
    },[]);

    return (
        <div className="Wave">
            <main>
                <div className="wave-box-left">
                    Mavericks

                {swell3 &&<div className="info">
                    {swell3.swellHeight.noaa}ft at {swell3.swellPeriod.noaa}s
                    {"\n"}
                    {convert(swell3.swellDirection.noaa)}
                    
            </div>}
                
                </div>

                <div className="wave-box-center">
                    Queens/Canoes
                
                {swell &&<div className="info">
                        {swell.swellHeight.noaa}ft at {swell.swellPeriod.noaa}s
                        {"\n"}
                        {convert(swell.swellDirection.noaa)}
                        
                </div>}
                
                </div>

                <div className="wave-box-right">
                    Jaws
                    {swell2 &&<div className="info">
                        {swell2.swellHeight.noaa}ft at {swell2.swellPeriod.noaa}s
                        {"\n"}
                        {convert(swell2.swellDirection.noaa)}
                </div>}
                </div>
            </main>
        </div>
    )
}
export default Wave;