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
    getSets: async (user : any) => {
        const response = await fetch(`http://localhost:5000/api/users/${user}/sets`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    },
    updateSets: async (body: any, user: any, setId: any) => {
        const response = await fetch(`http://localhost:5000/api/users/${user}/sets/${setId}`, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        const data = await response.json()
        return data
    },
    getSetWords: async (user: any, category: any) => {
        const response = await fetch(`http://localhost:5000/api/users/${user}/sets/${category}/game`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        const data = await response.json()
        return data
    },
    pushSetWords: async (body: any, user: any, category: any) => {
        const response = await fetch(`http://localhost:5000/api/users/${user}/sets/${category}/game`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    }
}

                    // PushSets.getSetWords(user, category).then(res=>{
                    //     // console.log(res);
                    //     res.map((item: any)=> {
                    //         if(item.set_id===category) {
                    //             const wordBody = {
                    //                 image: `${item.image}`,
                    //                 word: `${item.word}`,
                    //                 translation: `${item.translation}`,
                    //                 sound: `${item.sound}`,
                    //                 set_id: `${setId}`,
                    //                 user_id: `${user}`
                    //             }
                    //             console.log(wordBody);
                                
                    //             // PushSets.pushSetWords(wordBody, user, setId)
                    //         }
                    //     })
                    // })