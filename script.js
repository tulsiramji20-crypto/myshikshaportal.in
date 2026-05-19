function hideAll() {

    document.getElementById("studentsSection").style.display = "none";

    document.getElementById("formSection").style.display = "none";

    document.getElementById("documentSection").style.display = "none";

    document.getElementById("admissionSection").style.display = "none";

    document.getElementById("markSection").style.display = "none";

    document.getElementById("reportSection").style.display = "none";

    document.getElementById("admissionFilterBox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    function showDashboard() { hideAll(); }

    function showStudents() {

    hideAll();

    document.getElementById("studentsSection").style.display = "block";

    document.querySelector(".top-box").style.display = "flex";

    document.getElementById("tableBox").style.display = "none";
}

   function showForm() {

    hideAll();

    document.querySelector(".top-box").style.display = "none";

    document.getElementById("tableBox").style.display = "none";

    document.getElementById("studentsSection").style.display = "block";

     document.getElementById("formSection").style.display = "block";
    }

    function showDocument() {
        hideAll();
        document.getElementById("documentSection").style.display = "block";
    }
   function showAdmission() {

    hideAll();

    document.getElementById("admissionFilterBox").style.display = "block";

    document.getElementById("admissionSection").style.display = "block";
}

    function showMark() {

    hideAll();

    document.querySelector(".top-box").style.display = "none";

     document.getElementById("markSection").style.display = "block";
    }

    window.showDashboard = showDashboard;
window.showStudents = showStudents;
window.showForm = showForm;
window.showDocument = showDocument;
window.showAdmission = showAdmission;
window.showMark = showMark;
    

    window.printForm = () => window.print();
});


/* ---------- SAVE DATA ---------- */
function saveData(event) {
    event.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        name_hindi: document.getElementById("name_hindi").value,
        father: document.getElementById("father").value,
        father_hindi: document.getElementById("father_hindi").value,
        mother: document.getElementById("mother").value,
        mother_hindi: document.getElementById("mother_hindi").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        category: document.getElementById("category").value,
        mobile: document.getElementById("mobileNumber").value,


        id: document.getElementById("id").value,
        samagra: document.getElementById("samagraId").value,
        aadhaar: document.getElementById("aadhaar").value,
        studentClass: document.getElementById("class").value,
        apaar: document.getElementById("apaarId").value,
        pen: document.getElementById("penNumber").value,
        admissionDate: document.getElementById("admissionDate").value,
        prevSchool: document.getElementById("prevSchool").value,
        prevClass: document.getElementById("prevClass").value,
        dbt: document.getElementById("dbt").value,

        type: document.getElementById("hostel").value,

        address: document.getElementById("address").value,
        village: document.getElementById("village").value,
        district: document.getElementById("district").value,
        post: document.getElementById("post").value,
        tehsil: document.getElementById("tehsil").value,
        pincode: document.getElementById("pincode").value,
        email: document.getElementById("email").value
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    loadStudents();
    event.target.reset();

    alert("Student Added Successfully ✅");

    showStudents();
    document.getElementById("tableBox").style.display = "block";
}


