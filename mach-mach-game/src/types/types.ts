export type newUser = {
    name: string
    surname: string
    email: string
    difficulty: string
    result: number
    cards: string
    ssn: string
}

export type indexDbType = {
    DB_NAME: string
    DB_VERSION: number
    DB_STORE_NAME: string
    db: IDBDatabase | null

    openDb: any
    clearObjectStore: () => void
    getObj: (ssn: string) => any
    putObj: (newUser: newUser) => void
  }
