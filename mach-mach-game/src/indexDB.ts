import { indexDbType } from './types/types';
const Idb: indexDbType = {
    DB_NAME: 'match-match-db',
    DB_VERSION: 1,
    DB_STORE_NAME: 'users',
    db: null,

    openDb() {
        return new Promise((res, rej) => {
            let request = indexedDB.open(Idb.DB_NAME, Idb.DB_VERSION)
            request.onsuccess = (event: any) => {
                Idb.db = request.result
                console.log('IDB DONE');
                res(Idb.db)
            };
            request.onerror = (event: any) => {
                rej(this.error)
                console.error("wrong:", event.target.errorCode)
            }
            request.onupgradeneeded = (event: any) => {
                let myDB = event.target.result;
                if (!myDB.objectStoreNames.contains(Idb.DB_STORE_NAME)) {
                    let objectStore = myDB.createObjectStore(Idb.DB_STORE_NAME, { keyPath: 'ssn' });
                }
                res(Idb.db)
            }
        })
    },
    clearObjectStore() {
        Idb.openDb().then((db: any) => {
            return new Promise((res, rej) => {
                let transaction = Idb.db.transaction(Idb.DB_STORE_NAME, 'readwrite');
                let objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
                let request = objectStore.clear();
                request.onsuccess = (event: any) => {
                    res(objectStore)
                }
                request.onerror = (event: any) => {
                    rej(this.error)
                }
            })
        })
    },
    getObj(ssn) {
        return Idb.openDb().then((db: any) => {
            return new Promise((res, rej) => {
                let transaction = db.transaction(Idb.DB_STORE_NAME, 'readonly');
                let objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
                let request = objectStore.get(ssn);
                request.onsuccess = (event: any) => res(request.result);
                request.onerror = (event: any) => {
                    rej(event)
                }
            })
        })
    },
    putObj(newUser) {
        Idb.openDb().then((db: any) => {
            return new Promise ((res, rej) => {  
                let transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');
                let objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
                let request = objectStore.put(newUser);
                request.onsuccess = (event: any) => {
                    event.target.result == newUser.ssn;
                    res(event.target.result)
                }
                request.onerror = (event: any) => {
                    rej(event.error);
                }
            })
        })
    }
}
export default Idb