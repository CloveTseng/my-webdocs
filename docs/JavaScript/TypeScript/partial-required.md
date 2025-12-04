---
title: 'Partial 與 Required '
authors: [clove]
tags: [TypeScript]
---

## Partial 和 Required 是什麼？
如果說 Pick/Omit 是決定有哪些欄位，Partial/Required 就是決定欄位是否必填

- Partial ：全部選填
- Required ：全部必填

---
## 寫法
### Partial

```ts
Partial<要選填的型別>
```

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 使用 Partial：把所有屬性都變成 name?: string; email?: string; ...
type UpdateUserDto = Partial<User>;

const updateData: UpdateUserDto = {
  email: 'new-email@test.com'
};
```

### Required

```ts
Required<原本的型別>
```

```ts
interface ButtonProps {
  label?: string; 
  color?: string; 
  disabled?: boolean; 
}

// 使用 Required：強制所有屬性都要有值
type FullButtonProps = Required<ButtonProps>;

const myBtn: FullButtonProps = {
  label: 'Click me',
  color: 'blue',
  disabled: false
};
```

## 實戰常見組合技

> 實戰中，常見將 Pick/Omit 和 Partial 混在一起使用

情境：寫一個『編輯個人資料』的表單
1. `id` 不能被編輯(用 Omit)
2. 剩下欄位選填(用 Partial)

```ts
type TUser = {
  id: number;
  name: string;
  email: string;
  bio: string;
}

type TEditProfileDto = Partial<Omit<TUser, 'id'>>;

const formInput: TEditProfileDto = {
  bio: "Hello World";
}
```