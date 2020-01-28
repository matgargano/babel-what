import AsyncTest from "./fetcher/AsyncTest";

const r = new AsyncTest();
const d = r.get('baz').then(v => console.log(v));
