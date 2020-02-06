export interface TruthType {
    page?: number
}

export interface TotalType {
    chinaTotal: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    chinaAdd: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    lastUpdateTime: string
}

export interface AreaType {
    name: string,
    total: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    today: {
        confirm: number,
        suspect: number,
        dead: number,
        heal: number
    },
    children?: AreaType[]
}

