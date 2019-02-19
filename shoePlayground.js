const shoeCollection = {
  product: {
    cto: {
      cesar: ["viberg", "boss", "nike"]
    },
    developers: {
      richard: ["puma", "addidas", "zara"],
      eugene: ["nike", "john varvatos", { editions: ["v3", "v2"] }]
    },
    product: {
      justin: ["new balance"]
    }
  },
  appraisers: {
    james: ["gucci", "nike"],
    lee: ["john varvatos"],
    tom: ["pf flyers", "nike", { editions: ["v1", "v2"] }]
  }
};

const result = {
  cesar: {
    shoes: [{ viberg: 0 }, { boss: 0 }, { nike: 1 }]
  },
  eugene: {
    shoes: [
      { "nike v3": 0 },
      { "nike v2": 1 },
      { "john varvatos v2": 0 },
      { "john varvatos v3": 0 }
    ]
  }
};
