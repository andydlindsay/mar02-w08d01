import React from 'react';
import axios from 'axios';
import { genFeedbackMessage } from '../helpers/helpers';

const Result = (props) => {
  const [highScores, setHighScores] = React.useState([]);
  const message = genFeedbackMessage(props.status);

  const fetchHighScores = () => {
    axios
      .get('/highscores')
      .then(data => setHighScores(data.data.results))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>{message}</h2>
      <button onClick={fetchHighScores} data-testid="fetch-highscores">Fetch HighScores</button>
      { highScores.map(highScore => (<li key={highScore.id}>{highScore.name}</li>)) }
    </footer>
  );
}

export default Result;
