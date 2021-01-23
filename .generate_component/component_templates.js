// component.tsx
exports.component = name => `import React from 'react';

import './${name}.scss';

export interface I${name}Props {}

const ${name} = ({}: ${name}Props) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};

export default ${name};
`;