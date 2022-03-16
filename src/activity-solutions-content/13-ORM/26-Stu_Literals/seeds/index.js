const sequelize = require('../config/connection');
const { Reader, Book, LibraryCard } = require('../models');

const readerSeedData = require('./readerSeedData.json');
const bookSeedData = require('./bookSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('Connected to DB successfully');

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
  });

  console.log('Successfully seeded readers');

  for (const { id } of readers) {
    const newCard = await LibraryCard.create({
      reader_id: id,
    });
  }

  console.log('Successfully seeded library cards');

  for (const book of bookSeedData) {
    const newBook = await Book.create({
      ...book,
      reader_id: readers[Math.floor(Math.random() * readers.length)].id,
    });
  }

  console.log('Successfully seeded library books');

  process.exit(0);
};

seedDatabase();
