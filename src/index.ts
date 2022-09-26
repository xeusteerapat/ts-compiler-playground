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
