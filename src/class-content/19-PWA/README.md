# Unit 19: Progressive Web Applications (PWA)

## Overview

In this unit, you'll learn about Progressive Web Apps (PWAs), which blend the benefits of a traditional browser experience with those of a mobile application. PWAs use the Service Worker and Cache APIs to cache assets and API responses, which ensures that the application will continue to work without an internet connection.

Many of the tools and technologies used to create PWAs can be leveraged to help improve application performance and accessibility. One of these tools is services workers, which can be used to cache static CSS, JavaScript, HTML files, images, and even API requests. This allows developers to reduce network bandwidth and improve overall load times.

In previous units, you learned that JavaScript runs on a single thread, which is something that developers need to consider with regard to performance. The good news is that service workers run on a completely different thread.

To unlock the power of service workers, you will use webpack and workbox. Workbox is a Google library that makes it much easier to set up a service worker. By using webpack, you can deliver applications with optimized code, called bundles. Webpack also allows you to implement CSS loaders to make your CSS files more modular. 

You will also implement Babel, a transpiler that allows you to use ES6 syntax in the browser. Finally, you will learn how to use webpack plugins.

## Key Topics

The following topics will be covered in this unit:

* [Lighthouse](https://developers.google.com/web/tools/lighthouse)

* [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

* [Webpack](https://webpack.js.org/concepts/)

* [ES6 Import Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

* [CSS loaders](https://www.npmjs.com/package/css-loader)

* [Babel](https://babeljs.io/)

* [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

* [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

* [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

* [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

* [Workbox](https://developers.google.com/web/tools/workbox)

* [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

* [Workbox routing](https://developers.google.com/web/tools/workbox/modules/workbox-routing)

* [Workbox strategies](https://developers.google.com/web/tools/workbox/modules/workbox-strategies)

* [Concurrently](https://www.npmjs.com/package/concurrently)

* [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

* [idb](https://www.npmjs.com/package/idb)

* [Manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

* [WebpackPwaManifest](https://www.npmjs.com/package/webpack-pwa-manifest)

## Learning Objectives

You will be employer-ready if you are able to:

* Recognize which metrics in a Lighthouse audit affect page load times.

* Identify the main purpose of a module bundler like webpack.

* Set up webpack dependencies in an application using npm scripts.

* Create a bundle and use it to provide interaction for a webpage.

* Compare webpack in development vs. production mode.

* Extend webpack’s functionality for non-JavaScript files, transpile modern JavaScript for older browsers, and automate bundle output file names.

* Create an `index.html` file using a template with a webpack plugin to automate bundle insertion.

* Implement service workers to a web application.

* Leverage caching strategies to optimize performance.

* Execute a full-stack application with a server and client-side development server.

* Implement IndexedDB inside of a JavaScript application.

* Implement CREATE, READ, UPDATE, and DELETE commands for an IndexedDB instance.

* Convert an existing application into a Progressive Web Application (PWA).

* Deploy a PWA to Heroku.

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the `📹 Let's Code` video for tips and tricks on how to solve the algorithm.

* [01: Is Armstrong](./03-Algorithms/01-is-armstrong/README.md)

  * [📹 Let's Code Is Armstrong](https://2u-20.wistia.com/medias/qpq5grsk37)

* [02: Max Profit](./03-Algorithms/02-max-profit/README.md)

* [03: Smallest Difference](./03-Algorithms/03-smallest-difference/README.md)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [Unit 19 Technical Interview Questions](https://forms.gle/FAgrQSCzrJxN6sj89)

## Homework

For this unit's homework, you'll build a simple text editor with JavaScript syntax highlighting. The text editor will be a Progressive Web Application, which will enable users to install and use it offline. The application will be bundled with webpack and take advantage of Babel to use modern JavaScript on the browser.

## Career Connection

Career services material for this unit is located in the [Career Connection folder](./04-Career-Connection/README.md). For more information about career services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [career services website](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Heads-Up

Next week, you will get your first introduction to React, a front-end library created by Facebook. React will take your front-end web development skills to the next level. You will get to learn all about components, state, hooks, and much more. Get ready because React is a hot commodity in the software engineering field!

## Resources

Here are some additional resources to help you understand the topics covered in this unit.

### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the Git Guide Video for an additional walkthrough of the Git concept.

  * 📖 [Git Guide: Git Hooks](./01-Activities/27-Evr_Git-Hooks/README.md)

  * 📹 [Git Guide Video: Git Hooks](https://2u-20.wistia.com/medias/xpb67vj99g)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
