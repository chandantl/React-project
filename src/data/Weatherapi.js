import React from 'react'
import axios from 'axios'

const baseurl = 'http://api.openweathermap.org/data/2.5/weather?';
const apikey ='748a514ca06b518331bbd7c15eea6083';

export const getWeatherData = async (cityname) => {
    try{
         const {data} = await axios.get(baseurl + `q=${cityname}&appid=${apikey}`)
         return data;  
    }catch(error){

        throw error;
    }
}