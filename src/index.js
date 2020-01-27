import AsyncTest from "./fetcher/AsyncTest";

const r = new AsyncTest();
const d = r.get('baz'); // cant await this because its not wrapped in an async function
d.then(r => {
    console.log('here',r)
})