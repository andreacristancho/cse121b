//w05_Course.js

const aCourse = {
  code: "CSE121n",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },

    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  init() {
    setCourseInfo(this);
    renderSections(this.sections);
  },

  changeEnrollment: function (sectionNum, add = true) {
    //find the right section...Arra.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  },
};

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.Code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

export default aCourse;

//document.querySelector("#enrollStudent").addEventListener("click", function () {
//  const sectionNum = document.querySelector("#sectionNumbner").value;
//  aCourse.changeEnrollment(sectionNum);
//});
//
//document.querySelector("#dropStudent").addEventListener("click", function () {
//  const sectionNum = document.querySelector("sectionNumber".value);
//  aCourse.changeEnrollment(sectionNum, false);
//});
//
//setCourseInfo(aCourse);
//renderSections(aCourse.sections);
