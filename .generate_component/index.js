const fs = require('fs');
const { component } = require('./component_templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// component.scss
fs.writeFile(`${dir}/${name}.scss`, '', writeFileErrorHandler);
function writeFileErrorHandler(err) {
  if (err) throw err;
}