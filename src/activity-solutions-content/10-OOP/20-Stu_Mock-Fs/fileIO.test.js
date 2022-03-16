const FileIO = require('./fileIO');
const fs = require('fs');

jest.mock('fs');

describe('FileIO', () => {
  let fileIO;

  beforeEach(() => {
    jest.clearAllMocks();
    fileIO = new FileIO();
  });

  describe('Initialization', () => {
    test('should initialize a new FileIO object', () => {
      expect(fileIO).toEqual({});
      expect(fileIO).toBeInstanceOf(FileIO);
    });
  });

  describe('read', () => {
    test('should call readFileSync with the expected arguments', () => {
      fs.readFileSync.mockReturnValue('this is a mock!');

      const dataFromFile = fileIO.read('foo.txt');

      expect(dataFromFile).toEqual('this is a mock!');
      expect(fs.readFileSync).toHaveBeenCalledWith('foo.txt', 'utf8');
    });
  });

  describe('write', () => {
    test('should call writeFileSync with the expected arguments', () => {
      fs.writeFileSync.mockReturnValue('success');

      const result = fileIO.write('foo.txt', 'This is a mock to write');

      expect(result).toEqual('success');
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        'foo.txt',
        'This is a mock to write'
      );
    });
  });
});
