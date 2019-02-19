// Find engineers that have the most experience, if there are two engineers with the exactly the same number of years of experience both should be retrieved in the same order as they appear in the array
var assert = require("assert");
const engineers = [
  {
    firstName: "Cesar",
    lastName: "Devers",
    country: "Dominican Republic",
    continent: "North America",
    experience: 1,
    language: ["JavaScript", "CSS", "Swift"]
  },
  {
    firstName: "Iskandar",
    lastName: "Rafaev",
    country: "Tajikistan",
    continent: "Asia",
    age: 14,
    language: ["C#", "JavaScript", "PHP"]
  },
  {
    firstName: "Eugene",
    lastName: "Kagan",
    country: "Belarus",
    continent: "Europe",
    experience: 10,
    language: ["JavaScript", "C#"]
  },
  {
    firstName: "Sam",
    lastName: "engineers",
    country: "United States",
    continent: "North America",
    experience: 31,
    language: ["Ruby"]
  },
  {
    firstName: "Richard",
    lastName: "Kroon",
    country: "Australia",
    continent: "Australia",
    experience: 14,
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
