/**
 * 추상팩토리(abstract factory) 패턴의 예제로서 대장간, 대장장이, 칼, 방패 모듈 구현
 */

import { 대장간 } from './BlackSmith';
import { 프랑스인대장장이 } from './Frenches';
import { 독일인대장장이 } from './Germans';
import { 한국인대장장이 } from './Koreans';

const 대장간인스턴스 = new 대장간(new 한국인대장장이());
const 한국식칼인스턴스 = 대장간인스턴스.칼만들기();
const 한국식방패인스턴스 = 대장간인스턴스.방패만들기();

대장간인스턴스.대장장이설정(new 독일인대장장이());

const 독일식칼인스턴스 = 대장간인스턴스.칼만들기();

대장간인스턴스.대장장이설정(new 프랑스인대장장이());

const 프랑스식방패인스턴스 = 대장간인스턴스.방패만들기();
