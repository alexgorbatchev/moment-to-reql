# moment-to-reql

[![GratiPay](https://img.shields.io/gratipay/user/alexgorbatchev.svg)](https://gratipay.com/alexgorbatchev/)
![Downloads](https://img.shields.io/npm/dm/moment-to-reql.svg)
![Version](https://img.shields.io/npm/v/moment-to-reql.svg)

A helper function to convert moment.js object to ReQL so that Timezone information can be preserved when passing data to RethinkDB.

## Installation

`moment-to-reql` expects that you have already installed `moment` and `moment-timezone`.

```
npm instal --save-dev moment-to-reql
```

## Usage

Returned value can be used in place of regular `Date`, `r.now()` and all other time/date objects in your ReQL queries:

```js
import momentToReQL from 'moment-to-reql';

momentToReQL(moment.tz('10/10/2010 10:00', 'DD/MM/YYYY hh:mm', 'America/Los_Angeles');
// returns:
//  {
//    $reql_type$: 'TIME',
//    epoch_time: 1286730000,
//    timezone: '-07:00',
//  }
```

## License

ISC