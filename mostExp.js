// Find engineers that have the most experience by age, if there are two engineers with the same age both should be retrieved in the same order as they appear
var assert = require("assert");
const engineers = [
  {
    firstName: "Cesar",
    lastName: "Devers",
    country: "Dominican Republic",
    continent: "North America",
    age: 29,
    language: ["JavaScript", "CSS", "Swift"]
  },
  {
    firstName: "Iskandar",
    lastName: "Rafaev",
    country: "Tajikistan",
    continent: "Asia",
    age: 33,
    language: ["C#", "JavaScript", "PHP"]
  },
  {
    firstName: "Eugene",
    lastName: "Kagan",
    country: "Belarus",
    continent: "Europe",
    age: 31,
    language: ["JavaScript", "C#"]
  },
  {
    firstName: "Sam",
    lastName: "engineers",
    country: "United States",
    continent: "North America",
    age: 31,
    language: ["Ruby"]
  },
  {
    firstName: "Richard",
    lastName: "Kroon",
    country: "Australia",
    continent: "Australia",
    age: 33,
    language: ["C#", "JavaScript"]
  }
];

const getEngineersByMostExperience = engineers => {};

describe("Engineers", () => {
  it("should get engineer(s) with most experience", () => {
    const results = [
      {
        firstName: "Iskandar",
        lastName: "Rafaev",
        country: "Tajikistan",
        continent: "Asia",
        age: 33,
        language: ["C#", "JavaScript", "PHP"]
      },
      {
        firstName: "Richard",
        lastName: "Kroon",
        country: "Australia",
        continent: "Australia",
        age: 33,
        language: ["C#", "JavaScript"]
      }
    ];

    assert.deepEqual(getEngineersByMostExperience(engineers), results);
  });
});
