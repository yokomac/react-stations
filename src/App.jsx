// DO NOT DELETE

//import { useState } from 'react';
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  /*
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/stbernard/n02109525_3346.jpg");
  const handleClick = () => {
    const poromise = fetch("https://dog.ceo/api/breeds/image/random")
    poromise
    .then(response => {
      return response.json();
    })
    .then(data => {
      setDogUrl(data.message)
    })
  }
  */

  return (
    /*
    <div>
      <header className='DogAPIheader'>犬アプリ</header>
      <div className='Dogdiv'>
        <p className='DogAPIp'>犬の画像を表示するサイトです</p>
       <img src={dogUrl} alt="犬の画像" className='Dogimag'/>
        <div>
          <button onClick={handleClick}>更新</button>
        </div>
      </div>
    </div>
    */
   <div>
    <Header />
    <Description />
    <DogListContainer />
   </div>
  )
}
