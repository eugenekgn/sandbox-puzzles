var assert = require("assert");

const mimeTypes = {
  doc: "application/msword",
  docx:
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt: "text/plain",
  pdf: "application/pdf"
};

const getFileMimeTypes = () => {};

describe("Get Correct mime types", () => {
  it("get correct mime type for text files", () => {
    assert.equal(getFileMimeTypes([".txt"]), "text/plain");
  });
  it("get correct mime type for text and pdf files", () => {
    assert.equal(
      getFileMimeTypes([".txt", "pdf"]),
      `${mimeTypes.txt},${mimeTypes.pdf}`
    );
  });
  it("should get the latest Microsoft Word Document format", () => {
    assert.equal(getFileMimeTypes([".doc", ".docx"]), DOCX);
  });
});
