import { ADD_NEW_CATEGORY, ADD_NEW_WORD } from './types';
export function createPost (name: any) {
    return async (dispatch: any) => {
        const response = await fetch(`https://elegant-saucisson-88474.herokuapp.com/api/users/${name}/sets`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json()
          let newObj: any = {

          }
          for (let i = 0; i < data.length; i++) {
              newObj = {...newObj,
                [data[i].set]: data[i].image
              }
          } 
        dispatch({type: ADD_NEW_CATEGORY, payload: newObj})
    }
}

export function createWordRedux (name: any, set: any) {
  return async (dispatch: any) => {
    const response = await fetch(`https://elegant-saucisson-88474.herokuapp.com/api/users/${name}/sets/${set}/game`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await response.json()
          let newObj: any = {

          }

          for (let i = 0; i < data.length; i++) {
            newObj = {
              ...newObj,
              [data[i].word]: [data[i].image, data[i].word, data[i].translation, data[i].sound, data[i].set_id]
            }            
          }
          console.log(newObj);
          
          dispatch({type: ADD_NEW_WORD, payload: newObj})
          return data
}
}