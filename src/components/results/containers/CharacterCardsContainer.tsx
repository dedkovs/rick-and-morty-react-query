import CharacterCard from '../views/CharacterCard';
import { useAppSelector } from '../../../redux/hooks';
import PaginationComponent from '../../pagination/PaginationComponent';

const CharacterCardsContainer = () => {
  const filteredCharactersFromApi = useAppSelector(
    (state) => state.characters.filteredCharactersFromApi
  );
  const pagesCount = useAppSelector((state) => state.pagination.pagesCount);

  return (
    <>
      <PaginationComponent count={pagesCount} />
      {filteredCharactersFromApi.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </>
  );
};

export default CharacterCardsContainer;
