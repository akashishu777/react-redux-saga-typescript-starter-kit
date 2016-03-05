import { gen } from './generator_check'

const foo: string = 'bar'

console.log('this is foo: ', foo)

var it = gen(5);

// note: not sending anything into `next()` here
console.log(it.next());       // { value:6, done:false }
console.log(it.next(12));   // { value:8, done:false }
console.log(it.next(13));   // { value:42, done:true }