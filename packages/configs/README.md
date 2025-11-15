# @oliviacl/tutorial-frontend-config

Shareable ESLint and Prettier configurations for frontend projects.

## Installation

```bash
npm install --save-dev @oliviacl/tutorial-frontend-config eslint prettier
```

## Usage

### ESLint (Flat Config)

```javascript
// eslint.config.js
import { eslintConfig } from '@oliviacl/tutorial-frontend-config';

export default eslintConfig;
```

Or import from subpath:
```javascript
import config from '@oliviacl/tutorial-frontend-config/eslint';
```

### Prettier

```javascript
// .prettierrc.js
import { prettierConfig } from '@oliviacl/tutorial-frontend-config';

export default prettierConfig;
```

Or import from subpath:
```javascript
import config from '@oliviacl/tutorial-frontend-config/prettier';
```

## Features

**ESLint:**
- ✅ ESLint 9 flat config format
- ✅ TypeScript support via `typescript-eslint`
- ✅ React & React Hooks rules
- ✅ JSX accessibility (jsx-a11y)
- ✅ Import ordering
- ✅ Prettier integration

**Prettier:**
- Single quotes
- Semicolons
- 2 space indentation
- 100 character line width

## Repository

https://github.com/liv7c/tutorial-frontend-config

## License

MIT
