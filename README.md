# eslint-config-base

## Table of Contents

- [✨ Features](#-features)
- [🦾 Installation](#-installation)
- [♾️Usage](#-usage)
- [❤️Support or Donate](#-support-or-donate)
- [💕Special Thanks](#-special-thanks)

## ✨ Features

- Provides a full `eslint` config created using the following configs and plugins:
  - `eslint`
  - `prettier`
  - `eslint-config-airbnb-base`
  - `eslint-config-prettier`
  - `eslint-plugin-jest`
  - `eslint-plugin-jest-formatting`
  - `eslint-plugin-prettier`
  - `eslint-plugin-import`
  - `eslint-plugin-simple-import-sort`

## 🦾 Installation

```bash
yarn add @borisshulyak/eslint-config-base@latest eslint@8.34.0 prettier@2.8.4 eslint-config-airbnb-base@15.0.0 eslint-config-prettier@8.6.0 eslint-plugin-jest:@27.2.1 eslint-plugin-jest-formatting@3.1.0 eslint-plugin-prettier@4.2.1 eslint-plugin-import@2.27.5 eslint-plugin-simple-import-sort@10.0.0 --dev
```

**OR**

```bash
npm install --save-dev @borisshulyak/eslint-config-base@latest eslint@8.34.0 prettier@2.8.4 eslint-config-airbnb-base@15.0.0 eslint-config-prettier@8.6.0 eslint-plugin-jest:@27.2.1 eslint-plugin-jest-formatting@3.1.0 eslint-plugin-prettier@4.2.1 eslint-plugin-import@2.27.5 eslint-plugin-simple-import-sort@10.0.0
```

## ♾️ Usage

- Create `.eslintrs.js` in the root of the project.
- Copy and paste the following code to the file:

```javascript
module.exports = {
  "extends": ["@borisshulyak/eslint-config-base"]
}
```
- Run `eslint` check:

```bash
eslint . --ext .jsx,.js --quiet
```
- Run `eslint` autofix:

```bash
eslint . --ext .jsx,.js --fix
```

## 🛠️ Contributing

See the [CONTRIBUTING.md](https://github.com/BorysShulyak/eslint-config-base/blob/main/CONTRIBUTING.md)document.

## 🗺️ Roadmap

- Create the backward method `eslintEnableFile`

## ❤️ Support or Donate
If you are enjoying this plugin and feel extra appreciative, you could [buy me a book](https://bmc.link/borisshulyak)
📖 or 3 📖📖📖.

## 💕 Special Thanks

- I want to say thank you to**my wife Diana**for her love, daily support, motivation and inspiration.
