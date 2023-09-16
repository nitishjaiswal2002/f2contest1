let data= [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  console.log(developers);
}

// 2. Add Data
function addData() {
  const newData = { name: "newName", age: 30, profession: "newProfession" };
  data.push(newData);
  console.log("Data added:", newData);
}

// 3. Remove Admins
function removeAdmin() {
  //Write your code here, just console.log
  const removedAdmins = data.filter((person) => person.profession !== "admin");
  data = removedAdmins;
  console.log("Removed admins:", removedAdmins);
}

// 4. Concatenate Array
function concatenateArray() {
  const additionalData = [
    { name: "alice", age: 22, profession: "designer" },
    { name: "bob", age: 29, profession: "developer" },
  ];
  const concatenatedData = data.concat(additionalData);
  console.log("Concatenated Array:", concatenatedData);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average Age:", average);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some(person => person.age > 25);
  console.log("Age above 25:", above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex(person => person.name === "john");
  if (johnIndex !== -1) {
    data[johnIndex].profession = "newProfession";
    console.log("John's Profession Updated.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCounts = {};
  data.forEach(person => {
    if (professionCounts[person.profession]) {
      professionCounts[person.profession]++;
    } else {
      professionCounts[person.profession] = 1;
    }
  });
  console.log("Profession Count:", professionCounts);
}