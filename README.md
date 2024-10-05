<p align="center">
	<h1 align="center"><b>Eros Next Template</b></h1>
<p align="center">
    A NextJs open-source starter kit used for <a href="https://doneros.co/">Eros Client Projects</a>.
    <br />
    <br />
    <a href="#whats-included"><strong>What's included</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#configuration"><strong>Configuration</strong></a>
  </p>
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) made with defaults based on [`Shadcn/UI`](https://ui.shadcn.com/) and [`TailwindCSS`](https://tailwindcss.com/) for styling. It comes with a prettier config with TailwindCSS auto class sorting and removal.

## What's included

[Next.js](https://nextjs.org/) - Framework<br>
[TailwindCSS](https://tailwindcss.com/) - Styling<br>
[Shadcn](https://ui.shadcn.com/) - UI components<br>
[TypeScript](https://www.typescriptlang.org/) - Type safety<br>

## Getting Started

Clone this repo locally with the following command:

```bash
bunx degit eros-co/next-template new-project
```

1. Install dependencies using bun:

```sh
bun i
```

2. Copy `.env.example` to `.env` and update the variables.

```sh
cp .env.example .env
```

4. Start the development server from bun:

```ts
bun dev // starts the web app in development mode
```

## Configuration

For components like `Section` you'll want to add this to your `settings.json` config in `VS Code/Cursor/Etc...`

```
...
"tailwindCSS.experimental.classRegex": [["cx\\(([^)]*)\\)", "cn\\(([^)]*)\\)", "'([^']*)'"]],
"tailwindCSS.classAttributes": ["class", "className", "ngClass", "class:list", ".*ClassName.*", ".*Classes.*"],
...
```
