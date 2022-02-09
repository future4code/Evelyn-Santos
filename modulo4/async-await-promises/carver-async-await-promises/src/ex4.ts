import axios from "axios"
import { baseURL } from "./baseURL"


// Exercício 4

//a)
//Não retorna nada para o usuário, ele apenas posta.

type News = {
  title: string;
  content: string;
  date: number;
};

const news: News = {
  title: 'Teste',
  content:'Teste',
  date: Date.now(),
};

const createNews = async (news: News): Promise<void> => {
  return axios.put(`${baseURL}/news`, news);
};

const main = async (): Promise<void> => {
  try {
    createNews(news);
  } catch (error) {
    console.log('erro');
  }
};

main();