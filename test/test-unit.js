process.env.NODE_ENV = 'test';

const uuidv4 = require('uuid/v4');
const chai = require('chai');
const path = require('path');
const fs = require('fs');
const request = require('request');

const lib = require('../lib');

chai.should();

describe('lib.ClearDir() tests', function () {
    const target_path = path.resolve(__dirname, uuidv4());
    it('should clear the specified directory', (done) => {
        fs.mkdir(target_path, { recursive: true }, (err) => {
            if (err) {
                console.error(err);
            } else {
                request('https://img1.mukewang.com/szimg/59c860220001247d05400300-360-202.jpg')
                    .pipe(
                        fs.createWriteStream(path.resolve(target_path, 'test.jpg'))
                    )
                    .on('close', () => {
                        lib.ClearDir(target_path);
                        fs.rmdir(target_path, (err) => {
                            if (err) {
                                console.error(err)
                            }
                            Boolean(err).should.equal(false)
                        })
                    });
            }
            done()
        });
    }).timeout(100000);
});