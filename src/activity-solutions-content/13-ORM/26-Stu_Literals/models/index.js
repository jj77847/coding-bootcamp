const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'SET NULL',
});

module.exports = { Reader, Book, LibraryCard };
