# CV

My CV as a simple web app that renders minimalist CV with print-friendly layout.

Built with Next.js and shadcn/ui, deployed on Vercel.

Based on https://github.com/BartoszJarocki/cv

## Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Translation to german language by overriding fields in the `translation` object of `RESUME_DATA` and the translations in [page.tsx](./src/app/page.tsx) (link to `/#de` to select german version on page load)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

## Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dnnsmnstrr/cv.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local Server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

## Run with Docker

Build the containewr

```
docker compose build
```

Run the container

```
docker compose up -d
```

Stop the Container

```
docker compose down 
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
