// This is something you can do...
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Steve',
//   age: 40,
// };

// ...but it's better to let TypeScript infer This
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple.  Can use instead of array if you know the length and types in advance.
// } = {
//   name: 'Steve',
//   age: 40,
//   hobbies: ['Art', 'Learning'],
//   role: [2, 'author'],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
} // behind the scenes, each reads a number, ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
// if you change the first value to a different number, the other values increment from that number by one
// You can assign your own numbers to each of the values
// You're not limited to numbers, you can add string

const person = {
  name: 'Steve',
  age: 40,
  hobbies: ['Art', 'Learning'],
  role: Role.ADMIN,
};

//person.role.push('admin'); // push is exception and is allowed in tuples

// console.log(person);

if (person.role === Role.ADMIN) {
  console.log('is admin');
}

// let favoriteActivites: string[];
//let favoriteActivites: any[]; // you don't want to use any too often
// favoriteActivites = ['sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

/*
Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.
*/
