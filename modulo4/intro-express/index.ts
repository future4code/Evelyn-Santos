import express from "express";
import cors from "cors";

import { AddressInfo } from "net";

const app = express();
app.use(cors());



app.use(express.json());


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar o servidor`);
  }
});;

app.get('/', (req, res) => {
  console.log('Teste')
  res.send('Ok').status(200)
})

app.listen(3003, () => {
    console.log("Servidor funcionando!")
});



// type Users = {
//   id: number,
//   username: string,
//   phone: string,
//   email: string,
//   website: string
// }[]

// const users: Users = [
//   {
//     id: 1,
//     username: 'Leanne Graham',
//     phone: '1-770-736-8031 x56442',
//     email: 'Sincere@april.biz',
//     website: 'hildegard.org'
//   },
//   {
//     id: 2,
//     username: 'Ervin Howell',
//     phone: '010-692-6593 x09125',
//     email: 'Shanna@melissa.tv',
//     website: 'anastasia.net'
//   },
//   {
//     id: 3,
//     username: 'Clementine Bauch',
//     phone: '1-463-123-4447',
//     email: 'Nathan@yesenia.net',
//     website: 'ramiro.info'
//   }
// ]

// app.get('/users', (req, res) => {
//   const currentUsers = users
//   const getUsers = currentUsers.map((user) => {
//     return user
//   })
//   const result = getUsers
//   res.status(200).send(result)

// })

// type Posts = {
//   id: number,
//   userId: number
//   title: string,
//   body: string,
// }[]

// const post: Posts = [
//   {
//     id: 1,
//     userId: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//   },
//   {
//     id: 1,
//     userId: 2,
//     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//     body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
//   },
//   {
//     id: 3,
//     userId: 3,
//     title: 'magnam facilis autem',
//     body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
//   }
// ]

// app.get('/posts',( req, res)=>{
//   const currentPosts = post
//   const getPosts = currentPosts.map((posts) => {
//     return posts
//   })
//   const result = getPosts
//   res.status(201).send(result)
// })

// app.get('/posts/:id', (req, res)=>{
//   const userId = Number(req.params.id)
//   const postUser:Posts = post.filter((p)=>{
//     if(userId == p.userId){
//       return p
//     }
//   })
//   res.status(200).send(postUser)
// }) 