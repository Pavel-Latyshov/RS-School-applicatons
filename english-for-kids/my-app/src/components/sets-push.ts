import { words } from './words';
import { sets } from './sets';


export const PushSets = {
    pushSets: (loginValue: any) => {
        sets.forEach(async (element) => {
            const response = await fetch(`http://localhost:5000/api/users/${loginValue}/sets`, {
                method: "POST",
                body: JSON.stringify({
                    set: `${element[0]}`,
                    image: `${element[1]}`,
                    user_id: `${loginValue}`
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            return data
        });
    },
    pushWords: (loginValue: any) => {
        words.forEach(element => {
            element.forEach(async  el => {
                
                const response = await fetch(`http://localhost:5000/api/users/${loginValue}/sets/${loginValue}/game`, {
                    method: "POST",
                    body: JSON.stringify({
                        image: `${el[0]}`,
                        word: `${el[1]}`,
                        translation: `${el[2]}`,
                        sound: `${el[3]}`,
                        set_id: `${el[4]}`,
                        user_id: `${loginValue}`
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                return data

            });
        });
    },


}

