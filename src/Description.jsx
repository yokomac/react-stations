
import { DogImage } from './DogImage'
import { useState } from 'react'

export const Description = () => {
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

  return (
     <div className='Dogdiv'>
      <p className='DogAPIp'>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl}/>
      <div>
        <button onClick={handleClick}>更新</button>
      </div>
    </div> 
  )
}
