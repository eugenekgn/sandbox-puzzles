const bowery = [
  { id: "john", parent: "null" },
  { id: "cesar", parent: "null" },
  { id: "noah", parent: "null" },
  { id: "james", parent: "noah" }
  { id: "eugene", parent: "cesar" },
  { id: "richard", parent: "cesar" },
  { id: "j3", parent: "richard" },
  { id: "sharif", parent: "james" }
  { id: "lee", parent: "sharif" }
  
];

const output = {
  john: {},
  noah: {
    james: {
      sharif: {
        lee: {}
      }
    }
  },
  cesar: {
    richard: {
      j3: {}
    },
    eugene: {
      madeline: {}
    }
  }
};
