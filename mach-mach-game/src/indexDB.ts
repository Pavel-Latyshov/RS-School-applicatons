import { indexDbType } from './types/types';

const Idb: indexDbType = {
  DB_NAME: 'match-match-db',
  DB_VERSION: 1,
  DB_STORE_NAME: 'users',
  db: null,

  openDb() {
    return new Promise((res, rej) => {
      const request = indexedDB.open(Idb.DB_NAME, Idb.DB_VERSION);
      request.onsuccess = (event: any) => {
        Idb.db = request.result;
        console.log('IDB DONE');
        res(Idb.db);
      };
      request.onerror = (event: any) => {
        rej(this.error);
        console.error('wrong:', event.target.errorCode);
      };
      request.onupgradeneeded = (event: any) => {
        const myDB = event.target.result;
        if (!myDB.objectStoreNames.contains(Idb.DB_STORE_NAME)) {
          const objectStore = myDB.createObjectStore(Idb.DB_STORE_NAME, { keyPath: 'ssn' });
        }
        res(Idb.db);
      };
    });
  },
  clearObjectStore() {
    Idb.openDb().then((db: any) => new Promise((res, rej) => {
      const transaction = Idb.db.transaction(Idb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const request = objectStore.clear();
      request.onsuccess = (event: any) => {
        res(objectStore);
      };
      request.onerror = (event: any) => {
        rej(this.error);
      };
    }));
  },
  getObj(ssn) {
    return Idb.openDb().then((db: any) => new Promise((res, rej) => {
      const transaction = db.transaction(Idb.DB_STORE_NAME, 'readonly');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const request = objectStore.get(ssn);
      request.onsuccess = (event: any) => res(request.result);
      request.onerror = (event: any) => {
        rej(event);
      };
    }));
  },
  putObj(newUser) {
    Idb.openDb().then((db: any) => new Promise((res, rej) => {
      const transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const request = objectStore.put(newUser);
      request.onsuccess = (event: any) => {
        event.target.result == newUser.ssn;
        res(event.target.result);
      };
      request.onerror = (event: any) => {
        rej(event.error);
      };
    }));
  },
};

// window.indexedDB.deleteDatabase("match-match-db");
export default Idb;
