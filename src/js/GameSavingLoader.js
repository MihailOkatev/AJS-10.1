import read from './reader';
import json from './parser';

// eslint-disable-next-line import/prefer-default-export
export class GameSavingLoader {
  static load() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      const data = read();
      data.then((answer) => {
        const result = json(answer);
        result.then((clientData) => resolve(clientData));
      });
    });
  }
}
