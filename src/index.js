import AsyncTest from "./fetcher/AsyncTest";

const r = new AsyncTest();
const d = r.get('baz');
console.log(d);