//import { breeds } from "tests/mock/fetch"
/*
export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {

  const list = Object.entries(breeds).map(([breed, value]) => {
    <option key={breed} value={breed}>
      {breed}
    </option>
  });
  return (
    <select value={selectedBreed} onChange={(e) => onBreedChange(e)}>
      {list}
    </select>
  )
}
*/
export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  const list = Object.entries(breeds).map(([breeds, value]) => (
    <option key={breeds} value={breeds}>
      {breeds}
    </option>
  ));

  return (
    <select value={selectedBreed} onChange={(e) => onBreedChange(e)}>
      {list}
    </select>
  );
};

export default BreedsSelect
