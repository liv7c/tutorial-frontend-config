# Frontend Configs

A shareable ESLint and Prettier configuration package for frontend projects.

## Installation

```bash
npm install --save-dev @oliviac-tutorial-demo/configs eslint prettier
```

## Usage

### ESLint Configuration

Create `eslint.config.js`:

```javascript
import { eslintConfig } from '@oliviac-tutorial-demo/configs';

export default eslintConfig;
```

Or import from the subpath:

```javascript
import config from '@oliviac-tutorial-demo/configs/eslint';

export default config;
```

**Features:**
- ESLint 9 flat config format
- TypeScript support via `typescript-eslint`
- React and React Hooks rules
- JSX accessibility checks (jsx-a11y)
- Import ordering and organization
- Prettier integration

### Prettier Configuration

Create `.prettierrc.js`:

```javascript
import { prettierConfig } from '@oliviac-tutorial-demo/configs';

export default prettierConfig;
```

Or import from the subpath:

```javascript
import config from '@oliviac-tutorial-demo/configs/prettier';

export default config;
```

**Configuration:**
- Single quotes
- Semicolons enabled
- 2 space indentation
- 100 character line width
- Trailing commas (ES5)
- Arrow function parentheses (always)
- Line endings (LF)

## Development

This is a monorepo using npm workspaces. The `example-app` directory contains a sample project demonstrating the configs.

### Setup

```bash
npm install
```

### Version Management

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

To create a changeset:

```bash
npm run changeset
```

### Publishing

Publishing is automated via GitHub Actions. When changesets are merged to main, a PR is automatically created to bump versions. Merging that PR will publish to npm with provenance.

## Package Structure

```
frontend-configs/
├── packages/
│   └── configs/              # @oliviac-tutorial-demo/configs
│       ├── index.js         # Exports both configs
│       ├── eslint.js        # ESLint config
│       └── prettier.js      # Prettier config
└── example-app/             # Example usage
```

## License

MIT
