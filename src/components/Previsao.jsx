import React from 'react';
import {PrevisaoContainer} from "./PrevisaoStyles.js";

const Previsao = ({previsoes}) => {
    return (
        <PrevisaoContainer>
            <h4>Previsão para as proximas horas</h4>
            <ul>
                {previsoes.map((previsao) => (
                    <li key={previsao.dt}>
                        <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`} alt=""/>
                        <p>{previsao.main.temp}°C - {previsao.weather[0].description.toUpperCase()}</p>
                    </li>
                ))}
            </ul>
        </PrevisaoContainer>
    );
};

export default Previsao;