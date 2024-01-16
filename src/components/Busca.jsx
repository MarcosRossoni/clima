import React from 'react';
import {BotaoBuscar, BuscaCidade, BuscaContainer} from "./BuscaStyles.js";

const Busca = ({cidade, setCidade, buscarClima}) => {
    return (
        <BuscaContainer>
            <div>
                <BuscaCidade type="text"
                       value={cidade}
                       onChange={(e) => setCidade(e.target.value)}
                       placeholder="Digite uma cidade..."/>
                <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
            </div>
        </BuscaContainer>
    );
};

export default Busca;