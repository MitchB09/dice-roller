# dnd5e-dice-roller

[![npm](https://img.shields.io/badge/npm-dnd5e--dice--roller-green?style=flat-square)](https://www.npmjs.com/package/dnd5e-dice-roller)
[![Version](https://img.shields.io/npm/v/dnd5e-dice-roller?label=version&style=flat-square)](https://www.npmjs.com/package/dnd5e-dice-roller)
![Build](https://github.com/MitchB09/dice-roller/actions/workflows/node.js.yml/badge.svg)
![NPM License](https://img.shields.io/npm/l/dnd5e-dice-roller)
![size](https://img.shields.io/bundlephobia/min/dnd5e-dice-roller)

Generate dice rolls based on standard ttrpg dice string.

For example:s

- 1d4 - 1 roll of a 4 sided dice. Returns a result between 1 and 4
- d6 - 1 roll of a 6 sided dice. Returns a result between 1 and 6
- 3d8 - 3 rolls of an 8 sided dice. Returns a result between 3 and 24
- 1d6+2 - 1 roll of a 6 sided dice, plus 2. Returns a result between 3 and 8
- 1d4-1 - 1 roll of a 4 sided dice, minus 1. Returns a result between 0 and 3
- 4d6dl1 - 4 rolls of a 6 sided dice, dropping the lowest. Returns a result between 3 and 18
- 2d20dh1 - 2 rolls of a 20 sided dice, dropping the lowest. (i.e. Rolling with disadvantage)
- 2d20d1+3 - 2 rolls of a 20 sided dice, dropping the lowest, plus 3. (i.e. Rolling with advantage with a modifier)

## Usage

Default export returns the total and the the rolls of each die
```javascript
import diceRoller  from 'dnd5e-dice-roller';

diceRoller("2d8+3"); // Returns { total: 17, rolls: [8, 6], rollStr: "2d8+3"  }
```

Named exports of `diceRoller` (behaves the same as the default) and `roll` to just return the total
```javascript
import { diceRoller, roll }  from 'dnd5e-dice-roller';

diceRoller("2d8+3"); // Returns { total: 17, rolls: [8, 6], rollStr: "2d8+3"  }
roll("2d8+3"); // Returns 17
```