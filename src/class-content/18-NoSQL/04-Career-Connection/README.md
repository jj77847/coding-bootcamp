# Career Connection

## Career Connection

This week, you're learning about NoSQL databases, a cutting-edge technology that is being quickly adopted by enterprise companies around the world as a quick and easy way to create new applications. Specifically, you're learning about MongoDB, along with an ORM called Mongoose.

NoSQL databases are growing in popularity, but they are not immune to criticism, such as the following:

- **NoSQL databases are less mature than SQL databases**: SQL databases have been around a long time, and are reliable and predictable. However, a SQL database is not the right solution to every problem.

- **Building indexes in NoSQL is a slow process**: If you have a large number of documents in a NoSQL database, the first build of an index will indeed be very slow.

- **Repetition of data**: Using SQL, you can create a table of authors and books, which you relate to a single bookOwner table. In a NoSQL database, you essentially must add the author and book to every owner that owns that book, which means you can end up with a lot of duplicate entries.

- **ACID vs. BASE**: This one is tricky, so bear with us. ACID stands for Atomic, Consistent, Isolation, and Durable, and it refers to the guarantee that you get with most SQL databases. It means that the database has to wait for the data to hit the storage disk before returning a successful completion response to the client. This assures that the data is stored and written, but it also means that the client may have to wait a while for the response. On the other hand, NoSQL databases are characterized by BASE -- Basically Available, Soft State, and Eventually Consistent. Eventual consistency is faster because the application doesn't need to wait to see if the write persisted. If the data store captures the write before it is persisted to disk, it returns succcess to the client and moves on to the next operation. The gain is performance advantage and experience for the client, but at the cost of possibly losing the data in an error condition.

NoSQL databases have many advantages, including the following:

- They can handle large volumes of structured and semi-structured data.

- They're great for agile sprints, quick iteration, and frequent code modifications.

- They make it easy to implement object-oriented coding paradigms, such as ES6 JavaScript class syntax.

- They're efficient and cost-effective.

This should give you some information to take with you into an interview. Remember that if you're going into a technical interview, it helps to know the types of databases the employer uses and to have some opinions on what you think is good or bad, and why.

### Look to the Future

Take some time now to envision your future as a full-stack web developer, and complete the following task so you can be ready to get a job in just a few months.

It helps to know what the discussion at-large is around topics that might arise during an interview. This week, we encourage you to find and read 2-3 recent articles about SQL and NoSQL in order to get a sense of the popular (and unpopular!) opinions about them. Study the arguments surrounding the discussion. Here is one you can get started with: [SQL vs. NoSQL: How Are They Different and What Are the Best SQL and NoSQL Database Systems?](https://www.xplenty.com/blog/the-sql-vs-nosql-difference/)

Even after you've found work as a developer, it's a good idea to stay informed about current trends and any controversy surrounding them.

### Technical Interview Preparation

Many companies use algorithm questions during the technical interview. We strongly recommend that you practice these. 

Please refer to the class repository to find these algorithms:

- Coding Algorithm #1: Valid Brackets

- Coding Algorithm #2: Min Increment for Unique

- Coding Algorithm #3: Peak Finder

For practice in a live, interview-style IDE, complete the following algorithm challenge. Once you start, you'll have seven days to complete the challenge. After that, the challenge closes.

- CodeSignal Algorithm: [Word Tumble](https://app.codesignal.com/public-test/W38trZ3bQdqpabN2X/SvJ3vebQ5oLSJu)

### Career Services Events

If you're interested in learning more about the technical interview process and practicing algorithms in a mock interview setting, attend one of our [upcoming career services workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp)!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
