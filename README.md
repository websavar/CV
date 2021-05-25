# CV App 
- [Goal](#goal)
- [User Stories](#user-stories)
- [Dependencies](#dependencies)
- [Setup and Run](#setup-run)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<a name="#goal"></a>
## Goal
Create a simple and dynamic website with modern JavaScript framework (React) that displays my ability and creativity. This is a SPA (Single Page Application) that services my CV with links to projects, recommendations and something about me.

<a name="#user-stories"></a>
## User stories
- Build a separate column (Header) includes the Summary of user information and the list of application menus.
- Create a user-friendly interface for each section of the resume.
- All main sections are smoothly accessible in one page.
- Portfolio details are available on their dedicated page.
- The app doesn't refresh by going to other pages.
- All user data is dynamically get from a database (API).

<a name="#dependencies"></a>
## Dependencies
- [AOS](https://github.com/michalsnik/aos): Animate On Scroll Library.
- [Bootstrap](https://getbootstrap.com/): To design and customize responsive mobile-first sites (version 5).
- [axios](https://github.com/axios/axios): A promise-based HTTP Client for node.js and the browser.
- [json-server](https://github.com/typicode/json-server): Get a full fake `REST API` (for front-end developers who need a quick back-end for prototyping and mocking.)
- [node-sass](https://www.npmjs.com/package/node-sass): Allows you to natively compile `.scss` files to `css`.
- [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link): A solution to React Router's issue of not scrolling to `#hash-fragments` when using the `<Link>` component to navigate.
- [swiper](https://swiperjs.com/): The most modern free mobile touch slider.

<a name="#setup-run"></a>
## Setup and run
1. Run `npm install` to install required dependencies
2. Run `npm run backend` to run the json database on http://localhost:5000/content
3. Run `npm run start` to run the project and Open http://localhost:3000
