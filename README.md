# Storika

A dummy frontend shopping-cart website using - with ReactJS/TailwindCSS

> [Live website](https://storika.vercel.app/)

## Previews

### Home

![storika-home](https://github.com/mathdebate09/storika/assets/140599484/3b32c853-d2af-44c6-8f29-af15b6b1160b)

### Products (Loading skeleton

![storika-loading](https://github.com/mathdebate09/storika/assets/140599484/9097b86e-2dd7-4708-bba9-e2b969af8e39)

### Product (FakeStore API )

![storika-products](https://github.com/mathdebate09/storika/assets/140599484/865aa4cc-67d2-4970-a4e5-3dc4a4010210)

### Cart (Empty page - I made that cute art :D)

![empty-cart](https://github.com/mathdebate09/storika/assets/140599484/6e7ef753-53b0-428f-8b4e-bcdcd2e353c3)

### Cart (Dummy checkout)

![storika-cart](https://github.com/mathdebate09/storika/assets/140599484/82c63c23-136f-444d-852a-7aea1b19e312)

### 404 Page (a little hobby I have)

![storika-404-footer](https://github.com/mathdebate09/storika/assets/140599484/a8a44203-df0d-47c1-bfaa-3146b952f982)

## Features

- Beautiful light-themed interface. *coughs*
- Unique and visually appealing 404 page && Empty Cart page (I really meant it when I said **UNIQUE** && I also made the [svg art](https://storika.vercel.app/cart) from the empty-cart page)
- Products displayed and filtered using the Fakestore API
- Properly routed pages with React Router
- Responsive design for optimal viewing on all devices
- Cart functionality allowing users to add, remove, and adjust quantities

## Tools/Languages

[![React](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=react)](https://react.dev/learn)
[![JS](https://img.shields.io/badge/-JavaScript-000?style=for-the-badge&logo=javascript&logoColor=F0DB4F)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/-HTML-000?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-000?style=for-the-badge&logo=tailwindcss&logoColor=1572B6)](https://tailwindcss.com/docs/installation)
[![Vite](https://img.shields.io/badge/-Vite-000?style=for-the-badge&logo=vite)](https://vitejs.dev/guide/)
[![Vitest](https://img.shields.io/badge/-Vitest-000?style=for-the-badge&logo=vitest)](https://vitest.dev/guide/)
[![Vercel](https://img.shields.io/badge/-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/docs/getting-started-with-vercel)

## Getting started

- Make sure you have [Node 20.xx.x](https://nodejs.org/en/download/package-manager) or higher and [Git](https://git-scm.com/downloads) downloaded

```bash
git clone git@github.com:mathdebate09/storika.git
cd storika
npm install
npm run dev
```

## Learning Outcomes

- Gained experience on working with `React Router` and managing routed pages.
- Learned how to share states between components using `Context API`.
- Writing UI tests using `vitest` and prop-checking with `propTypes`.
- Also, attempted to use custom code-formatting using `Prettier` and `ES Lint` (been avoiding them for too long).

## Asset credits

- **Icon links**
  - [Cart](https://lucide.dev/icons/shopping-bag)
  - [Remove item](https://lucide.dev/icons/trash-2)
  - [Visa](https://www.svgrepo.com/svg/328144/visa), [MasterCard](https://www.svgrepo.com/svg/508701/mastercard-full) & [Paypal](https://www.svgrepo.com/svg/508716/paypal)
  - [Github](https://www.svgrepo.com/svg/512317/github-142)
  - [EmptyCart Image](https://gtihub.com/amthdebta09) (yep I made that :D)
- **Google fonts**
  - Logo Font: [Playwrite USA Modern](https://fonts.google.com/specimen/Playwrite+US+Modern?preview.text=storika.)
  - System Font: [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin?preview.text=Hello%20Wolrd)
  - 404 Page heading: [EB Garamond](https://fonts.google.com/specimen/EB+Garamond)
- **Carousel images**: [Desktop](https://www.artstation.com/artwork/kQQgaA), [Laptop](https://www.aroged.com/2024/06/25/apple-does-not-allow-the-release-of-pc-emulators-on-ios/), [Typewriter](https://unsplash.com/photos/black-typewriter-on-brown-wooden-table-rLNtIsnrp6A), [Walkman](https://medium.com/coinmonks/download-mp3-from-youtube-playlist-efa44493b47a) & [Game Console](https://quizgecko.com/learn/nintendo-trivia-rhntqm)
- Homepage Painting: [Unsplash link](https://unsplash.com/photos/horse-and-carriage-inside-cave-painting-kVXGjqRe7IY)
- Products data from [FakeStore API](https://fakestoreapi.com/).

## Code snippets

- CSS Resets: [Josh W. Comeau's Reset](https://www.joshwcomeau.com/css/custom-css-reset/) && [Andy Bell's Reset](https://piccalil.li/blog/a-more-modern-css-reset/)
- Carousel: A [material-tailwind](https://www.material-tailwind.com/docs/react/carousel) component.
- Footer: A [flowbite](https://flowbite.com/docs/components/footer/#social-media-icons) component.
- Select dropdown: Another [flowbite](https://flowbite.com/docs/forms/select/#select-input-example) component.
- Loading Skeleton: Yohohoho again, [flowbite](https://flowbite.com/docs/components/skeleton/#image-placeholder).
- Meta tag in HTML: A [dev.to article](https://dev.to/mathdebate09/add-thumbnails-to-your-project-links-for-better-seo-5gca) by me
