"use strict";
function graduation(student) {
    if (student.score == 100 && student.attendance >= 80) {
        return `Selamat ${student.name} lulus dengan nilai cumlaude `;
    }
    else if (student.score >= 70 && student.attendance >= 70) {
        return ` Selamat ${student.name} anda lulus `;
    }
    else {
        return `Maaf ${student.name} anda tidak lulus`;
    }
}
const allStudents = [
    {
        name: "John",
        score: 80,
        attendance: 90,
    },
    {
        name: "Jane",
        score: 60,
        attendance: 90,
    },
    {
        name: "Alice",
        score: 100,
        attendance: 85,
    },
];
allStudents.forEach((student) => {
    console.log(graduation(student));
});
//# sourceMappingURL=index.js.map