import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {BASE_URL} from "../../Constants/url"
import { Card, CardImg } from "./Style";
import GlobalContext from "../../Contexts/GlobalContext";
import { goToDetails } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, pokemon, addPokedex }) {
  const navigate = useNavigate();
  const [photoPokemon, setPhotoPokemon] = useState([]);
  const { setPokedex } = useContext(GlobalContext);

  const getInfoPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${name}`);
      setPhotoPokemon(res.data.sprites.front_default);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfoPokemon();
  }, []);

  return (
    <Card>
      <div onClick={() => goToDetails(navigate, name)}>
        <CardImg src={photoPokemon} />
        <p>{name}</p>
      </div>
      <button onClick={() => addPokedex(pokemon, setPokedex)}>
        Adicionar a Pokedex
      </button>
    </Card>
  );
}