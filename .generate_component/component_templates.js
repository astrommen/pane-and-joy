// component.tsx
exports.component = name => `import React from 'react';

import './${name}.styles.ts';

export interface I${name}Props {}

const ${name}: React.FC = () => 
  <div>Hello 👋, I am a ${name} component.</div>;


export default ${name};
`;

// component.styles.ts
exports.styles = ()=> `import styled from 'styled-components';

export const Wrapper;
`;