
//import { imageUrl } from "tests/mock/fetch"
export const DogImage = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="犬の画像" className='Dog-imag'/>
    </div>
  )
}
