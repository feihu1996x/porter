process.env.NODE_ENV = 'test';

const uuidv4 = require('uuid/v4');
const chai = require('chai');
const path = require('path');

chai.should();

describe('lib.ClearDir() tests', function () {
    const target_path = path.resolve(__dirname, uuidv4());
    it('should clear the specified directory', () => {
        
    }).timeout(100000);
});