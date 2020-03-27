import uuid from 'uuid/v4';
// import {v4 as uuid} from 'uuid';

// import {uuid} from 'uuidv4';

// export default [
//   {id: 1, name: 'Beans'},
//   {id: 2, name: 'Chips'},
//   {id: 3, name: 'Cheese'},
//   {id: 4, name: 'habenero'},
// ];

export default [
  {id: uuid(), name: 'Beans'},
  {id: uuid(), name: 'Chips'},
  {id: uuid(), name: 'Cheese'},
  {id: uuid(), name: 'habenero'},
];
