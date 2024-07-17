var grades = {
  jan: [
    {
      name: "الإجراءات الجنائية",
      grade: "جيد جدا",
      deg: 16,
    },
    {
      name: "التطبيقات العملية",
      grade: "ممتاز",
      deg: 18,
    },
    {
      name: "قانون المرافعات",
      grade: "مقبول",
      deg: 12,
    },
    {
      name: "القانون الزراعى", //156
      grade: "جيد جدا",
      deg: 16,
    },
    {
      name: "القانون المدنى", //157
      grade: "مقبول",
      deg: 10,
    },
    {
      name: "القانون الدولى الخاص",
      grade: "مقبول",
      deg: 10,
    },
  ],
  may: [
    {
      name: "أصول الفقة",
      grade: "جيد",
      deg: 14,
    },
    {
      name: "القانون التجارى",
      grade: "جيد",
      deg: 12,
    },
    {
      name: "القانون البحرى و الجوى", // 154
      grade: "جيد جدا",
      deg: 16,
    },
    {
      name: "العقود الإدارية", // قنن 182
      grade: "ممتاز",
      deg: 18,
    },
    {
      name: "[قنن 208] الإقتصاد",
      grade: "مقبول",
      deg: 10,
    },
  ],
};
/**
 * مقبول 10-12
 * ممتاز18-20
 * جيد12-14
 * جيد جدا14-17
 * ضعيف6-10
 * ضعيف جدا1-5
 *
 */

let f = document.forms["AcademicYear"];
let btn = f.showresualt;
f.addEventListener("submit", function (e) {
  e.preventDefault();
});
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let may = document.getElementById("may");
  let jan = document.getElementById("Jan");

  let sem = f.test.value;
  if (sem === "may") {
    console.log(may);
    jan.style.display = "none";
    may.style.display = "block";
  }
  if (sem === "Jan") {
    console.log(jan);
    may.style.display = "none";
    jan.style.display = "block";
  }
  // let selectedYear = f.year.value;
  // let selectedSemester = f.semester.value;
});
