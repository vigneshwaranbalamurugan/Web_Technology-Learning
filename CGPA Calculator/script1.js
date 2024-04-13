function addSemester() {
    var sem = document.getElementById('semesterInputs');
    var numOfSem = sem.getElementsByClassName('semester').length;
    if (numOfSem < 8) {
        var input = document.createElement('input');
        var label=document.createElement('label');
        label.innerHTML=`Semester ${numOfSem+1}`;
        input.type = 'number';
        input.className = 'semester';
        input.placeholder = 'Enter CGPA semester ' + (numOfSem + 1) + ' (0-10)';
        sem.appendChild(label);
        sem.appendChild(input);

    }
    else{
        alert('Only 8 Semester valid')
    }
}

function calculateCGPA() {
    var sem = document.getElementsByClassName('semester');
    var numOfSem = sem.length;


    var CGPA = 0;
    var Grades = 0;

    for (var i = 0; i < numOfSem; i++) {
        var grade = parseFloat(sem[i].value);
        if (isNaN(grade) || grade < 0 || grade > 10) {

            document.getElementById('result').innerHTML = 'Please enter valid grades (0-10) for all semesters.';
            return;
        }
        if (numOfSem < 2) {
            document.getElementById('result').innerHTML = 'Please enter at least 2 semesters.';
            return;
        }
        CGPA += grade;
        Grades++;
    }

    var finalCGPA = CGPA / Grades;
    document.getElementById('result').innerHTML = 'Your CGPA for all semesters is: ' + finalCGPA.toFixed(2);
}