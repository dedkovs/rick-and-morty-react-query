import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CharacterInputProps } from './CharacterInput.types';

const CharacterInput = (props: CharacterInputProps) => {
  const { onInputChange, label, dispatchType } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={label}
        label={label}
        variant={'standard'}
        onChange={(e) => onInputChange(e, dispatchType)}
      />
    </Box>
  );
};

export default CharacterInput;
