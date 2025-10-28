---
title: "JS 中的 Prototype"
authors: [clove]
tags: [JavaScript]
---
:::tip
> 這是什麼：
> 物件 (Object) 間使用『原型鏈 (Prototype Chain)』機制來繼承和共享屬性及方法
:::

## Prototype Chain 在哪？我要怎麼看？

```js
function Person(fName, lName) {
  this.firstName = fName, 
  this.lastName = lName 
  } 

Person.prototype.gender = "Male" ;

const person1 = new Person("Clove", "Tseng"); 

console.log(person1)
```

<img src="/blog/prototype1.png" />
在 DevTools 看到除了 firstName 跟 lastName 的值之外，可以看到下面還有一個 prototype chain 的物件，裡面就會包含寫入的 gender: "Male"

```js
const person1 = new Person("Clove", "Tseng"); 
const person2 = new Person("Ted", "Tsai"); 

console.log(person2)
```

此時就算印出 person2 也會在 prototype 的物件中看到 gender: "Male"

## 我要怎麼讀取與寫入？

1. 讀取

因為 prototype chain 是共用的，所以不論是使用 person1 還是 person2 都可以取到 gender 的值

```js
console.log(person1.gender) //"Male"
console.log(person2.gender) //"Male"
```

2. 寫入
```js
function User(username) {
  this.username = username;
}

//新增一個共享的 function
User.prototype.getProfileLink = function() {
  return `https://your-app.com/users/${this.username.toLowerCase()}`;
};
```

## 實務上怎麼用？