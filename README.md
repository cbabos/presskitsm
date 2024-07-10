# PressKit SM
If you’re creating a game or launching a product, you’re likely familiar with the term PressKit. A presskit is an essential resource for newswriters to access information, media, and other materials about you and your product. While tools like doPresskit exist, they can be cumbersome without developer knowledge, requiring manual file management and template editing.

To address these challenges and to learn Next.js, I’ve decided to create my own solution with the following features:

- A proper admin area to avoid manual file management and XML/JSON/YML editing.
- Secure admin login using MFA.
- A home page for the developer/creator team, listing:
- Team name and introduction
- Social media and contact information
- Latest projects with links
- Latest media (photos and YouTube videos)

Clicking on a project provides detailed information similar to the homepage. The structure supports an infinite parent-child connection for flexibility, allowing you to showcase multiple parts of your projects.

Long-term goals include extending this project to manage social media posts, create newsletters, and serve as a comprehensive marketing tool for developers and creators.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
