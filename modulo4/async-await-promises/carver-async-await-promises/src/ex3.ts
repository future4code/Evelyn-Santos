import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
  title: "cachorro morde homem",
  content: "No bairro Silveira, na noite de ontem...",
  date: Date.now()
}

const createNews = (news: any) => {
  return axios.put(`${baseURL}/news`, news)
}

const getAllSubscribers = () => {
  return axios
    .get(`${baseURL}/subscribers`)
    .then(res => res.data)
}

const getSubscribersIds = (subscribers: any) => {
  return subscribers.map((subscriber: any) => {
    return subscriber.id
  })
}

const notifyAllSubscribers = (ids: string[]) => {

  for (let id of ids) {
    axios
      .post(`${baseURL}/notifications`, {
        subscriberId: id,
        message: "Confira as últimas notícias de Belo Horizonte"
      })
      .then(() => { console.log(`Notificação enviada para ${id}`) })
      .catch(() => { console.log(`Erro ao notificar ${id}`) })
  }
}

createNews(news)                // criar noticia
  .then(getAllSubscribers)      // buscar assinantes
  .then(getSubscribersIds)      // extrair id's (etapa síncrona)
  .then(notifyAllSubscribers)   // enviar notificacoes
  .catch(err => err.response?.data || err.message)    // tratamento de erros
  .then(console.log)