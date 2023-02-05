BASE_URL = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

async function fetchDataFromAPI() {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    // console.log(data)
    
    let averageGradeHigherThan3 = data.filter(grade => grade.averageGrade > 3);
    console.log("This are students with an average grade higher than 3:", averageGradeHigherThan3);
    
    let femaleStudentNames = data
                                .filter(students => students.gender === "Female")
                                .filter(grade => grade.averageGrade === 5)
                                .map(students => students.firstName);
    console.log("This are female students names with an average grade of 5:", femaleStudentNames);
    
    let maleStudentFullNames = data
                                    .filter(students => students.gender === "Male")
                                    .filter(students => students.age >= 18)
                                    .map(students => `${students.firstName} ${students.lastName}`);
    console.log("This are the male students full names who live in Skopje and are over 18 years old:", maleStudentFullNames);
    
    let femaleAverageGrades = data
                                .filter(students => students.gender === "Female")
                                .filter(students => students.age >= 24)
                                .map(students => students.averageGrade);
    console.log("This are the average grades of all female students over the age of 24:", femaleAverageGrades);

    let maleStudensNameB = data
                             .filter(students => students.gender === "Male")
                             .filter(students => students.firstName.charAt(0) === "B")
                             .filter(grade => grade.averageGrade > 2)
    console.log("This are all male students with a name starting with B and average grade over 2:", maleStudensNameB)
}

fetchDataFromAPI();

