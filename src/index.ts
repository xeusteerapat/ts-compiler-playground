class User {
  private name = 'Teerapat';

  greeting(): string {
    return `Hello, ${this.name}`;
  }

  async doAsyncThing(arg: string) {
    return arg.split(',');
  }
}

const myUser = new User();
const greeting = myUser.greeting();
console.log(greeting);
const asyncUser = myUser.doAsyncThing('a,e,i,o,u');
console.log(asyncUser);

// type
type Item = {
  name: string;
};

const item: Item = {
  name: 'first item',
};

console.log('check: xxx', item);

const myName: string = 'Hi';
console.log(myName);

const myAny: any = 'hi';

import { CoolMath } from './app/main';

const myMath = new CoolMath();
const threePlusFive = myMath.add(3, 5);
console.log(threePlusFive);
