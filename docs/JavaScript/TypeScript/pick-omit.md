---
title: 'Pick 和 Omit'
authors: [clove]
tags: [TypeScript]
---

## Pick 和 Omit 是什麼？
這是 TS 中的兩個工具型別，主要用來從現有的 type (或 Interface) 型別中，產出一個新的型別。就不需要重覆寫類似的型別

- Pick ：挑選
- Omit ：排除

---
## 寫法
### Pick

```ts
Pick<原本的型別, '想要留下的屬性1' | '想要留下的屬性2'>
```

例：
- 這裡是完整的型別

  ```ts
  type TUser = {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    address: string;
    createdAt: Date;
  }
  ```
- 我要做一個使用者卡片，只需要顯示姓名跟 email

```ts
type TUserCardProps = Pick<TUser, 'name' | 'email'>

const userCard: TUserCardProps = {
  name: "Clove",
  email: "clove@example.com",
}
```

### Omit

```ts
Omit<原本的型別, '想要刪掉的屬性1' | '想要刪掉的屬性2'>
```

例：
- 續上面的 TUser
- 這裡想要開發一個輸入表單，大部份資訊都需要，但不要 id 跟 createdAt

```ts
type TCreateUserDto = Omit<TUser, 'id' | 'createdAt'>

const newUser: TCreateUserDto = {
  name: "New User",
  email: "new@test.com",
  passwordHash: "123456",
  address: "Taipei"
};
```