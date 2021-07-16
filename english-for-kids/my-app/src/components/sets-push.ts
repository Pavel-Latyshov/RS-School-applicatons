import { words } from './words';
import { sets } from './sets';

export const PushSets = {
  pushSets: (loginValue: any) => {
    sets.forEach(async (element) => {
      const response = await fetch(
        `https://elegant-saucisson-88474.herokuapp.com/api/users/${loginValue}/sets`,
        {
          method: 'POST',
          body: JSON.stringify({
            set: `${element[0]}`,
            image: `${element[1]}`,
            user_id: `${loginValue}`,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      return data;
    });
  },
  pushWords: (loginValue: any) => {
    words.forEach((element) => {
      element.forEach(async (el) => {
        const response = await fetch(
          `https://elegant-saucisson-88474.herokuapp.com/api/users/${loginValue}/sets/${loginValue}/game`,
          {
            method: 'POST',
            body: JSON.stringify({
              image: `${el[0]}`,
              word: `${el[1]}`,
              translation: `${el[2]}`,
              sound: `${el[3]}`,
              set_id: `${el[4]}`,
              user_id: `${loginValue}`,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        return data;
      });
    });
  },
  getSets: async (user: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${user}/sets`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
  updateSets: async (body: any, user: any, setId: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${user}/sets/${setId}`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
  getSetWords: async (user: any, category: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${user}/sets/${category}/game`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
  pushSetWords: async (body: any, user: any, category: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${user}/sets/${category}/game`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
  pushWord: async (body: any, user: any, category: any, wordId: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${user}/sets/${category}/game/${wordId}`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
  deleteWord: async (setId: any, name: any, wordId: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${name}/sets/${setId}/game/${wordId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
  deleteSet: async (setId: any, name: any) => {
    const response = await fetch(
      `https://elegant-saucisson-88474.herokuapp.com/api/users/${name}/sets/${setId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  },
};
