// CODE here for your Lambda Classes


// ======================= THESE ARE THE CLASSES ========================

class Person{ //This is the base Class
    constructor(personAtts){
        this.name = personAtts.name;
        this.age = personAtts.age;
        this.location = personAtts.location;
        this.gender = personAtts.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person{
    constructor(instructorAtts){
        super(instructorAtts);
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradePoints(student){
        let points = Math.ceil(Math.random() * 100)
        if (student.grade >= 100){
            student.grade -= points;
            return `${points} points are subtracted from ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}`;
        } else {
            student.grade += points;
            return `${points} points are added to ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}`;
        }
    }
}


class Student extends Person{
    constructor(studentAtts){
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
        this.grade = studentAtts.grade;        
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}



class ProjectManager extends Instructor{
    constructor(managerAtts){
        super(managerAtts);
        this.gradClassName = managerAtts.gradClassName;
        this.favInstructor = managerAtts.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// ==================== ENDS CLASSES =======================


// ==================== THESE ARE THE OBJECTS =====================


const kyle = new Instructor({
    name: 'Kyle',
    age: 20,
    location: 'Utah',
    gender: 'Male',
    specialty: 'Everything Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Do you even Javascript bro?'
})


const sarah = new Instructor({
    name: 'Sarah',
    age: 23,
    location: 'Georgia',
    gender: 'Female',
    specialty: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: 'Style is life!'
})


const bob = new Student({
    name: 'Bob',
    age: 30,
    location: 'Florida',
    gender: 'Male',
    previousBackground: 'Sheet Metal',
    classname: 'WEB40',
    favSubjects: ['React', 'Javascript', 'HTML'],
    grade: 20
})

const taylor = new Student({
    name: 'Taylor',
    age: 25,
    location: 'California',
    gender: 'Female',
    previousBackground: 'Sales',
    classname: 'WEB30',
    favSubjects: ['Python', 'CSS', 'Javascript'],
    grade: 20
})


const hill = new ProjectManager({
    name: 'Hill',
    age: 35,
    location: 'Louisiana',
    gender: 'Male',
    gradClassName: 'WEB10',
    favInstructor: 'Whitney'
})

const billy = new ProjectManager({
    name: 'Billy',
    age: 38,
    location: 'Alabama',
    gender: 'Male',
    gradClassName: 'WEB12',
    favInstructor: 'Anjelica'
})


// ===================== ENDS OBJECTS =======================



console.log(billy.speak());
console.log(kyle.demo('Javascript'));
console.log(sarah.grade(taylor, 'CSS'));
console.log(bob.listsSubjects());
console.log(taylor.PRAssignment('React'));
console.log(taylor.sprintChallenge('Javascript'));
console.log(hill.standUp('Web25'));
console.log(billy.debugsCode(bob, 'CSS'));
console.log(billy.gradClassName);
console.log(sarah.gradePoints(taylor));
console.log(sarah.speak());