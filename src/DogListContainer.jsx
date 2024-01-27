import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const ChangeBreed = e => {
    setSelectedBreed(e.target.value);
  };

  useEffect(() => {
    const promise = fetch("https://dog.ceo/api/breeds/list/all");
    promise
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message);
        console.log(data.message);
      });
  }, []);

  const [selectedBreedsImage, setSelectedBreedsImage] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
      const data = await response.json();
      setSelectedBreedsImage(data.message.slice(0, 12));
      console.log(data.message);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={ChangeBreed} />
      <button onClick={fetchImages}>表示</button>
      <div>
        <Gallery selectedBreedsImage={selectedBreedsImage} />
      </div>
    </div>
  );
};

const Gallery = ({ selectedBreedsImage }) => {
  return (
    <div>
      {selectedBreedsImage.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Dog ${index + 1}`} style={{ width: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default DogListContainer
