This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) made with defaults based on Radix UI and TailwindCSS for styling.

## Defaults

- TailwindCSS
- Shadcn/UI
- RadixUI Themes

## Configuration

For components like `Section` you'll want to add this to your `settings.json` config in VS Code

```
...
"tailwindCSS.experimental.classRegex": [["cx\\(([^)]*)\\)", "cn\\(([^)]*)\\)", "'([^']*)'"]],
"tailwindCSS.classAttributes": ["class", "className", "ngClass", "class:list", ".*ClassName.*", ".*Classes.*"],
...
```
