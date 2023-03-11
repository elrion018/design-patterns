export interface 칼 {
    베기: (target: unknown) => void
    찌르기: (target: unknown) => void
}

export interface 방패 {
    막기: (target: unknown) => void
    밀어내기: (target: unknown) => void
} 

export interface 대장장이 {
    칼만들기: (target: unknown) => void,
    방패만들기: (target: unknown) => void 
}