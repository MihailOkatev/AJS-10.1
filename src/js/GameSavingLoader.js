import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const data = read();
      data.then((answer) => {
        const result = json(answer);
        result.then((clientData) => resolve(clientData));
      });
    });
  }
}
