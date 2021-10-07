import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CharacterCardProps } from './CharacterCard.types';
import './characterCardImage.css';

const CharacterCard = (props: CharacterCardProps) => {
  const {
    // created,
    // episode,
    gender,
    // id,
    image,
    // location,
    name,
    // origin,
    species,
    status,
    type,
    // url,
  } = props.character;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        maxWidth: 400,
        margin: 2,
        position: 'relative',
        borderRadius: 2,
      }}
    >
      <CardContent
        className="characterCardCardContent"
        style={{ paddingBottom: 0 }}
      >
        <Box>
          <img className="characterCardImage" src={image} alt={`${name}`} />
        </Box>
        <Box>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {type}
          </Typography>
          <Typography variant="body2">
            <span className="characterCardTextGrey">species: </span>
            {species}
            <br />
            <span className="characterCardTextGrey">gender: </span>
            {gender}
            <br />
            <span className="characterCardTextGrey">status: </span>
            <span
              className={
                status === 'Alive'
                  ? 'characterCardTextGreen'
                  : status === 'Dead'
                  ? 'characterCardTextRed'
                  : 'characterCardTextGrey'
              }
            >
              {status}
            </span>
          </Typography>
          <CardActions
            sx={{
              padding: 0,
              marginLeft: -0.6,
              marginTop: 2,
              marginBottom: matches ? 2 : 1,
            }}
          >
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
