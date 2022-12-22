let userName: string = "jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split("");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Jack",
  last: "Herrington",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

if (ids[30] === "D") {
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) => v * 10);

// Record Type VS Index Signature
// type HumanInfo = {
//   [name: string]: number;
// };
//
// let human: HumanInfo = {
//   '홍길동': 40,
//   '둘리': 20,
// };

// type HumanInfo = Record<string, number>;
//
// let human: HumanInfo = {
//   '홍길동': 40,
// };

// Index Signature 의 단점
// 1. 문자열 리터럴을 key 로 사용할 수 없다.
// type HumanInfo = {
//   [name: "홍길동" | "둘리" | "마이콜"]: number;
// };
//
// let human: HumanInfo = {
//   홍길동: 40,
//   둘리: 20,
//   마이콜: 10,
// };
//
// type names = "홍길동" | "둘리" | "마이콜";
//
// type HumanInfo = Record<names, number>;
//
// let human: HumanInfo = {
//   홍길동: 20,
//   둘리: 30,
//   마이콜: 40,
// };

// keyof 키워드는 타입 또는 인터페이스에 존재하는 모든 키 값을 union 형태로 가져옵니다.
type HumanType = {
  name: string;
  age: number;
  address: string;
};

type humanRecordType = Record<keyof HumanType, string>;

let human: humanRecordType = {
  name: "또치",
  age: "20",
  address: "서울",
};
