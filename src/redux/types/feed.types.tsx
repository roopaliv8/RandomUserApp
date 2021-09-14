
export interface UserDataInterface {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string,
    },
    email: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
      }

}

export interface InfoInterface {
    seed:string,
    results:number,
    page:number,
}

export interface UserInterface {
    info: InfoInterface
    results: UserDataInterface[]
}
export const SAVE_DATA = "SAVE_DATA"

interface SaveDataAction {
    type: typeof SAVE_DATA,
    payload: UserInterface
}

export type FeedActionTypes = SaveDataAction