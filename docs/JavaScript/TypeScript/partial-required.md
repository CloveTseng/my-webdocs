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