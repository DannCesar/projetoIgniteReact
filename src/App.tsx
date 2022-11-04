
import { Header } from './components/Header'
import {Post} from './components/Post'
import styles from './App.module.css'
import  './global.css'
import { Sidebar } from './components/Sidebar'

//author:{avatar_url " ", name: " ", role: " ",}
//publishedAt: Date
//content: String
const posts= [
  {
    id:1,
    author:{
      avatarUrl:'https://github.com/danncesar.png',
      name:'Daniel Cesar',
      role: 'Student'
    },
    content:[
      {type: 'paragraph',content:'Fala galeraa 👋'},
      {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',content:' jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-08 10:30:00'),
  },
  {
    id:2,
    author:{
      avatarUrl:'https://github.com/lucasczan.png',
      name:'Lucas Soares',
      role: 'Eng.Software'
    },
    content:[
      {type: 'paragraph',content:'Fala galeraa 👋'},
      {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',content:' jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-10-08 12:30:00'),

  }

];
 
export function App() {
 

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return( 
           <Post
           key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
           )
          })}

  
        </main>
      </div>
    </div>
    
  )
}


