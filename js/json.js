//자바스크립트의 느슨한(?)모드를 엄격하게 하기위해서 선언
//절차적으로 코딩이 이루어진 상태에만 값을 출력하게 만든다 ex) 선언보다 출력이 먼저일때 에러를 발생시킨다.
"use strict";

//1.Object to String
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(typeof json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["size"]);
//console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);

  return key === "name" ? "linoo" : value;

  //return value === "null" ? "" : value;
});
console.log(json);
