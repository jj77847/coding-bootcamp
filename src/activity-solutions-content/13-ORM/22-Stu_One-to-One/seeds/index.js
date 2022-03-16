const connection = require('../config/connection');
const { Reader, LibraryCard } = require('../models');

const readerSeedData = require('./readerSeedData.json');

const seedDatabase = async () => {
  await connection.sync({ force: true });

  console.log('Connected to the DB successfully');

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
  });

  console.log('Successfully seeded readers');

  for (const { id } of readers) {
    await LibraryCard.create({
      reader_id: id,
    });
  }

  console.log('Successfully seeded library cards');

  process.exit(0);
};

seedDatabase();
