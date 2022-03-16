# Career Connection

## Career Connection

Now you're really bringing everything together&mdash;the entire MERN stack. You now know how to build a full-stack application in essentially two different ways:

- Templating (by using an Express server and Handlebars.js)

- By using an Express.js RESTful server that sends JSON

There's also a third way: using a GraphQL server. You can check out the [official GraphQL website](https://graphql.org/).

That's a lot that you've learned in just under 6 months, so take a moment and relish in that. And then let's take a look at the growth of GraphQL's popularity in the past year and why it's worth having an introductory knowledge of what it is, how it works, and how to build a server using it.

### Look to the Future

GraphQL was developed by Facebook, and was released relatively recently as an open-source product for all developers to use. But why? And why should we care? An Express RESTful server works just fine, doesn't it? 

Consider the following interviewing scenario:

> You're interviewing with a small start-up company that is implementing a GraphQL server for the application. You've had some experience with this in boot camp, so you apply for the job. They see GraphQL listed on your resume and invite you for an interview. You've let them know how cool it is that they're using GraphQL because it's a new and popular technology, and you've talked up your experience in building a few servers with it. Then you're asked the question, "Why do you think GraphQL is better than a RESTful server with Express anyway?"

Take a minute and jot down any thoughts you have. Then continue reading.

The keyword you might use here is **overfetching**.

But what is overfetching? Let's say you're building an application that lets a user log their favorite movies, and you want to make a GET request to get all of a user's favorite movies. In an Express RESTful server, we don't specify exactly which movie data we want back, so we will likely get everything that's in the database, including the movie name, release year, actors, cover picture, and so on. But if we use a GraphQL server, we could specify that all we want back is the name column.

GraphQL lets the client decide which data it needs and then makes a single request to the server. This results in less server usage, quicker response times, and an overall better user experience. _This_ is why you want that GraphQL development job!

### Prepare for the Technical Interview

Many companies use algorithm questions during the technical interview. We strongly recommend that you practice these. Doing so will prepare you to handle some of the most common questions in an interview or promotion discussion.

Please refer to the class repository to find these algorithms:

- Coding Algorithm #1: Plus One

- Coding Algorithm #2: Sum Array Digits

- Coding Algorithm #3: Caesar Cipher

For practice in a live, interview-style IDE, complete the following algorithm challenge. Once you start, you'll have 7 days to complete it. After the 7 days have elapsed, the challenge will close.

- CodeSignal Algorithm: [disemvowel](https://app.codesignal.com/public-test/muLKxQ9LXTWtufeXX/jZiFpbXwCTErvS)

### Career Services Events

If you want to learn more about the technical interviewing process and practice algorithms in a mock interview setting, attend one of our [upcoming workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp)!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