/* ---------- LOAD TABLE ---------- */
function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("studentList");

    if (!table) return;

    table.innerHTML = "";

    students.forEach((s, index) => {
        table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.name_hindi}</td>
            <td>${s.father}</td>
            <td>${s.father_hindi}</td>
            <td>${s.mother}</td>
            <td>${s.mother_hindi}</td>
            <td>${s.dob}</td>
            <td>${s.gender}</td>
            <td>${s.category}</td>
            <td>${s.mobile}</td>
            <td>${s.id}</td>
            <td>${s.samagra}</td>
            <td>${s.aadhaar}</td>
            <td>${s.studentClass}</td>
            <td>${s.apaar}</td>
            <td>${s.pen}</td>
            <td>${s.admissionDate}</td>
            <td>${s.prevSchool}</td>
            <td>${s.prevClass}</td>
            <td>${s.dbt}</td>
            <td>${s.account}</td>
            <td>${s.ifsc}</td>
            <td>${s.bank}</td>
            <td>${s.type}</td>
           
            <td>
                <button onclick="editStudent(${index})">✏️</button>
                <button onclick="deleteStudent(${index})">🗑️</button>
            </td>
        </tr>
        `;
    });
}


/* ---------- SEARCH ---------- */
function filterByClass() {

    let selected = document.getElementById("classFilter").value;

    let tableBox = document.getElementById("tableBox");

    tableBox.style.display = "block";

    loadStudents();

    let rows = document.querySelectorAll("#studentList tr");

    rows.forEach(row => {

        let classCell = row.children[13];

        if (!classCell) return;

        let classText = classCell.innerText;

        if (selected === "all") {
            row.style.display = "";
        } else {
            row.style.display = (classText === selected) ? "" : "none";
        }
    });
}
/* ---------- CLEAR ---------- */
function clearFilter() {
    document.getElementById("classFilter").value = "";
    document.getElementById("tableBox").style.display = "none";

    let rows = document.querySelectorAll("#studentList tr");
    rows.forEach(row => row.style.display = "");
}


/* ---------- MISSING FUNCTIONS FIX ---------- */
function showTeachers(){ hideAll(); alert("Teachers page abhi nahi bana hai"); }
function showResults(){ hideAll(); alert("Results page abhi nahi bana hai"); }

function showReport(){ hideAll(); alert("Report Card abhi nahi bana hai"); }
function showProfile(){ hideAll(); alert("Profile page abhi nahi bana hai"); }



/* ---------- ACTIVE MENU FIX ---------- */
function setActive(el) {
    let items = document.querySelectorAll(".sidebar li");
    items.forEach(i => i.classList.remove("active"));
    el.classList.add("active");
}
function toggleDocumentMenu() {

    let menu = document.getElementById("documentMenu");

    if(menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function showDocumentShow(){

    hideAll();

    alert("Document Show Page Abhi Nahi Bana");
}
/* =========================
   ADMISSION FILTER
========================= */

function loadAdmissionStudents() {

    let selectedClass =
        document.getElementById("admissionClassFilter").value;

    let studentSelect =
        document.getElementById("admissionStudentFilter");

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    studentSelect.innerHTML =
        '<option value="">-- Select Student --</option>';

    students.forEach((s, index) => {

        if (s.studentClass === selectedClass) {

            studentSelect.innerHTML += `
                <option value="${index}">
                    ${s.name}
                </option>
            `;
        }
    });
}

function showAdmissionStudent() {

    let index =
        document.getElementById("admissionStudentFilter").value;

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    let s = students[index];

    if (!s) return;

    document.getElementById("a_name").innerText = s.name || "";
    document.getElementById("a_name_hindi").innerText = s.name_hindi || "";

    document.getElementById("a_father").innerText = s.father || "";
    document.getElementById("a_father_hindi").innerText = s.father_hindi || "";

    document.getElementById("a_mother").innerText = s.mother || "";
    document.getElementById("a_mother_hindi").innerText = s.mother_hindi || "";

    document.getElementById("a_dob").innerText = s.dob || "";
    document.getElementById("a_gender").innerText = s.gender || "";

    document.getElementById("a_category").innerText = s.category || "";

    document.getElementById("a_mobile").innerText = s.mobile || "";

    document.getElementById("a_id").innerText = s.id || "";

    document.getElementById("a_samagraId").innerText = s.samagra || "";

    document.getElementById("a_aadhaar").innerText = s.aadhaar || "";

    document.getElementById("a_class").innerText = s.studentClass || "";

    document.getElementById("a_apaarId").innerText = s.apaar || "";

    document.getElementById("a_penNumber").innerText = s.pen || "";

    document.getElementById("a_admissionDate").innerText =
        s.admissionDate || "";

    document.getElementById("a_prevSchool").innerText =
        s.prevSchool || "";

    document.getElementById("a_prevClass").innerText =
        s.prevClass || "";

    document.getElementById("a_dbt").innerText =
        s.dbt || "";

    document.getElementById("a_hostel").innerText =
        s.type || "";

    document.getElementById("a_address").innerText =
        s.address || "";

    document.getElementById("a_village").innerText =
        s.village || "";

    document.getElementById("a_district").innerText =
        s.district || "";

    document.getElementById("a_post").innerText =
        s.post || "";

    document.getElementById("a_tehsil").innerText =
        s.tehsil || "";

    document.getElementById("a_pincode").innerText =
        s.pincode || "";

    document.getElementById("a_email").innerText =
        s.email || "";

    document.getElementById("a_account").innerText =
        s.account || "";

    document.getElementById("a_ifsc").innerText =
        s.ifsc || "";

    document.getElementById("a_bank").innerText =
        s.bank || "";
}
/* =========================
   DOCUMENT FILTER
========================= */

function loadDocumentStudents() {

    let selectedClass =
        document.getElementById("documentClassFilter").value;

    let studentSelect =
        document.getElementById("documentStudentFilter");

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    studentSelect.innerHTML =
        '<option value="">-- Select Student --</option>';

    students.forEach((s, index) => {

        if (s.studentClass === selectedClass) {

            studentSelect.innerHTML += `
                <option value="${index}">
                    ${s.name}
                </option>
            `;
        }
    });
}
/* ================= EDIT STUDENT ================= */

function editStudent(index) {

    let students =
    JSON.parse(localStorage.getItem("students")) || [];

    let s = students[index];

    document.getElementById("name").value = s.name;
    document.getElementById("name_hindi").value = s.name_hindi;

    document.getElementById("father").value = s.father;
    document.getElementById("father_hindi").value = s.father_hindi;

    document.getElementById("mother").value = s.mother;
    document.getElementById("mother_hindi").value = s.mother_hindi;

    document.getElementById("dob").value = s.dob;

    document.getElementById("gender").value = s.gender;

    document.getElementById("category").value = s.category;

    document.getElementById("mobileNumber").value = s.mobile;

    document.getElementById("id").value = s.id;

    document.getElementById("samagraId").value = s.samagra;

    document.getElementById("aadhaar").value = s.aadhaar;

    document.getElementById("class").value = s.studentClass;

    document.getElementById("apaarId").value = s.apaar;

    document.getElementById("penNumber").value = s.pen;

    document.getElementById("admissionDate").value = s.admissionDate;

    document.getElementById("prevSchool").value = s.prevSchool;

    document.getElementById("prevClass").value = s.prevClass;

    document.getElementById("dbt").value = s.dbt;

    document.getElementById("hostel").value = s.type;

    showForm();
}



/* ================= DELETE STUDENT ================= */

function deleteStudent(index) {

    let students =
    JSON.parse(localStorage.getItem("students")) || [];

    let ok =
    confirm("क्या आप इस छात्र को delete करना चाहते हैं?");

    if(ok) {

        students.splice(index, 1);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        loadStudents();

        alert("Student Deleted Successfully ✅");
    }
}
/* ================= EXPORT TO EXCEL ================= */

function exportToExcel() {

    let students =
    JSON.parse(localStorage.getItem("students")) || [];

    if(students.length === 0) {

        alert("No student data found!");

        return;
    }

    let csv =
    "Name,Father,Class,Mobile\n";

    students.forEach(s => {

        csv +=
        `${s.name},${s.father},${s.studentClass},${s.mobile}\n`;

    });

    let blob =
    new Blob([csv], { type: "text/csv" });

    let url =
    window.URL.createObjectURL(blob);

    let a =
    document.createElement("a");

    a.href = url;

    a.download = "students.csv";

    a.click();
}
/* ================= IMPORT EXCEL ================= */

function importExcel() {

    let file =
    document.getElementById("excelFile").files[0];

    if(!file) return;

    let reader = new FileReader();

    reader.onload = function(e) {

        let text = e.target.result;

        let rows = text.split("\n");

        let students =
        JSON.parse(localStorage.getItem("students")) || [];

        for(let i = 1; i < rows.length; i++) {

            let cols = rows[i].split(",");

            if(cols.length < 4) continue;

            students.push({

                name: cols[0],
                father: cols[1],
                studentClass: cols[2],
                mobile: cols[3]

            });
        }

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        loadStudents();

        alert("Students Imported Successfully ✅");
    };

    reader.readAsText(file);
}
function showReport(){

    hideAll();

    document.getElementById("reportSection")
    .style.display = "block";
}