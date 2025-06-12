import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

  const formatUserName = (userName) => `@${userName}`;

const users = [
  {
    urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-rzZuhiLEqr-GF6WnZGpUkS2zSErzEUYlg&s',
    name: "William A. Ramirez J.",
    formatUserName: formatUserName,
    userName: "W.A.R.J",
    isFollowing: true
  },
  {
    urlImg: 'https://img.freepik.com/vector-premium/personaje-avatar-esta-aislado_729149-194801.jpg?semt=ais_hybrid&w=740',
    name: "Pepe Perez",
    formatUserName: formatUserName,
    userName: "pepeperez",
    isFollowing: false
  },
  {
    urlImg: 'https://as1.ftcdn.net/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg',
    name: "Juan Correa",
    formatUserName: formatUserName,
    userName: "juancorrea",
    isFollowing: true
  }
]

export function App() {
  // react -> renderiza a element.
  // component -> función que devuelve element(factoria de elements).
  return (
    // <></> -> alternativa al React.Fragment -> para renderizar mas de un element.
    <section className='App'>
      {
        users.map(user => {
          const {urlImg, name, formatUserName, userName, isFollowing} = user;
          return (
            <TwitterFollowCard
              key={userName}
              urlImg={urlImg}
              name={name}
              formatUserName={formatUserName}
              userName={userName}
              isFollowing={isFollowing}
            />
          )
        })
      }
      <TwitterFollowCard
        urlImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-rzZuhiLEqr-GF6WnZGpUkS2zSErzEUYlg&s'
        name="William A. Ramirez J."
        formatUserName={formatUserName}
        userName="W.A.R.J"
        // este se toma como true algo similar al html.
        isFollowing
      />
      <TwitterFollowCard
        urlImg='https://img.freepik.com/vector-premium/personaje-avatar-esta-aislado_729149-194801.jpg?semt=ais_hybrid&w=740'
        name="Pepe Perez"
        formatUserName={formatUserName}
        userName="pepeperez"
        // para el false si se requiere pasar el false no hay forma de negación.
        isFollowing={false}
        />
      <TwitterFollowCard
        urlImg='https://as1.ftcdn.net/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg'
        name="Juan Correa"
        formatUserName={formatUserName}
        userName="juancorrea"
        isFollowing={true}
      />
    </section>
  )
}
