// TODO: write your code here
import { GameSavingLoader } from './GameSavingLoader';

// eslint-disable-next-line no-unused-vars
GameSavingLoader.load().then((saving) => {
  console.log(saving);
// eslint-disable-next-line no-unused-vars
}, (error) => {
  // ...
});
