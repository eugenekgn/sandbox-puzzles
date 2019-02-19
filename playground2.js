var assert = require('assert');

const mimeTypes = {
  doc: '',
  docx: '',
  txt: 'text/plain',
  pdf: ''
}

const mimeTypesForWeb = {
  html: 'text/html',
  jpg: 'image/jpeg',
  png: 'image/png',
  mp4: 'video/mp4',
  json: 'application/json',
  js: 'application/javascript',
  ec: 'application/ecmascript'
}

const getFileMimeTypes = () => {
}

describe('Get Correct mime types', () => {
  it('get correct mime type for text files', () => {
    assert.equal(getFileMimeTypes(['.txt']), 'text/plain');
  });
  it('should get the latest Microsoft Word Document format', () => {
    assert.equal(getFileMimeTypes(['.doc', '.docx']), '');
  });
});