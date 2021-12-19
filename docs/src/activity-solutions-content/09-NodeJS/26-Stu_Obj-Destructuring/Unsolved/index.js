const nodejs = {
  pkgName: 'Node.js',
  type: 'JavaScript runtime environment',
};

// const pkgName = nodejs.pkgName
// const type = nodejs.type
const { pkgName, type } = nodejs;

console.log(pkgName);
console.log(type);

const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

const { tools } = js;
const { frameworks } = tools;
const { framework1, framework2 } = frameworks;

// const {
//   tools: {
//     frameworks: { framework1, framework2 },
//   },
// } = js;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

const languages = ['HTML', 'CSS', 'JavaScript'];
// const markup = languages[0];
// const style = languages[1];
// const scripting = languages[2];

const [markup, style, scripting] = languages;

console.log(markup, style, scripting);
console.log(markup);
