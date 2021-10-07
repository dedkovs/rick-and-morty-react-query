import { ChangeEvent } from 'react';
import CharacterInput from '../views/CharacterInput';
import { useAppDispatch } from '../../../redux/hooks';

const CHARACTER_NAME_LABEL = 'Character name';
const CHARACTER_NAME_DISPATCH_TYPE = 'CHARACTER_NAME_CHANGED';

const CharacterFiltersContainer = () => {
  const dispatch = useAppDispatch();

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    dispatchType: string
  ) => {
    dispatch({ type: dispatchType, payload: e.target.value });
  };
  return (
    <div>
      <CharacterInput
        onInputChange={onInputChange}
        label={CHARACTER_NAME_LABEL}
        dispatchType={CHARACTER_NAME_DISPATCH_TYPE}
      />
    </div>
  );
};

export default CharacterFiltersContainer;
