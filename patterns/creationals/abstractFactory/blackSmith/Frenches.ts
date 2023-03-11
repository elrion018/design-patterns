import { 칼, 방패, 대장장이 } from './interfaces'

export class 프랑스식칼 implements 칼 {
    베기(target: unknown) {
        // 프랑스식으로 벤다.
    }

    찌르기 (target: unknown) {
        // 프랑스식으로 찌른다.
    }
}

export class 프랑스식방패 implements 방패 {
    막기(target: unknown) {
        // 프랑스식으로 막는다.
    }

    밀어내기(target: unknown) {
        // 프랑스식으로 밀어내기.
    }
}

export class 프랑스인대장장이 implements 대장장이 {
    칼만들기(target: unknown) {
        // 프랑스식 칼을 만든다.
    }

    방패만들기(target: unknown) {
        // 프랑스식 방패를 만든다.
    }
}