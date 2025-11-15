# Changesets

This directory contains [changesets](https://github.com/changesets/changesets) for version management.

## How to use

When you make changes to a package, create a changeset:

```bash
npm run changeset
```

Follow the prompts to:
1. Select which packages changed
2. Choose the version bump type (major, minor, patch)
3. Write a summary of the changes

The changeset will be stored as a file in this directory until it's consumed by a release.
