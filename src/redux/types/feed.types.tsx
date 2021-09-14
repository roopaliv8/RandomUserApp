
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
    },
    registered: {
        date: string,
        age: number,
    }

}

export interface InfoInterface {
    seed: string,
    results: number,
    page: number,
}

export interface UserInterface {
    info: InfoInterface
    results: UserDataInterface[]
}
export const SAVE_DATA = "SAVE_DATA"
export const SAVE_DETAILS_DATA = "SAVE_DETAILS_DATA"

interface SaveDataAction {
    type: typeof SAVE_DATA,
    payload: UserInterface
}

interface SaveDetailsDataAction {
    type: typeof SAVE_DETAILS_DATA,
    payload: UserDataInterface
}

export type FeedActionTypes = SaveDataAction | SaveDetailsDataAction