//register.js
var divs = new Array();
divs[0] = "** Please fill this field or it not vaild";
divs[1] = "** only characters are allowed";
divs[2] = "** Please fill the email field";
divs[3] = "** @ Invalid Position";
divs[4] = "** . Invalid Position";
divs[5] = "** Please fill the mobile Number field";
divs[6] = "** user must write digits only not characters";
divs[7] = "** Mobile Number must be 11 digits only";
divs[8] = "** Please fill the password field";
divs[9] = "Strong Password";
divs[10] = "Poor Password it must have 7 to 15 characters which contain at least one numeric digit and a special character";
divs[11] = " ** Password does not match";
var divPass = new Array();
var firebaseConfig = {
  apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q",
  authDomain: "quizzer-a0c6e.firebaseapp.com",
  databaseURL: "https://quizzer-a0c6e.firebaseio.com",
  projectId: "quizzer-a0c6e",
  storageBucket: "quizzer-a0c6e.appspot.com",
  messagingSenderId: "235551414761",
  appId: "1:235551414761:web:cb2e8ef047394bf666d378",
  measurementId: "G-GBG3VNHGE6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function validationFname() {
  var Fuser = document.getElementById('Fname').value;
  var regName = /^[A-Za-z_ ]+$/;
  if (Fuser == "" || Fuser.length < 2) {
    document.getElementById('errFname').style.display = "block";

    document.getElementById('errFname').innerHTML = divs[0];
    return false;
  } else if (!Fuser.match(regName)) {
    document.getElementById('errFname').style.display = "block";
    document.getElementById('errFname').innerHTML = divs[1];
    return false;
  } else {
    document.getElementById('errFname').style.display = "none";
    return true;
  }
}

function validationLname() {
  var Luser = document.getElementById('Lname').value;
  var regName = /^[A-Za-z_ ]+$/;
  if (Luser == "" || Luser.length < 2) {
    document.getElementById('errLname').style.display = "block";
    document.getElementById('errLname').innerHTML = divs[0];
    return false;
  } else if (!Luser.match(regName)) {
    document.getElementById('errLname').style.display = "block";
    document.getElementById('errLname').innerHTML = divs[1];
    return false;
  } else {
    document.getElementById('errLname').style.display = "none";
    return true;
  }
}

function validationEmail() {
  var emails = document.getElementById('Email').value;

  if (emails == "") {
    document.getElementById('errEmail').style.display = "block";
    document.getElementById('errEmail').innerHTML = divs[2];
    return false;
  } else if (emails.indexOf('@') <= 0) {
    document.getElementById('errEmail').style.display = "block";
    document.getElementById('errEmail').innerHTML = divs[3];
    return false;
  } else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    document.getElementById('errEmail').style.display = "block";
    document.getElementById('errEmail').innerHTML = divs[4];
    return false;
  } else {
    document.getElementById('errEmail').style.display = "none";
    return true;
  }
}

function validationPhone() {
  var phone = document.getElementById('Phone').value;
  if (phone == "") {
    document.getElementById('errPhone').style.display = "block"
    document.getElementById('errPhone').innerHTML = divs[5];
    return false;
  } else if (isNaN(phone)) {
    document.getElementById('errPhone').style.display = "block"
    document.getElementById('errPhone').innerHTML = divs[6];
    return false;
  } else if (phone.length != 11) {
    document.getElementById('errPhone').style.display = "block"
    document.getElementById('errPhone').innerHTML = divs[7];
    return false;
  } else {
    document.getElementById('errPhone').style.display = "none";
    return true;
  }
}

function ValidationPass() {
  var pass = document.getElementById('Password').value;
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%.^&*_+/-])[a-zA-Z0-9!@#$%^.&*_+/-]{7,15}$/;
  divPass[0] = pass;
  ValidationRePass();
  if (pass == "") {
    document.getElementById('errPassword').style.display = "block"
    document.getElementById('errPassword').style.color = "red";
    document.getElementById('errPassword').innerHTML = divs[8];
    return false;
  } else if (!pass.match(paswd)) {
    document.getElementById('errPassword').style.display = "block";
    document.getElementById('errPassword').style.color = "red";
    document.getElementById('errPassword').innerHTML = divs[10];

    return false;
  } else {
    document.getElementById('errPassword').style.display = "block";
    document.getElementById("errPassword").style.color = "green";
    document.getElementById('errPassword').innerHTML = divs[9];
    return true;
  }
}

function ValidationRePass() {
  var Repass = document.getElementById('RePassword').value;
  divPass[1] = Repass;
  if (Repass == "") {
    document.getElementById('errRePassword').style.display = "block"
    document.getElementById('errRePassword').innerHTML = divs[8];
    return false;
  } else if (divPass[1] !== divPass[0]) {
    document.getElementById('errRePassword').style.display = "block"
    document.getElementById('errRePassword').innerHTML = divs[11];
    return false;
  } else {
    document.getElementById('errRePassword').style.display = "none";
    return true;
  }
}

function ValidationAdress() {
  var addrees = document.getElementById('Address').value;
  var regaddrees = /^[a-zA-Z0-9_ ]+$/;
  var number = /^[0-9]/;
  if (!isNaN(addrees) || !addrees.match(regaddrees)) {
    document.getElementById('errAddress').style.display = "block";

    document.getElementById('errAddress').innerHTML = divs[0];
    return false;
  } else {
    ;
    document.getElementById('errAddress').style.display = "none";
    return true;
  }
}

function ValidationCity() {
  var city = document.getElementById('City').value;
  var regcity = /^[a-zA-Z0-9_ ]+$/;
  if (!isNaN(city) || !city.match(regcity)) {
    document.getElementById('errCity').style.display = "block";
    document.getElementById('errCity').innerHTML = divs[0];
    return false;
  } else {
    document.getElementById('errCity').style.display = "none";
    return true;
  }
}

function ValidationUniversity() {
  var University = document.getElementById('University').value;
  var regUniversity = /^[a-zA-Z0-9_ ]+$/;
  if (!isNaN(University) || !University.match(regUniversity)) {
    document.getElementById('errUniversity').style.display = "block";
    document.getElementById('errUniversity').innerHTML = divs[0];
    return false;
  } else {
    document.getElementById('errUniversity').style.display = "none";
    return true;
  }
}

function ValidationSpecialty() { //
  var specialty = document.getElementById('Specialty').value; //
  var regspecialty = /^[a-zA-Z0-9_ ]+$/;
  if (!isNaN(specialty) || !specialty.match(regspecialty)) {
    document.getElementById('errSpecialty').style.display = "block"; //
    document.getElementById('errSpecialty').innerHTML = divs[0]; //
    return false;
  } else {
    document.getElementById('errSpecialty').style.display = "none"; //
    return true;
  }
}

function ValidationUniversityinst() {
  var University = document.getElementById('Universityinst').value;
  var regUniversity = /^[a-zA-Z0-9_ ]+$/;
  if (!isNaN(University) || !University.match(regUniversity)) {
    document.getElementById('errUniversityinst').style.display = "block";
    document.getElementById('errUniversityinst').innerHTML = divs[0];
    return false;
  } else {
    document.getElementById('errUniversityinst').style.display = "none";
    return true;
  }
}

function ValidationSpecialtyinst() { //
  var specialty = document.getElementById('Specialtyinst').value; //
  var regspecialty = /^[a-zA-Z0-9_ ]+$/;
  if (!isNaN(specialty) || !specialty.match(regspecialty)) {
    document.getElementById('errSpecialtyinst').style.display = "block"; //
    document.getElementById('errSpecialtyinst').innerHTML = divs[0]; //
    return false;
  } else {
    document.getElementById('errSpecialtyinst').style.display = "none"; //
    return true;
  }
}

function showHide() {
  hideAll();
  var val = document.getElementById("dropdown").value;

  if (val == "instructor") {
    document.getElementById("instructorInfo").style.display = 'block';
    document.getElementById('University').value = "";
    document.getElementById('Specialty').value = "";
  } else if (val == "student") {
    document.getElementById("studentInfo").style.display = 'block';
    document.getElementById('Universityinst').value = "";
    document.getElementById('Specialtyinst').value = "";
  }
}

function degree() {
  var deg = document.getElementById("degree level").value;
  if (deg == "") {
    return false;
  } else return true;
}

function exprienc() {
  var exp = document.getElementById("exprienc").value;
  if (exp == "") {
    return false;
  } else return true;
}

function hideAll() {
  document.getElementById("studentInfo").style.display = 'none';
  document.getElementById("instructorInfo").style.display = 'none';
}

function ValidationFinal() {
  if ((validationFname() && validationLname() && validationEmail() && validationPhone() &&
    ValidationPass() && ValidationRePass() && ValidationAdress() && ValidationCity()) &&
    ((ValidationUniversity() && ValidationSpecialty()) ||
      (ValidationUniversityinst() && ValidationSpecialtyinst() && degree() && exprienc()))
  ) {
    var firestore = firebase.firestore();
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    let userUID;
    var errorShow;
    firebase.auth().signOut().then(function() {
      console.log(" Sign-out successful");
    }).catch(function(error) {
      console.log(error);
    });

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      document.getElementById('sbmuterr').innerHTML = error.message;
      document.getElementById('Register').innerHTML = "Register Now ";
      // ...
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(firebase.auth().currentUser.uid);
        userUID = firebase.auth().currentUser.uid;
        const docRef = firestore.collection("User").doc(userUID);
        var states = document.getElementById("dropdown").value;
        if (states == "instructor") {
          docRef.set({
            firstname: document.getElementById('Fname').value,
            lastName: document.getElementById('Lname').value,
            phone: document.getElementById('Phone').value,
            addrees: document.getElementById('Address').value,
            city: document.getElementById('City').value,
            state: states,
            university: document.getElementById('Universityinst').value,
            specialty: document.getElementById('Specialtyinst').value,
            degree: document.getElementById("degree level").value,
            exprienc: document.getElementById("exprienc").value,
            remember_me: null,
            instQuizzes: [],
          }).then(function() {
            window.location.href = "../html-page/profile.html";
          }).catch(function(error) {

            console.error("Error writing document: ", error);
            document.getElementById('sbmuterr').innerHTML = error.message;
          });
        } else {
          docRef.set({
            firstname: document.getElementById('Fname').value,
            lastName: document.getElementById('Lname').value,
            phone: document.getElementById('Phone').value,
            addrees: document.getElementById('Address').value,
            city: document.getElementById('City').value,
            state: states,
            university: document.getElementById('University').value,
            specialty: document.getElementById('Specialty').value,
            remember_me: null,
            studQuizzes: [],
          }).then(function() {
            window.location.href = "../html-page/profile.html";
          }).catch(function(error) {
            console.error("Error writing document: ", error);
            document.getElementById('sbmuterr').innerHTML = error.message;
          });
        }

      } else {
        console.log("no user is here");
      }
    });
    document.getElementById('Register').innerHTML = "Loading . . .";
  } else {
    document.getElementById('sbmuterr').innerHTML = "some fild is missing";
  }
}

//contact.js
// check validation on the information of the e-mail
function checkValidation() {
  var Fname = document.getElementById('Fname').value;
  var Lname = document.getElementById('Lname').value;
  var UserEmail = document.getElementById('Email').value;
  var Message = document.getElementById('Message').value;
  // +Lname+UserEmail+Message);
  //   
  /* SmtpJS.com - v3.0.0 */
  var Email = { send: function(a) { return new Promise(function(n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) }) }) }, ajaxPost: function(e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function(e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function() { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
  // 
  var messageValue = document.getElementById("Message").value;
  var isOk = [];
  var done = true;
  if (validationFname())
    isOk[0] = true;
  if (validationLname())
    isOk[1] = true;
  if (validationEmail())
    isOk[2] = true;
  if (messageValue === "" || messageValue.length < 25) {
    document.getElementById('errMessage').style.display = "block";
    document.getElementById("errMessage").innerHTML = "** please enter somthing not less than 25 characters";
    isOk[3] = false;
  }
  else {
    isOk[3] = true;
    document.getElementById('errMessage').style.display = "none";
    document.getElementById("errMessage").innerHTML = "";
  }
  for (i in isOk) {
    if (!(isOk[i])) {
      done = false;
      return false;
    }
  }
  if (done) {
    var anii = document.getElementById("mail-box");
    anii.style.width = "150px";
    anii.style.height = "150px";
    anii.style.top = "-800px";
    anii.style.webkitTransition = "top 5s";
    anii.style.transition = "top 5s";
    // S**************************************
    // function sendEmail() {

    Email.send({
      Host: "smtp.gmail.com",
      Username: "quizzer2019@gmail.com",
      Password: "quizzer2019support",
      To: 'quizzer2019@gmail.com',
      From: "quizzer2019@gmail.com",
      Subject: "New Request Is Here",
      Body: "Name :" + Fname + " " + Lname + "<br>" + "Email :" + UserEmail + "<br>" + "Message:-" + Message,
    }).then(
      console.log("Email sent"),
      alert("Thank You For Contacting Us, We Will Respond To You Soon"),
    );
    // }




    // 
  }
}

function rotate() {
  var ani = document.getElementById("mail-box");
  ani.style.transform = "rotateY(180deg)";
}
function rotateback() {
  var ani = document.getElementById("mail-box");
  ani.style.transform = "rotateY(0deg)";
}

//createquiz.js
var firebaseConfig = {
  apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q",
  authDomain: "quizzer-a0c6e.firebaseapp.com",
  databaseURL: "https://quizzer-a0c6e.firebaseio.com",
  projectId: "quizzer-a0c6e",
  storageBucket: "quizzer-a0c6e.appspot.com",
  messagingSenderId: "235551414761",
  appId: "1:235551414761:web:cb2e8ef047394bf666d378",
  measurementId: "G-LHDCE10DHV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    document.getElementById("nav-avatar").style.display = "block";
    firebase.firestore().collection("User").doc(firebase.auth().getUid()).get().then(function(doc) {
      document.getElementById("profile-name-avatar").innerHTML = doc.data().firstname + " " + doc.data().lastName;
    });
  }
});


function logOut() {
  firebase.auth().signOut();
  window.location.href = "login_form.html";
}


let num_Of_questions = 0;



function validation() {

  let check = false;
  let checkans = false;

  if (num_Of_questions == 0) {
    document.getElementById("error").innerHTML = "Please add Questions";
  } else {


    for (i = 1; i <= num_Of_questions; i++) {
      let boolCheck = true;

      let name = "question" + i;
      var x = document.getElementById(name);
      if (x != null) {

        var z = x.getElementsByTagName('textarea');
        var y = x.getElementsByTagName('input');
        if (z[0].value.length == 0) {
          z[0].style.border = "solid red";
          check = true;
        } else {
          z[0].style.border = "";
        }

        for (j = 1; j < y.length; j += 2) {

          if (y[j].value.length == 0) {
            y[j].style.border = "solid red";
            check = true;
          } else {
            y[j].style.border = "";
          }
        }




        for (k = 0; k < y.length; k += 2) {
          if (y[k].checked == true) {
            boolCheck = false;
          }
        }

        if (boolCheck) {
          checkans = true;
        }

      }
    }

    var na = document.getElementById("name_quiz");
    if (na.value.length == 0) {
      na.style.border = "solid red";
      check = true;
    } else {
      na.style.border = "";
    }



    if (check && checkans) {
      document.getElementById("error").innerHTML = "Please fill all data in red rectangle And Add correct answer";
    } else if (check) {
      document.getElementById("error").innerHTML = "Please fill all data in red rectangle";
    } else if (checkans) {
      document.getElementById("error").innerHTML = "Please add correct answer in all Questions";
    } else {
      document.getElementById("error").innerHTML = "";
      SaveData();
    }





  }
}

function add_multi_Answer(name_question) {

  let num_question = document.getElementById(name_question);
  let div_of_questions = num_question.getElementsByTagName("div")[0];
  let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;



  var new_answer = div_of_questions.getElementsByTagName("div")[0];

  var cln = new_answer.cloneNode(true);
  cln.getElementsByTagName('input')[0].checked = false;
  cln.getElementsByTagName('input')[1].value = "";

  console.log(cln);
  div_of_questions.appendChild(cln);


  num_Of_Answer++;
  console.log(num_Of_Answer);
  num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}

function add_one_Answer(name_question) {
  let num_question = document.getElementById(name_question);
  let div_of_questions = num_question.getElementsByTagName("div")[0];
  let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;



  var new_answer = div_of_questions.getElementsByTagName("div")[0];

  var cln = new_answer.cloneNode(true);
  cln.getElementsByTagName('input')[0].checked = false;
  cln.getElementsByTagName('input')[1].value = "";

  console.log(cln);
  div_of_questions.appendChild(cln);


  num_Of_Answer++;
  console.log(num_Of_Answer);
  num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
}

function delete_answer(name_question) {
  let num_question = document.getElementById(name_question);
  let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;
  if (num_Of_Answer > 3) {
    num_Of_Answer--;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
    return true;
  }
}

function delete_one_answer(name_question) {
  let num_question = document.getElementById(name_question);
  let num_Of_Answer = num_question.getElementsByTagName("p")[0].innerHTML;
  if (num_Of_Answer > 2) {
    num_Of_Answer--;
    console.log(num_Of_Answer);
    num_question.getElementsByTagName("p")[0].innerHTML = num_Of_Answer;
    return true;
  }
}

function add_multi_question() {
  num_Of_questions++;
  var str = "<div class=\"p-2 flex-fill text-center Qusistion\" id=\"question" + num_Of_questions + "\"><label for=\"uname\">Quistion " + num_Of_questions + "</label><button type=\"button\" class=\"closeButton\" onclick=\"this.parentNode.remove();\" style=\"float: right\">X</button><textarea class=\"form-control textA\" rows='7' name=\"text\" required></textarea><br /><p class=\"collapse\">3</p><div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div><div class=\"form-group form-check\"><input type=\"checkbox\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div></div><button type=\"button\" onclick=\"add_multi_Answer('question" + num_Of_questions + "')\" class=\"btn btn-info\" style=\"width: 20%\">Add answer</button></div>";
  var child = document.createElement('div');
  child.innerHTML = str;
  document.getElementById('questions').appendChild(child);
}

function add_one_question() {
  num_Of_questions++;
  var str = "<div class=\"p-2 flex-fill text-center Qusistion\" id=\"question" + num_Of_questions + "\"><label for=\"uname\">Quistion " + num_Of_questions + "</label><button type=\"button\" class=\"closeButton\" onclick=\"this.parentNode.remove();\" style=\"float: right\">X</button><textarea class=\"form-control textA\" rows=\"7\" name=\"text\" required></textarea><br /><p class=\"collapse\">2</p><div><div class=\"form-group form-check\"><input type=\"radio\" name=\"q" + num_Of_questions + "\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_one_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div><div class=\"form-group form-check\"><input type=\"radio\" name=\"q" + num_Of_questions + "\" class=\"form-radio\"><input type=\"text\" class=\"form-control-sm styleinput\"><button type=\"button\" class=\"closeButton\" onclick=\"if(delete_one_answer('question" + num_Of_questions + "')){this.parentNode.remove();}\">X</button></div></div><button type=\"button\" onclick=\"add_one_Answer('question" + num_Of_questions + "')\" class=\"btn btn-info\" style=\"width: 20%\">Add answer</button></div>";

  var child = document.createElement('div');
  child.innerHTML = str;
  document.getElementById('questions').appendChild(child);
}


function SaveData() {
  var number_of_Q = 0;
  var firestore = firebase.firestore();

  var access = makeid();


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var arra = new Array();
      var name_quiz = document.getElementById("name_quiz").value;
      var time_quiz = document.getElementById("time_quiz").value;
      var point_quiz = document.getElementById("point").value;


      const docRef = firestore.collection("Quiz").doc(access);
      docRef.set({
        name: name_quiz,
        Time: time_quiz,
        Points: point_quiz,
        Instructor: user.uid,
        enrolled: arra
      });

      var docRef5 = firestore.collection("User").doc(user.uid);
      docRef5.update({
        instQuizzes: firebase.firestore.FieldValue.arrayUnion(access)
      });

      //            console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });



  for (i = 1; i <= num_Of_questions; i++) {
    let correct = new Array();
    let all = new Array();

    let name = "question" + i;
    var x = document.getElementById(name);
    if (x != null) {
      number_of_Q++;
      var text_Question = x.getElementsByTagName('textarea')[0].value;
      var y = x.getElementsByTagName('input');

      for (k = 0; k < y.length; k += 2) {
        if (y[k].checked == true) {
          correct.push(y[k + 1].value);
        }
        all.push(y[k + 1].value);
      }


      var n = "Question" + number_of_Q;
      const docRef1 = firestore.collection("Quiz").doc(access).collection("Questions").doc(n);
      docRef1.set({
        QuestionText: text_Question,
        All: all,
        Correct: correct
      });
    }
  }


  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "none";
  document.getElementById("b3").style.display = "none";

  var cd = "<h1>The Access Code is :  " + access + "</h1><br><button class=\"btn btn-primary\" onclick=\"window.location.href = 'profile.html';\" style=\"width: 40%;\">go to profile</button>";

  document.getElementById("questions").innerHTML = cd;

}


function makeid() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
//exampage
var Questions = new Array();
var CorrectAns = new Array();
var Q_num = 0;
var Grade = 0;
var tout;
var to;
var docname;

function StartTime(time) {
  time = time * 60;
  tout = setTimeout(function() {
    finish()
  }, (time * 1000));
  to = setTimeout(function() {
    Timer()
  }, (1000));

}

function Timer() {

  var t = document.getElementById("time").innerHTML;

  var hour = t.charAt(0) + t.charAt(1);
  var minute = t.charAt(3) + t.charAt(4);
  var second = t.charAt(6) + t.charAt(7);

  if (second == 0) {
    if (minute > 0) {
      minute--;
      second = 59;
    } else {
      hour--;
      minute = 59;
      second = 59;
    }
  } else {
    second--;
  }

  hour = parseInt(hour);
  minute = parseInt(minute);
  second = parseInt(second);

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
  if (second != 0 || minute != 0 || hour != 0) {
    setTimeout(function() {
      Timer()
    }, 1000);
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function saveDoc(doc) {
  Questions.push(doc);
}

function d() {
  for (i = 0; i < Questions.length; i++) {
    //        console.log(Questions[i].data().Wrong[0]);
    for (g = 0; g < Questions[i].data().All.length; g++) {
      console.log(Questions[i].data().All[g]);
    }
  }
}


function load() {
  docname = localStorage.getItem("access");
  var firestore = firebase.firestore();
  //    var docRef = firestore.collection("Quiz").doc("BLhZXdALbZ");
  var docRef = firestore.collection("Quiz").doc(docname);
  docRef.get().then(function(doc) {
    if (doc.exists) {
      document.getElementById("quiz-name").innerHTML = doc.data().name;

      var total = "<h2>The time of Quiz is " + doc.data().Time + " minutes</h2><h2>number of point for each question " + doc.data().Points + "</h2><button onclick=\" start() \">Start</button>";

      document.getElementById("question").innerHTML = total;

      Grade = doc.data().Points;

    } else {
      console.log("No such document!");
    }
  });
  var docRef3 = firestore.collection("Quiz").doc(docname).collection("Questions").get().then(function(querySnapshot) {
    //    var docRef3 = firestore.collection("Quiz").doc("BLhZXdALbZ").collection("Questions").get().then(function (querySnapshot) {
    querySnapshot.forEach(function(doc) {
      saveDoc(doc);
    });
  });


  if (Questions.length > 1) {
    document.getElementById("submit-button").disabled = false;
  } else {
    document.getElementById("submit-button").disabled = true;
  }
}
function start() {
  var firestore = firebase.firestore();
  var docRef = firestore.collection("Quiz").doc(docname);

  docRef.get().then(function(doc) {
    if (doc.exists) {

      var t = doc.data().Time;
      var hour = parseInt((t / 60), 10);
      var minute = t % 60;

      document.getElementById("time").innerHTML = checkTime(hour) + ":" + checkTime(minute) + ":00";
      setQ(0);
      StartTime(t);
    } else {
      console.log("No such document!");
    }
  });

  document.getElementById("buttons").style.display = "block";

}


function setQ(num) {


  var Question = document.getElementById("question");
  var text = "<h2>" + Questions[num].data().QuestionText + "</h2>";

  if (Questions[num].data().Correct.length > 1) {
    for (o = 0; o < Questions[num].data().All.length; o++) {


      text += "<input type=\"checkbox\" id=\"ch" + o + "\"><label for=\"ch" + o + "\">" + Questions[num].data().All[o] + "</label>";

    }
  } else {
    for (i = 0; i < Questions[num].data().All.length; i++) {
      text += "<input type=\"radio\" name=\"q" + num + "\" id=\"ch" + i + "\"><label for=\"ch" + i + "\">" + Questions[num].data().All[i] + "</label>";
    }
  }

  Question.innerHTML = text;

  if (CorrectAns[num] != null) {
    if (Questions[num].data().Correct.length > 1) {


      var n = CorrectAns[num];
      var b = false;
      for (t = 0; t < Questions[num].data().All.length; t++) {
        for (z = 0; z < n.length; z++) {
          if (Questions[num].data().All[t] == n[z]) {
            b = true;
          }
        }
        if (b) {


          var v = document.getElementById("question");
          var r = v.getElementsByTagName("input");

          r[t].checked = true;

        }

        b = false;

      }




    } else {
      var n = CorrectAns[num];
      console.log(Questions[num].data().All.length);

      for (i = 0; i < Questions[num].data().All.length; i++) {
        if (n[0] == Questions[num].data().All[i]) {

          var v = document.getElementById("question");
          var r = v.getElementsByTagName("input");

          r[i].checked = true;
        }
      }

    }
  }


  if (Questions.length > (Q_num + 1)) {
    document.getElementById("submit-button").disabled = true;
  } else {
    document.getElementById("submit-button").disabled = false;
  }


}

function next() {
  if (Q_num < (Questions.length - 1)) {
    set_Corr_Ans();
    Q_num++;
    setQ(Q_num);
  }
}

function previous() {
  if (Q_num > 0) {
    set_Corr_Ans();
    Q_num--;
    setQ(Q_num);
  }
}

function set_Corr_Ans() {
  var arr = new Array();
  var v = document.getElementById("question");
  var r = v.getElementsByTagName("input");
  var l = v.getElementsByTagName("label");
  for (i = 0; i < r.length; i++) {
    if (r[i].checked) {
      arr.push(l[i].innerHTML);
    }
  }
  if (arr.length > 0) {
    CorrectAns[Q_num] = null;
    CorrectAns[Q_num] = arr;
  }
  var q = CorrectAns[Q_num];
}


function go() {
  window.location.href = "profile.html";
}

function finish() {
  var firestore = firebase.firestore();
  clearTimeout(tout);
  //    clearTimeout(to);
  set_Corr_Ans();
  var totalGrade = Grade * (Questions.length);
  var g = getGrade();
  var v = "<div><h2>You finish the QUIZ</h2><p>You got " + g + " from " + totalGrade + " marks</p><button onclick=\" go() \">Back to profile</button></div>";

  document.getElementById("question").innerHTML = v;

  document.getElementById("submit-button").style.display = "none";
  document.getElementById("next-question-button").style.display = "none";
  document.getElementById("prev-question-button").style.display = "none";
  document.getElementById("time").style.display = "none";

  var AcGr = {
    access: docname,
    degree: g
  }


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = firestore.collection("User").doc(user.uid);
      docRef.update({
        studQuizzes: firebase.firestore.FieldValue.arrayUnion(AcGr)
      });
      var docRef1 = firestore.collection("Quiz").doc(docname);
      docRef1.update({
        enrolled: firebase.firestore.FieldValue.arrayUnion(user.uid)
      });
      //            console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });


}

function getGrade() {
  var g = 0;
  for (i = 0; i < CorrectAns.length; i++) {
    var n = CorrectAns[i];
    if (n != null) {
      if ((n.length) == (Questions[i].data().Correct.length)) {
        var bool = true;
        for (j = 0; j < n.length; j++) {
          if (n[j] != Questions[i].data().Correct[j]) {
            bool = false;
          }
        }
        if (bool) {
          g += parseFloat(Grade);
        }
      }
    }


    //home.js
    $(document).ready(function() {
      if ($(window).width() > 100) {
        var divWidth = $('.large-9').width();
        $('.community__venn').height(divWidth);
      } else {
        $('.community__venn').height();
      }

    });
    $(window).resize(function() {
      if ($(window).width() > 100) {
        var divWidth = $('.small-12').width();
        $('.community__venn').height(divWidth);
      } else {
        $('.community__venn').height();
      }
    });


    //login.js
    var firebaseConfig = {
    , apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q"
    authDomain: "quizzer-a0c6e.firebaseapp.com",
      databaseURL: "https://quizzer-a0c6e.firebaseio.com",
        projectId: "quizzer-a0c6e",
          storageBucket: "quizzer-a0c6e.appspot.com",
            messagingSenderId: "235551414761",
              appId: "1:235551414761:web:cb2e8ef047394bf666d378",
                measurementId: "G-GBG3VNHGE6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const autho = firebase.auth();

  var firestore = firebase.firestore();

  autho.onAuthStateChanged(function(user) {
    if (user) {
      firestore.collection("User").doc(autho.currentUser.uid).get().then(function(doc) {
        if (doc.data().remember_me == true) {
          window.location.href = "profile.html";
        }
      });
    }
  });

  function login() {

    autho.signOut();
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const Remmber = document.getElementById("Remmber").checked;

    autho.signInWithEmailAndPassword(email, password).catch(function(error) {

      document.getElementById("errMes").innerHTML = error.message;

    }).then(function() {
      if (autho.currentUser) {
        if (Remmber) {
          firestore.collection("User").doc(autho.getUid()).update({
            remember_me: true
          });
        } else {
          firestore.collection("User").doc(autho.getUid()).update({
            remember_me: false
          });

        }
        window.location.href = "profile.html";
      }
    });
  }

  //profile.js
  var autho = firebase.auth();
  var firestore = firebase.firestore();


  autho.onAuthStateChanged(function(user) {
    if (user) {

      document.getElementById("nav-avatar").style.display = "block";
      firebase.firestore().collection("User").doc(firebase.auth().getUid()).get().then(function(doc) {
        document.getElementById("profile-name-avatar").innerHTML = doc.data().firstname + " " + doc.data().lastName;
      });

      firestore.collection("User").doc(autho.getUid()).get().then(function(doc) {
        if (doc.exists) {
          const mydata = doc.data();
          // console.log(mydata);
          if (mydata.state === "student") {
            var check = document.getElementsByClassName("instractor");
            for (i = 0; i < check.length; i++) {
              check[i].style.display = "none";
            }
            document.getElementById("efname").innerHTML = mydata.firstname;
            document.getElementById("elname").innerHTML = mydata.lastName;
            document.getElementById("eemail").innerHTML = user.email;
            document.getElementById("eemail").href = user.email;
            document.getElementById("ephone").innerHTML = mydata.phone;
            document.getElementById("eaddress").innerHTML = mydata.addrees;
            document.getElementById("ecity").innerHTML = mydata.city;
            document.getElementById("euniversity").innerHTML = mydata.university;
            document.getElementById("especialty").innerHTML = mydata.specialty;
            var quizNum;
            var quizGrade;
            var n;
            for (n = 0; n < mydata.studQuizzes.length; n++) {

              quizNum = n;
              quizAccess = mydata.studQuizzes[n].access;
              quizGrade = mydata.studQuizzes[n].degree;
              findQuiz(quizAccess, quizGrade);



            }

          } else {
            if (mydata.state === "instructor") {
              var check = document.getElementsByClassName("student");
              for (i = 0; i < check.length; i++) {
                check[i].style.display = "none";
              }
              document.getElementById("efname").innerHTML = mydata.firstname;
              document.getElementById("elname").innerHTML = mydata.lastName;
              document.getElementById("eemail").innerHTML = user.email;
              document.getElementById("eemail").href = user.email;
              document.getElementById("ephone").innerHTML = mydata.phone;
              document.getElementById("eaddress").innerHTML = mydata.addrees;
              document.getElementById("ecity").innerHTML = mydata.city;
              document.getElementById("euniversity").innerHTML = mydata.university;
              document.getElementById("especialty").innerHTML = mydata.specialty;
              document.getElementById("edegree").innerHTML = mydata.degree;
              document.getElementById("eexperience").innerHTML = mydata.exprienc;

              var quizNum;
              var quizGrade;
              var n;
              for (n = 0; n < mydata.instQuizzes.length; n++) {
                quizNum = n;
                quizAccess = mydata.instQuizzes[n];
                findInstQuiz(quizAccess);
              }

            }
          }
        }
      });
    }
  });
  //when the user click edit
  function toEdit(id) {
    firestore.collection("User").doc(autho.getUid()).get().then(function(doc) {
      if (doc.exists) {
        const mydata = doc.data();
        var sps;
        console.log(mydata.state);
        if (mydata.state == "student") {
          sps = ["span-first-name", "span-second-name", "span-email",
            "span-phone", "span-address", "span-city", "span-university",
            "span-specialty", "span-password"];
        } else {
          sps = ["span-first-name", "span-second-name", "span-email",
            "span-phone", "span-address", "span-degree", "span-experience",
            "span-city", "span-university", "span-specialty",
            "span-password"];
        }
        console.log(sps);
        document.getElementById(id).style.display = "none";
        document.getElementById("span-" + id).style.display = "table-row";
        for (i in sps) {
          if (sps[i] !== ("span-" + id)) {
            document.getElementById(sps[i]).style.display = "none";
            document.getElementById(sps[i].slice(5)).style.display = "table-row";
            clear(sps[i]);
          }
        }
      }
    });
  }

  //clear the input text 
  function clear(id) {
    var child1 = document.getElementById(id).childNodes[3];
    var child11 = child1.childNodes;
    child11[1].value = "";
    child11[5].style.display = "none";
  }
  //change active class on the side par
  function changing(id) {
    var conts = ["myTabContent", "quizzesContent", "reviewContent", "mediaContent", "newsContent"];
    document.getElementById(id).style.display = "block";
    for (i in conts) {
      if (conts[i] != id) {
        document.getElementById(conts[i]).style.display = "none";
      }
    }
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  //remove photo from personal info. and nav par and replace it with a default one
  function removePhoto(cls) {
    document.getElementsByClassName(cls)[0].src = "../img/profile/test.png";
    document.getElementsByClassName(cls)[1].src = "../img/profile/test.png";
  }
  //working when the user click save putton to save changes
  function toSaveChanges(id) {
    if (id === "Fname") {
      if (validationFname()) {
        setData(id);
        document.getElementById("efname").innerHTML = document.getElementById("Fname").value;
        document.getElementById("first-name").style.display = "table-row";
        document.getElementById("span-first-name").style.display = "none";
        clear("span-first-name");
      }
    } else if (id === "Lname") {
      if (validationLname()) {
        setData(id);
        document.getElementById("elname").innerHTML = document.getElementById("Lname").value;
        document.getElementById("second-name").style.display = "table-row";
        document.getElementById("span-second-name").style.display = "none";
        clear("span-second-name");
      }
    } else if (id === "Email") {
      if (validationEmail()) {
        setData(id);
        document.getElementById("eemail").innerHTML = document.getElementById("Email").value;
        document.getElementById("email").style.display = "table-row";
        document.getElementById("span-email").style.display = "none";
        document.getElementById("eemail").setAttribute("href", document.getElementById("Email").value);
        clear("span-email");
      }
    } else if (id === "Phone") {
      if (validationPhone()) {
        setData(id);
        document.getElementById("ephone").innerHTML = document.getElementById("Phone").value;
        document.getElementById("phone").style.display = "table-row";
        document.getElementById("span-phone").style.display = "none";
        clear("span-phone");
      }
    } else if (id === "Address") {
      if (ValidationAdress()) {
        setData(id);
        document.getElementById("eaddress").innerHTML = document.getElementById("Address").value;
        document.getElementById("address").style.display = "table-row";
        document.getElementById("span-address").style.display = "none";
        clear("span-address");
      }
    } else if (id === "City") {
      if (ValidationCity()) {
        setData(id);
        document.getElementById("ecity").innerHTML = document.getElementById("City").value;
        document.getElementById("city").style.display = "table-row";
        document.getElementById("span-city").style.display = "none";
        clear("span-city");
      }
    } else if (id === "University") {
      if (ValidationUniversity()) {
        setData(id);
        document.getElementById("euniversity").innerHTML = document.getElementById("University").value;
        document.getElementById("university").style.display = "table-row";
        document.getElementById("span-university").style.display = "none";
        clear("span-university");
      }
    } else if (id === "Specialty") {
      if (ValidationSpecialty()) {
        setData(id);
        document.getElementById("especialty").innerHTML = document.getElementById("Specialty").value;
        document.getElementById("specialty").style.display = "table-row";
        document.getElementById("span-specialty").style.display = "none";
        clear("span-specialty");
      }
    } else if (id === "Password") {
      if (ValidationPass()) {
        setData(id);
        document.getElementById("password").style.display = "table-row";
        document.getElementById("span-password").style.display = "none";
        clear("span-password");
      }
    } else if (id === "Degree") {
      if (ValidationDegree()) {
        setData(id);
        document.getElementById("degree").style.display = "table-row";
        document.getElementById("span-degree").style.display = "none";
        clear("span-degree");
      }
    } else if (id === "Experience") {
      if (ValidationExperience()) {
        setData(id);
        document.getElementById("experience").style.display = "table-row";
        document.getElementById("span-experience").style.display = "none";
        clear("span-experience");
      }
    }
  }

  function ValidationDegree() {
    var degree = document.getElementById('Degree').value;
    var regName = /^[A-Za-z]+$/;
    if (degree == "" || degree.length < 2) {
      document.getElementById('errDegree').style.display = "block";
      document.getElementById('errDegree').innerHTML = "** Please fill this field or it not vaild";
      return false;
    } else if (!degree.match(regName)) {
      document.getElementById('errDegree').style.display = "block";
      document.getElementById('errDegree').innerHTML = "** only characters are allowed";
      return false;
    } else {
      document.getElementById('errDegree').style.display = "none";
      return true;
    }
  }

  function ValidationExperience() {
    var degree = document.getElementById('Experience').value;
    var regName = /^[A-Za-z]+$/;
    if (degree == "" || degree.length < 2) {
      document.getElementById('errExperience').style.display = "block";
      document.getElementById('errExperience').innerHTML = "** Please fill this field or it not vaild";
      return false;
    } else if (!degree.match(regName)) {
      document.getElementById('errExperience').style.display = "block";
      document.getElementById('errExperience').innerHTML = "** only characters are allowed";
      return false;
    } else {
      document.getElementById('errExperience').style.display = "none";
      return true;
    }
  }

  //under construction
  function appear() {
    document.getElementsByClassName("change-remove-icons")[0].style.display = "inline-block";
    document.getElementsByClassName("change-remove-icons")[0].style.cursor = "pointer";
    document.getElementsByClassName("change-remove-icons")[1].style.display = "inline-block";
    document.getElementsByClassName("change-remove-icons")[1].style.cursor = "pointer";
  }

  function disappear() {
    document.getElementsByClassName("change-remove-icons")[0].style.display = "none";
    document.getElementsByClassName("change-remove-icons")[0].style.cursor = "context-menu";
    document.getElementsByClassName("change-remove-icons")[1].style.display = "none";
    document.getElementsByClassName("change-remove-icons")[1].style.cursor = "context-menu";
  }

  function pushQuiz() {
    var accessValue = document.getElementById("access").value;
    firestore.collection("Quiz").doc(accessValue).get().then(function(doc2) {

      firestore.collection("User").doc(autho.getUid()).get().then(function(doc) {
        if (doc.exists) {
          if (doc2.exists) {
            const mydata = doc2.data();

            var arr = mydata.enrolled;
            userId = firebase.auth().currentUser.uid;
            var checkPoint = false;

            for (k = 0; k < arr.length; k++) {
              console.log(arr.length);
              if (arr[k] == userId) {
                document.getElementById("access").innerHTML = "enrolled before";
                document.getElementById("access").style.backgroundColor = "yellow";
                checkPoint = true;
                break;
              }
            }

            if (checkPoint == false) {


              setTimeout(() => {
                console.log("we waited");
                open(accessValue);
              }, 2000);



            }
          }
        }
      });
    });
  }



  function logOut() {

    firebase.auth().signOut();
    window.location.href = "../html-page/login_form.html";
  }


  function setData(id) {
    userId = firebase.auth().currentUser.uid;
    docRef = firestore.collection("User").doc(userId);
    if (id === "Fname") {
      docRef.update({
        firstname: document.getElementById("Fname").value
      });
    } else if (id === "Lname") {
      docRef.update({
        lastName: document.getElementById("Lname").value
      });
    } else if (id === "Email") {

      autho.currentUser.updateEmail(document.getElementById("Email").value).then(function() {

      }).catch(function(err) {

      });
    } else if (id === "Phone") {
      docRef.update({
        phone: document.getElementById("Phone").value
      });
    } else if (id === "Specialty") {
      docRef.update({
        specialty: document.getElementById("Specialty").value
      });
    } else if (id === "Address") {
      docRef.update({
        addrees: document.getElementById("Address").value
      });
    } else if (id === "University") {
      docRef.update({
        university: document.getElementById("University").value
      });
    } else if (id === "City") {
      docRef.update({
        city: document.getElementById("City").value
      });
    } else if (id === "Degree") {
      docRef.update({
        degree: document.getElementById("Degree").value
      });
    } else if (id === "Experience") {
      docRef.update({
        exprienc: document.getElementById("Experience").value
      });
    } else if (id === "Password") {

      autho.currentUser.updatePassword(document.getElementById("Password").value).then(function() {

      }).catch(function(err) {

      });
    }
  }




  function quizAsInstractor(quizName, time, quizAccess) {

    var quiz =
      "<div id=\"" + quizAccess + "\" class=\"col-md-4 col-sm-6 col-xs-12\">" +
      "<div class=\"card\">" +
      "<div style=\"float: left;\">" +
      "<img src=\"../img/profile/quiz.jpg\" style=\"width: 50px; height: 50px;\" alt=\"quiz\">" +
      "<img class=\"delete\" onclick=\"document.getElementById('id01').style.display='block';" +
      " document.getElementById('sp').innerHTML ='" + quizAccess + "'; \"" +
      " src=\"../img/profile/delete.png\" alt=\"delete\">" +
      "</div>" +
      "<h2>" + quizName + "</h2>" +
      "<h5>time: " + time + "</h5>" +
      "<a " + "href=\"#\"" + " onclick=\"open('" + quizAccess + "')\"" +
      " style=\"width: 100px; text-align: center;\"" +
      "class=\"btn btn-primary strquiz\">show Quiz</a>" +
      "<a id=\"myBtn\"" + "href=\"#\"" + "onclick=\"getEnrolled('" + quizAccess + "'); document.getElementById('myModal').style.display='block';\"" +
      " style=\"text-align: center;\"" +
      "class=\"btn strquiz enroll\">show enrolled</a>" +
      "</div>" +
      "</div>";

    document.getElementById("showQuizzes").innerHTML += quiz;
  }


  function getEnrolled(quizAccess) {
    firestore.collection("Quiz").doc(quizAccess).get().then(function(doc1) {
      if (doc1 && doc1.exists) {
        const quiz = doc1.data();
        for (j = 0; j < quiz.enrolled.length; j++) {
          firestore.collection("User").doc(quiz.enrolled[j]).get().then(function(doc1) {
            if (doc1 && doc1.exists) {
              var enrol = doc1.data();
              console.log(enrol.firstname);
              const dgr = enrol.studQuizzes;
              console.log(dgr.length);
              for (i = 0; i < dgr.length; i++) {
                if (dgr[i].access == quizAccess) {
                  console.log(dgr[i].degree);
                  var addenroll = "<div class=\"row\" style=\"border-bottom: 1px silver solid; margin-left:5px \">" +
                    "<label class=\"col-md-4 col-sm-6 col-xs-6\" >" + enrol.firstname + "</label>" +
                    "<label class=\"col-md-4 col-sm-6 col-xs-6\" >" + dgr[i].degree + "</label>" +
                    "</div>"
                  document.getElementById("innerModal").innerHTML += addenroll;
                }
              }
            }
          });
        }
      }
    });
  }

  function open(quizAccess) {

    localStorage.setItem("access", quizAccess);
    window.location.href = "Exam_page.html";
  }


  function quizAsStudent(quizName, instractorName, grade, quizAccess) {


    firebase.firestore().collection("User").doc(instractorName).get().then(function(doc) {
      var gradelook;
      if (grade > 3) {
        gradelook = "<h3 style =\"color:green;\">Grade: " + grade + "<h3>";
      } else {
        gradelook = "<h3 style =\"color:red;\">Grade: " + grade + "<h3>";
      }
      var quiz =
        "<div id=\"" + quizAccess + "\" class=\"col-md-4 col-sm-6 col-xs-12\">" +
        "<div class=\"card\">" +
        "<div style=\"float: left;\">" +
        "<img src=\"../img/profile/quiz.jpg\" style=\"width: 50px; height: 50px;\" alt=\"quiz\">" +
        "</div>" +
        "<h2>" + quizName + "</h2>" +
        "<h5><small>Instractor</small>: " + doc.data().firstname + " " +
        doc.data().lastName; + "</h5>" + "</div>" + "</div>";


      quiz += gradelook;

      document.getElementById("showQuizzes").innerHTML += quiz;

    });
  }

  function removeQuiz() {


    var id = document.getElementById("sp").innerHTML;
    var userId = firebase.auth().currentUser.uid;


    // deleteAtPath(firestore.collection("Quiz").doc(id));
    firestore.collection("Quiz").doc(id).delete().then(function(doc) {
      console.log("questions collection successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing question collection: ", error);
    });
    firestore.collection("User").doc(userId).get().then(function(doc4) {
      var getToModify = doc4.data();
      var arr = getToModify.instQuizzes;
      var newArr;
      var x = 0;
      for (i in arr) {
        if (id == arr[i]) {
          continue;
        } else {
          x++;
          newArr[x] = arr[i];
        }
      }
      firestore.collection("User").doc(userId).update({
        instQuizzes: newArr
      });

      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
    document.getElementById(id).remove();

    document.getElementById('id01').style.display = 'none';
  }






  function countProps(obj) {
    var count = 0;
    for (i in obj) count++;
    return count;
  }

  function findQuiz(quizAccess1, quizGrade1) {
    firestore.collection("Quiz").doc(quizAccess1).get().then(function(doc1) {
      if (doc1.exists) {
        const quiz = doc1.data();
        var name = quiz.name;
        var instructor = quiz.Instructor;
        quizAsStudent(name, instructor, quizGrade1, quizAccess1);
      } else {
        var name = "undefined";
        var instructor = "undefined";
        quizAsStudent(name, instructor, quizGrade1, quizAccess1);

      }
    });
  }

  function findInstQuiz(quizAccess1) {
    firestore.collection("Quiz").doc(quizAccess1).get().then(function(doc1) {
      if (doc1 && doc1.exists) {
        const quiz = doc1.data();
        quizAsInstractor(quiz.name, quiz.Time, quizAccess1);
      }
    });
  }

  //user.js
  var firebaseConfig = {
    , apiKey: "AIzaSyD0tMq6ZWGaJcG4VFWcmETbTxO7IOdDE3Q"
  authDomain: "quizzer-a0c6e.firebaseapp.com",
    databaseURL: "https://quizzer-a0c6e.firebaseio.com",
      projectId: "quizzer-a0c6e",
        storageBucket: "quizzer-a0c6e.appspot.com",
          messagingSenderId: "235551414761",
            appId: "1:235551414761:web:cb2e8ef047394bf666d378",
              measurementId: "G-GBG3VNHGE6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    document.getElementById("nav-avatar").style.display = "block";
    document.getElementById("nav-noUser").style.display = "none";
    firebase.firestore().collection("User").doc(firebase.auth().getUid()).get().then(function(doc) {
      document.getElementById("profile-name-avatar").innerHTML = doc.data().firstname + " " + doc.data().lastName;
    });
  }
});

function logOut() {
  firebase.auth().signOut();
  window.location.href = "login_form.html";
}

//watson.js
window.loadWatsonAssistantChat = function(t) { var n = {}; function r(e) { if (n[e]) return n[e].exports; var o = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = t, r.c = n, r.d = function(t, n, e) { r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, n) { if (1 & n && (t = r(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var e = Object.create(null); if (r.r(e), Object.defineProperty(e, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function(n) { return t[n] }.bind(null, o)); return e }, r.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(n, "a", n), n }, r.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, r.p = "", r(r.s = 128) }([function(t, n, r) { var e = r(1), o = r(39), i = r(60), c = r(92), u = e.Symbol, a = o("wks"); t.exports = function(t) { return a[t] || (a[t] = c && u[t] || (c ? u : i)("Symbol." + t)) } }, function(t, n, r) { (function(n) { var r = function(t) { return t && t.Math == Math && t }; t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n && n) || Function("return this")() }).call(this, r(73)) }, function(t, n, r) { (function(n) { var r = function(t) { return t && t.Math == Math && t }; t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n && n) || Function("return this")() }).call(this, r(73)) }, function(t, n, r) { var e = r(20), o = r(9), i = r(58), c = r(18).f; t.exports = function(t) { var n = e.Symbol || (e.Symbol = {}); o(n, t) || c(n, t, { value: i.f(t) }) } }, function(t, n) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, n, r) { var e = r(2), o = r(36), i = r(76), c = r(132), u = e.Symbol, a = o("wks"); t.exports = function(t) { return a[t] || (a[t] = c && u[t] || (c ? u : i)("Symbol." + t)) } }, function(t, n) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, n, r) { "use strict"; var e = r(1), o = r(62).f, i = r(97), c = r(20), u = r(45), a = r(10), s = r(9), f = function(t) { var n = function(n, r, e) { if (this instanceof t) { switch (arguments.length) { case 0: return new t; case 1: return new t(n); case 2: return new t(n, r) }return new t(n, r, e) } return t.apply(this, arguments) }; return n.prototype = t.prototype, n }; t.exports = function(t, n) { var r, l, p, v, h, d, y, g, m = t.target, b = t.global, x = t.stat, w = t.proto, j = b ? e : x ? e[m] : (e[m] || {}).prototype, O = b ? c : c[m] || (c[m] = {}), S = O.prototype; for (p in n) r = !i(b ? p : m + (x ? "." : "#") + p, t.forced) && j && s(j, p), h = O[p], r && (d = t.noTargetGet ? (g = o(j, p)) && g.value : j[p]), v = r && d ? d : n[p], r && typeof h == typeof v || (y = t.bind && r ? u(v, e) : t.wrap && r ? f(v) : w && "function" == typeof v ? u(Function.call, v) : v, (t.sham || v && v.sham || h && h.sham) && a(y, "sham", !0), O[p] = y, w && (s(c, l = m + "Prototype") || a(c, l, {}), c[l][p] = v, t.real && S && !S[p] && a(S, p, v))) } }, function(t, n, r) { var e = r(16); t.exports = function(t) { if (!e(t)) throw TypeError(String(t) + " is not an object"); return t } }, function(t, n) { var r = {}.hasOwnProperty; t.exports = function(t, n) { return r.call(t, n) } }, function(t, n, r) { var e = r(17), o = r(18), i = r(30); t.exports = e ? function(t, n, r) { return o.f(t, n, i(1, r)) } : function(t, n, r) { return t[n] = r, t } }, function(t, n, r) { var e = r(6); t.exports = function(t) { if (!e(t)) throw TypeError(String(t) + " is not an object"); return t } }, function(t, n) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, n) { var r = {}.hasOwnProperty; t.exports = function(t, n) { return r.call(t, n) } }, function(t, n, r) { var e = r(15), o = r(27), i = r(50); t.exports = e ? function(t, n, r) { return o.f(t, n, i(1, r)) } : function(t, n, r) { return t[n] = r, t } }, function(t, n, r) { var e = r(12); t.exports = !e((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, n) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, n, r) { var e = r(4); t.exports = !e((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(17), o = r(91), i = r(11), c = r(40), u = Object.defineProperty; n.f = e ? u : function(t, n, r) { if (i(t), n = c(n, !0), i(r), o) try { return u(t, n, r) } catch (t) { } if ("get" in r || "set" in r) throw TypeError("Accessors not supported"); return "value" in r && (t[n] = r.value), t } }, function(t, n) { var r = {}.toString; t.exports = function(t) { return r.call(t).slice(8, -1) } }, function(t, n) { t.exports = {} }, function(t, n) { t.exports = !0 }, function(t, n, r) { var e = r(96), o = r(41); t.exports = function(t) { return e(o(t)) } }, function(t, n) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, n, r) { var e = r(18).f, o = r(10), i = r(9), c = r(159), u = r(0)("toStringTag"), a = c !== {}.toString; t.exports = function(t, n, r, s) { if (t) { var f = r ? t : t.prototype; i(f, u) || e(f, u, { configurable: !0, value: n }), s && a && o(f, "toString", c) } } }, function(t, n) { t.exports = {} }, function(t, n) { var r = {}.toString; t.exports = function(t) { return r.call(t).slice(8, -1) } }, function(t, n, r) { var e = r(15), o = r(74), i = r(8), c = r(75), u = Object.defineProperty; n.f = e ? u : function(t, n, r) { if (i(t), n = c(n, !0), i(r), o) try { return u(t, n, r) } catch (t) { } if ("get" in r || "set" in r) throw TypeError("Accessors not supported"); return "value" in r && (t[n] = r.value), t } }, function(t, n, r) { var e = r(136), o = r(2), i = function(t) { return "function" == typeof t ? t : void 0 }; t.exports = function(t, n) { return arguments.length < 2 ? i(e[t]) || i(o[t]) : e[t] && e[t][n] || o[t] && o[t][n] } }, function(t, n) { t.exports = {} }, function(t, n) { t.exports = function(t, n) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n } } }, function(t, n, r) { var e = r(41); t.exports = function(t) { return Object(e(t)) } }, function(t, n, r) { var e = r(61), o = Math.min; t.exports = function(t) { return t > 0 ? o(e(t), 9007199254740991) : 0 } }, function(t, n, r) { var e = r(20), o = r(1), i = function(t) { return "function" == typeof t ? t : void 0 }; t.exports = function(t, n) { return arguments.length < 2 ? i(e[t]) || i(o[t]) : e[t] && e[t][n] || o[t] && o[t][n] } }, function(t, n, r) { var e = r(10); t.exports = function(t, n, r, o) { o && o.enumerable ? t[n] = r : e(t, n, r) } }, function(t, n, r) { var e = r(71), o = r(72); t.exports = function(t) { return e(o(t)) } }, function(t, n, r) { var e = r(37), o = r(131); (t.exports = function(t, n) { return o[t] || (o[t] = void 0 !== n ? n : {}) })("versions", []).push({ version: "3.3.6", mode: e ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, n) { t.exports = !1 }, function(t, n, r) { var e = r(2), o = r(36), i = r(14), c = r(13), u = r(48), a = r(83), s = r(54), f = s.get, l = s.enforce, p = String(a).split("toString"); o("inspectSource", (function(t) { return a.call(t) })), (t.exports = function(t, n, r, o) { var a = !!o && !!o.unsafe, s = !!o && !!o.enumerable, f = !!o && !!o.noTargetGet; "function" == typeof r && ("string" != typeof n || c(r, "name") || i(r, "name", n), l(r).source = p.join("string" == typeof n ? n : "")), t !== e ? (a ? !f && t[n] && (s = !0) : delete t[n], s ? t[n] = r : i(t, n, r)) : s ? t[n] = r : u(n, r) })(Function.prototype, "toString", (function() { return "function" == typeof this && f(this).source || a.call(this) })) }, function(t, n, r) { var e = r(21), o = r(150); (t.exports = function(t, n) { return o[t] || (o[t] = void 0 !== n ? n : {}) })("versions", []).push({ version: "3.3.6", mode: e ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, n, r) { var e = r(6); t.exports = function(t, n) { if (!e(t)) return t; var r, o; if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o; if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o; if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, n) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, n, r) { var e, o, i, c = r(153), u = r(1), a = r(6), s = r(10), f = r(9), l = r(43), p = r(44), v = u.WeakMap; if (c) { var h = new v, d = h.get, y = h.has, g = h.set; e = function(t, n) { return g.call(h, t, n), n }, o = function(t) { return d.call(h, t) || {} }, i = function(t) { return y.call(h, t) } } else { var m = l("state"); p[m] = !0, e = function(t, n) { return s(t, m, n), n }, o = function(t) { return f(t, m) ? t[m] : {} }, i = function(t) { return f(t, m) } } t.exports = { set: e, get: o, has: i, enforce: function(t) { return i(t) ? o(t) : e(t, {}) }, getterFor: function(t) { return function(n) { var r; if (!a(n) || (r = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return r } } } }, function(t, n, r) { var e = r(39), o = r(60), i = e("keys"); t.exports = function(t) { return i[t] || (i[t] = o(t)) } }, function(t, n) { t.exports = {} }, function(t, n, r) { var e = r(23); t.exports = function(t, n, r) { if (e(t), void 0 === n) return t; switch (r) { case 0: return function() { return t.call(n) }; case 1: return function(r) { return t.call(n, r) }; case 2: return function(r, e) { return t.call(n, r, e) }; case 3: return function(r, e, o) { return t.call(n, r, e, o) } }return function() { return t.apply(n, arguments) } } }, function(t, n) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function(t, n, r) { var e = r(20); t.exports = function(t) { return e[t + "Prototype"] } }, function(t, n, r) { var e = r(2), o = r(14); t.exports = function(t, n) { try { o(e, t, n) } catch (r) { e[t] = n } return n } }, function(t, n, r) { var e = r(2), o = r(16), i = e.document, c = o(i) && o(i.createElement); t.exports = function(t) { return c ? i.createElement(t) : {} } }, function(t, n) { t.exports = function(t, n) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n } } }, function(t, n) { t.exports = {} }, function(t, n) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, n, r) { var e = r(36), o = r(76), i = e("keys"); t.exports = function(t) { return i[t] || (i[t] = o(t)) } }, function(t, n, r) { var e, o, i, c = r(137), u = r(2), a = r(16), s = r(14), f = r(13), l = r(53), p = r(51), v = u.WeakMap; if (c) { var h = new v, d = h.get, y = h.has, g = h.set; e = function(t, n) { return g.call(h, t, n), n }, o = function(t) { return d.call(h, t) || {} }, i = function(t) { return y.call(h, t) } } else { var m = l("state"); p[m] = !0, e = function(t, n) { return s(t, m, n), n }, o = function(t) { return f(t, m) ? t[m] : {} }, i = function(t) { return f(t, m) } } t.exports = { set: e, get: o, has: i, enforce: function(t) { return i(t) ? o(t) : e(t, {}) }, getterFor: function(t) { return function(n) { var r; if (!a(n) || (r = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return r } } } }, function(t, n, r) { var e = r(2), o = r(56).f, i = r(14), c = r(38), u = r(48), a = r(139), s = r(86); t.exports = function(t, n) { var r, f, l, p, v, h = t.target, d = t.global, y = t.stat; if (r = d ? e : y ? e[h] || u(h, {}) : (e[h] || {}).prototype) for (f in n) { if (p = n[f], l = t.noTargetGet ? (v = o(r, f)) && v.value : r[f], !s(d ? f : h + (y ? "." : "#") + f, t.forced) && void 0 !== l) { if (typeof p == typeof l) continue; a(p, l) } (t.sham || l && l.sham) && i(p, "sham", !0), c(r, f, p, t) } } }, function(t, n, r) { var e = r(15), o = r(84), i = r(50), c = r(35), u = r(75), a = r(13), s = r(74), f = Object.getOwnPropertyDescriptor; n.f = e ? f : function(t, n) { if (t = c(t), n = u(n, !0), s) try { return f(t, n) } catch (t) { } if (a(t, n)) return i(!o.f.call(t, n), t[n]) } }, function(t, n, r) { var e = r(27).f, o = r(13), i = r(5)("toStringTag"); t.exports = function(t, n, r) { t && !o(t = r ? t : t.prototype, i) && e(t, i, { configurable: !0, value: n }) } }, function(t, n, r) { n.f = r(0) }, function(t, n, r) { var e = r(1), o = r(6), i = e.document, c = o(i) && o(i.createElement); t.exports = function(t) { return c ? i.createElement(t) : {} } }, function(t, n) { var r = 0, e = Math.random(); t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + e).toString(36) } }, function(t, n) { var r = Math.ceil, e = Math.floor; t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t) } }, function(t, n, r) { var e = r(17), o = r(95), i = r(30), c = r(22), u = r(40), a = r(9), s = r(91), f = Object.getOwnPropertyDescriptor; n.f = e ? f : function(t, n) { if (t = c(t), n = u(n, !0), s) try { return f(t, n) } catch (t) { } if (a(t, n)) return i(!o.f.call(t, n), t[n]) } }, function(t, n) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, n, r) { var e = r(19); t.exports = Array.isArray || function(t) { return "Array" == e(t) } }, function(t, n, r) { var e, o, i = r(1), c = r(66), u = i.process, a = u && u.versions, s = a && a.v8; s ? o = (e = s.split("."))[0] + e[1] : c && (!(e = c.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = c.match(/Chrome\/(\d+)/)) && (o = e[1]), t.exports = o && +o }, function(t, n, r) { var e = r(33); t.exports = e("navigator", "userAgent") || "" }, function(t, n, r) { "use strict"; var e = r(23), o = function(t) { var n, r; this.promise = new t((function(t, e) { if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor"); n = t, r = e })), this.resolve = e(n), this.reject = e(r) }; t.exports.f = function(t) { return new o(t) } }, function(t, n, r) { var e = r(28); t.exports = e("navigator", "userAgent") || "" }, function(t, n, r) { t.exports = r(187) }, function(t, n, r) { t.exports = r(233) }, function(t, n, r) { var e = r(12), o = r(26), i = "".split; t.exports = e((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == o(t) ? i.call(t, "") : Object(t) } : Object }, function(t, n) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function(t, n) { var r; r = function() { return this }(); try { r = r || new Function("return this")() } catch (t) { "object" == typeof window && (r = window) } t.exports = r }, function(t, n, r) { var e = r(15), o = r(12), i = r(49); t.exports = !e && !o((function() { return 7 != Object.defineProperty(i("div"), "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(16); t.exports = function(t, n) { if (!e(t)) return t; var r, o; if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o; if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o; if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, n) { var r = 0, e = Math.random(); t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + e).toString(36) } }, function(t, n, r) { var e = r(8), o = r(133), i = r(52), c = r(51), u = r(82), a = r(49), s = r(53)("IE_PROTO"), f = function() { }, l = function() { var t, n = a("iframe"), r = i.length; for (n.style.display = "none", u.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; r--;)delete l.prototype[i[r]]; return l() }; t.exports = Object.create || function(t, n) { var r; return null !== t ? (f.prototype = e(t), r = new f, f.prototype = null, r[s] = t) : r = l(), void 0 === n ? r : o(r, n) }, c[s] = !0 }, function(t, n, r) { var e = r(79), o = r(52); t.exports = Object.keys || function(t) { return e(t, o) } }, function(t, n, r) { var e = r(13), o = r(35), i = r(134).indexOf, c = r(51); t.exports = function(t, n) { var r, u = o(t), a = 0, s = []; for (r in u) !e(c, r) && e(u, r) && s.push(r); for (; n.length > a;)e(u, r = n[a++]) && (~i(s, r) || s.push(r)); return s } }, function(t, n, r) { var e = r(81), o = Math.min; t.exports = function(t) { return t > 0 ? o(e(t), 9007199254740991) : 0 } }, function(t, n) { var r = Math.ceil, e = Math.floor; t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t) } }, function(t, n, r) { var e = r(28); t.exports = e("document", "documentElement") }, function(t, n, r) { var e = r(36); t.exports = e("native-function-to-string", Function.toString) }, function(t, n, r) { "use strict"; var e = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !e.call({ 1: 2 }, 1); n.f = i ? function(t) { var n = o(this, t); return !!n && n.enumerable } : e }, function(t, n) { n.f = Object.getOwnPropertySymbols }, function(t, n, r) { var e = r(12), o = /#|\.prototype\./, i = function(t, n) { var r = u[c(t)]; return r == s || r != a && ("function" == typeof n ? e(n) : !!n) }, c = i.normalize = function(t) { return String(t).replace(o, ".").toLowerCase() }, u = i.data = {}, a = i.NATIVE = "N", s = i.POLYFILL = "P"; t.exports = i }, function(t, n, r) { "use strict"; var e, o, i, c = r(88), u = r(14), a = r(13), s = r(5), f = r(37), l = s("iterator"), p = !1;[].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (e = o) : p = !0), null == e && (e = {}), f || a(e, l) || u(e, l, (function() { return this })), t.exports = { IteratorPrototype: e, BUGGY_SAFARI_ITERATORS: p } }, function(t, n, r) { var e = r(13), o = r(89), i = r(53), c = r(143), u = i("IE_PROTO"), a = Object.prototype; t.exports = c ? Object.getPrototypeOf : function(t) { return t = o(t), e(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function(t, n, r) { var e = r(72); t.exports = function(t) { return Object(e(t)) } }, function(t, n, r) { r(3)("iterator") }, function(t, n, r) { var e = r(17), o = r(4), i = r(59); t.exports = !e && !o((function() { return 7 != Object.defineProperty(i("div"), "a", { get: function() { return 7 } }).a })) }, function(t, n, r) { var e = r(4); t.exports = !!Object.getOwnPropertySymbols && !e((function() { return !String(Symbol()) })) }, function(t, n, r) { "use strict"; var e = r(152).charAt, o = r(42), i = r(94), c = o.set, u = o.getterFor("String Iterator"); i(String, "String", (function(t) { c(this, { type: "String Iterator", string: String(t), index: 0 }) }), (function() { var t, n = u(this), r = n.string, o = n.index; return o >= r.length ? { value: void 0, done: !0 } : (t = e(r, o), n.index += t.length, { value: t, done: !1 }) })) }, function(t, n, r) { "use strict"; var e = r(7), o = r(155), i = r(99), c = r(160), u = r(24), a = r(10), s = r(34), f = r(0), l = r(21), p = r(25), v = r(98), h = v.IteratorPrototype, d = v.BUGGY_SAFARI_ITERATORS, y = f("iterator"), g = function() { return this }; t.exports = function(t, n, r, f, v, m, b) { o(r, n, f); var x, w, j, O = function(t) { if (t === v && E) return E; if (!d && t in P) return P[t]; switch (t) { case "keys": case "values": case "entries": return function() { return new r(this, t) } }return function() { return new r(this) } }, S = n + " Iterator", _ = !1, P = t.prototype, T = P[y] || P["@@iterator"] || v && P[v], E = !d && T || O(v), A = "Array" == n && P.entries || T; if (A && (x = i(A.call(new t)), h !== Object.prototype && x.next && (l || i(x) === h || (c ? c(x, h) : "function" != typeof x[y] && a(x, y, g)), u(x, S, !0, !0), l && (p[S] = g))), "values" == v && T && "values" !== T.name && (_ = !0, E = function() { return T.call(this) }), l && !b || P[y] === E || a(P, y, E), p[n] = E, v) if (w = { values: O("values"), keys: m ? E : O("keys"), entries: O("entries") }, b) for (j in w) !d && !_ && j in P || s(P, j, w[j]); else e({ target: n, proto: !0, forced: d || _ }, w); return w } }, function(t, n, r) { "use strict"; var e = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !e.call({ 1: 2 }, 1); n.f = i ? function(t) { var n = o(this, t); return !!n && n.enumerable } : e }, function(t, n, r) { var e = r(4), o = r(19), i = "".split; t.exports = e((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == o(t) ? i.call(t, "") : Object(t) } : Object }, function(t, n, r) { var e = r(4), o = /#|\.prototype\./, i = function(t, n) { var r = u[c(t)]; return r == s || r != a && ("function" == typeof n ? e(n) : !!n) }, c = i.normalize = function(t) { return String(t).replace(o, ".").toLowerCase() }, u = i.data = {}, a = i.NATIVE = "N", s = i.POLYFILL = "P"; t.exports = i }, function(t, n, r) { "use strict"; var e, o, i, c = r(99), u = r(10), a = r(9), s = r(0), f = r(21), l = s("iterator"), p = !1;[].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (e = o) : p = !0), null == e && (e = {}), f || a(e, l) || u(e, l, (function() { return this })), t.exports = { IteratorPrototype: e, BUGGY_SAFARI_ITERATORS: p } }, function(t, n, r) { var e = r(9), o = r(31), i = r(43), c = r(156), u = i("IE_PROTO"), a = Object.prototype; t.exports = c ? Object.getPrototypeOf : function(t) { return t = o(t), e(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function(t, n, r) { var e = r(11), o = r(157), i = r(63), c = r(44), u = r(104), a = r(59), s = r(43)("IE_PROTO"), f = function() { }, l = function() { var t, n = a("iframe"), r = i.length; for (n.style.display = "none", u.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; r--;)delete l.prototype[i[r]]; return l() }; t.exports = Object.create || function(t, n) { var r; return null !== t ? (f.prototype = e(t), r = new f, f.prototype = null, r[s] = t) : r = l(), void 0 === n ? r : o(r, n) }, c[s] = !0 }, function(t, n, r) { var e = r(102), o = r(63); t.exports = Object.keys || function(t) { return e(t, o) } }, function(t, n, r) { var e = r(9), o = r(22), i = r(103).indexOf, c = r(44); t.exports = function(t, n) { var r, u = o(t), a = 0, s = []; for (r in u) !e(c, r) && e(u, r) && s.push(r); for (; n.length > a;)e(u, r = n[a++]) && (~i(s, r) || s.push(r)); return s } }, function(t, n, r) { var e = r(22), o = r(32), i = r(158), c = function(t) { return function(n, r, c) { var u, a = e(n), s = o(a.length), f = i(c, s); if (t && r != r) { for (; s > f;)if ((u = a[f++]) != u) return !0 } else for (; s > f; f++)if ((t || f in a) && a[f] === r) return t || f || 0; return !t && -1 } }; t.exports = { includes: c(!0), indexOf: c(!1) } }, function(t, n, r) { var e = r(33); t.exports = e("document", "documentElement") }, function(t, n, r) { var e = r(19), o = r(0)("toStringTag"), i = "Arguments" == e(function() { return arguments }()); t.exports = function(t) { var n, r, c; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function(t, n) { try { return t[n] } catch (t) { } }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (c = e(n)) && "function" == typeof n.callee ? "Arguments" : c } }, function(t, n, r) { r(162); var e = r(163), o = r(1), i = r(10), c = r(25), u = r(0)("toStringTag"); for (var a in e) { var s = o[a], f = s && s.prototype; f && !f[u] && i(f, u, a), c[a] = c.Array } }, function(t, n) { t.exports = function() { } }, function(t, n, r) { var e = r(6), o = r(64), i = r(0)("species"); t.exports = function(t, n) { var r; return o(t) && ("function" != typeof (r = t.constructor) || r !== Array && !o(r.prototype) ? e(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === n ? 0 : n) } }, function(t, n) { }, function(t, n, r) { var e = r(102), o = r(63).concat("length", "prototype"); n.f = Object.getOwnPropertyNames || function(t) { return e(t, o) } }, function(t, n, r) { var e = r(45), o = r(96), i = r(31), c = r(32), u = r(108), a = [].push, s = function(t) { var n = 1 == t, r = 2 == t, s = 3 == t, f = 4 == t, l = 6 == t, p = 5 == t || l; return function(v, h, d, y) { for (var g, m, b = i(v), x = o(b), w = e(h, d, 3), j = c(x.length), O = 0, S = y || u, _ = n ? S(v, j) : r ? S(v, 0) : void 0; j > O; O++)if ((p || O in x) && (m = w(g = x[O], O, b), t)) if (n) _[O] = m; else if (m) switch (t) { case 3: return !0; case 5: return g; case 6: return O; case 2: a.call(_, g) } else if (f) return !1; return l ? -1 : s || f ? f : _ } }; t.exports = { forEach: s(0), map: s(1), filter: s(2), some: s(3), every: s(4), find: s(5), findIndex: s(6) } }, function(t, n, r) { var e = r(1); t.exports = e.Promise }, function(t, n, r) { var e = r(11), o = r(193), i = r(32), c = r(45), u = r(194), a = r(195), s = function(t, n) { this.stopped = t, this.result = n }; (t.exports = function(t, n, r, f, l) { var p, v, h, d, y, g, m, b = c(n, r, f ? 2 : 1); if (l) p = t; else { if ("function" != typeof (v = u(t))) throw TypeError("Target is not iterable"); if (o(v)) { for (h = 0, d = i(t.length); d > h; h++)if ((y = f ? b(e(m = t[h])[0], m[1]) : b(t[h])) && y instanceof s) return y; return new s(!1) } p = v.call(t) } for (g = p.next; !(m = g.call(p)).done;)if ("object" == typeof (y = a(p, b, m.value, f)) && y && y instanceof s) return y; return new s(!1) }).stop = function(t) { return new s(!0, t) } }, function(t, n, r) { var e = r(11), o = r(23), i = r(0)("species"); t.exports = function(t, n) { var r, c = e(t).constructor; return void 0 === c || null == (r = e(c)[i]) ? n : o(r) } }, function(t, n, r) { var e, o, i, c = r(1), u = r(4), a = r(19), s = r(45), f = r(104), l = r(59), p = r(66), v = c.location, h = c.setImmediate, d = c.clearImmediate, y = c.process, g = c.MessageChannel, m = c.Dispatch, b = 0, x = {}, w = function(t) { if (x.hasOwnProperty(t)) { var n = x[t]; delete x[t], n() } }, j = function(t) { return function() { w(t) } }, O = function(t) { w(t.data) }, S = function(t) { c.postMessage(t + "", v.protocol + "//" + v.host) }; h && d || (h = function(t) { for (var n = [], r = 1; arguments.length > r;)n.push(arguments[r++]); return x[++b] = function() { ("function" == typeof t ? t : Function(t)).apply(void 0, n) }, e(b), b }, d = function(t) { delete x[t] }, "process" == a(y) ? e = function(t) { y.nextTick(j(t)) } : m && m.now ? e = function(t) { m.now(j(t)) } : g && !/(iphone|ipod|ipad).*applewebkit/i.test(p) ? (i = (o = new g).port2, o.port1.onmessage = O, e = s(i.postMessage, i, 1)) : !c.addEventListener || "function" != typeof postMessage || c.importScripts || u(S) ? e = "onreadystatechange" in l("script") ? function(t) { f.appendChild(l("script")).onreadystatechange = function() { f.removeChild(this), w(t) } } : function(t) { setTimeout(j(t), 0) } : (e = S, c.addEventListener("message", O, !1))), t.exports = { set: h, clear: d } }, function(t, n, r) { var e = r(11), o = r(6), i = r(67); t.exports = function(t, n) { if (e(t), o(n) && n.constructor === t) return n; var r = i.f(t); return (0, r.resolve)(n), r.promise } }, function(t, n) { t.exports = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } } }, function(t, n, r) { var e = r(46); t.exports = function(t, n, r) { if (e(t), void 0 === n) return t; switch (r) { case 0: return function() { return t.call(n) }; case 1: return function(r) { return t.call(n, r) }; case 2: return function(r, e) { return t.call(n, r, e) }; case 3: return function(r, e, o) { return t.call(n, r, e, o) } }return function() { return t.apply(n, arguments) } } }, function(t, n, r) { var e, o, i, c = r(2), u = r(12), a = r(26), s = r(118), f = r(82), l = r(49), p = r(68), v = c.location, h = c.setImmediate, d = c.clearImmediate, y = c.process, g = c.MessageChannel, m = c.Dispatch, b = 0, x = {}, w = function(t) { if (x.hasOwnProperty(t)) { var n = x[t]; delete x[t], n() } }, j = function(t) { return function() { w(t) } }, O = function(t) { w(t.data) }, S = function(t) { c.postMessage(t + "", v.protocol + "//" + v.host) }; h && d || (h = function(t) { for (var n = [], r = 1; arguments.length > r;)n.push(arguments[r++]); return x[++b] = function() { ("function" == typeof t ? t : Function(t)).apply(void 0, n) }, e(b), b }, d = function(t) { delete x[t] }, "process" == a(y) ? e = function(t) { y.nextTick(j(t)) } : m && m.now ? e = function(t) { m.now(j(t)) } : g && !/(iphone|ipod|ipad).*applewebkit/i.test(p) ? (i = (o = new g).port2, o.port1.onmessage = O, e = s(i.postMessage, i, 1)) : !c.addEventListener || "function" != typeof postMessage || c.importScripts || u(S) ? e = "onreadystatechange" in l("script") ? function(t) { f.appendChild(l("script")).onreadystatechange = function() { f.removeChild(this), w(t) } } : function(t) { setTimeout(j(t), 0) } : (e = S, c.addEventListener("message", O, !1))), t.exports = { set: h, clear: d } }, function(t, n, r) { "use strict"; var e = r(46), o = function(t) { var n, r; this.promise = new t((function(t, e) { if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor"); n = t, r = e })), this.resolve = e(n), this.reject = e(r) }; t.exports.f = function(t) { return new o(t) } }, function(t, n, r) { "use strict"; var e = r(4); t.exports = function(t, n) { var r = [][t]; return !r || !e((function() { r.call(null, n || function() { throw 1 }, 1) })) } }, function(t, n, r) { t.exports = r(148) }, function(t, n, r) { t.exports = r(164) }, function(t, n, r) { t.exports = r(218) }, function(t, n, r) { t.exports = r(225) }, function(t, n, r) { t.exports = r(229) }, function(t, n) { t.exports = function(t, n) { for (var r = t.split("."), e = n.split("."), o = 0; o < 3; o++) { var i = Number(r[o]), c = Number(e[o]); if (i > c) return 1; if (c > i) return -1; if (!isNaN(i) && isNaN(c)) return 1; if (isNaN(i) && !isNaN(c)) return -1 } return 0 } }, function(t, n, r) { r(129), r(146), t.exports = r(237) }, function(t, n, r) { "use strict"; var e = r(35), o = r(130), i = r(29), c = r(54), u = r(138), a = c.set, s = c.getterFor("Array Iterator"); t.exports = u(Array, "Array", (function(t, n) { a(this, { type: "Array Iterator", target: e(t), index: 0, kind: n }) }), (function() { var t = s(this), n = t.target, r = t.kind, e = t.index++; return !n || e >= n.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: e, done: !1 } : "values" == r ? { value: n[e], done: !1 } : { value: [e, n[e]], done: !1 } }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(t, n, r) { var e = r(5), o = r(77), i = r(14), c = e("unscopables"), u = Array.prototype; null == u[c] && i(u, c, o(null)), t.exports = function(t) { u[c][t] = !0 } }, function(t, n, r) { var e = r(2), o = r(48), i = e["__core-js_shared__"] || o("__core-js_shared__", {}); t.exports = i }, function(t, n, r) { var e = r(12); t.exports = !!Object.getOwnPropertySymbols && !e((function() { return !String(Symbol()) })) }, function(t, n, r) { var e = r(15), o = r(27), i = r(8), c = r(78); t.exports = e ? Object.defineProperties : function(t, n) { i(t); for (var r, e = c(n), u = e.length, a = 0; u > a;)o.f(t, r = e[a++], n[r]); return t } }, function(t, n, r) { var e = r(35), o = r(80), i = r(135), c = function(t) { return function(n, r, c) { var u, a = e(n), s = o(a.length), f = i(c, s); if (t && r != r) { for (; s > f;)if ((u = a[f++]) != u) return !0 } else for (; s > f; f++)if ((t || f in a) && a[f] === r) return t || f || 0; return !t && -1 } }; t.exports = { includes: c(!0), indexOf: c(!1) } }, function(t, n, r) { var e = r(81), o = Math.max, i = Math.min; t.exports = function(t, n) { var r = e(t); return r < 0 ? o(r + n, 0) : i(r, n) } }, function(t, n, r) { t.exports = r(2) }, function(t, n, r) { var e = r(2), o = r(83), i = e.WeakMap; t.exports = "function" == typeof i && /native code/.test(o.call(i)) }, function(t, n, r) { "use strict"; var e = r(55), o = r(142), i = r(88), c = r(144), u = r(57), a = r(14), s = r(38), f = r(5), l = r(37), p = r(29), v = r(87), h = v.IteratorPrototype, d = v.BUGGY_SAFARI_ITERATORS, y = f("iterator"), g = function() { return this }; t.exports = function(t, n, r, f, v, m, b) { o(r, n, f); var x, w, j, O = function(t) { if (t === v && E) return E; if (!d && t in P) return P[t]; switch (t) { case "keys": case "values": case "entries": return function() { return new r(this, t) } }return function() { return new r(this) } }, S = n + " Iterator", _ = !1, P = t.prototype, T = P[y] || P["@@iterator"] || v && P[v], E = !d && T || O(v), A = "Array" == n && P.entries || T; if (A && (x = i(A.call(new t)), h !== Object.prototype && x.next && (l || i(x) === h || (c ? c(x, h) : "function" != typeof x[y] && a(x, y, g)), u(x, S, !0, !0), l && (p[S] = g))), "values" == v && T && "values" !== T.name && (_ = !0, E = function() { return T.call(this) }), l && !b || P[y] === E || a(P, y, E), p[n] = E, v) if (w = { values: O("values"), keys: m ? E : O("keys"), entries: O("entries") }, b) for (j in w) !d && !_ && j in P || s(P, j, w[j]); else e({ target: n, proto: !0, forced: d || _ }, w); return w } }, function(t, n, r) { var e = r(13), o = r(140), i = r(56), c = r(27); t.exports = function(t, n) { for (var r = o(n), u = c.f, a = i.f, s = 0; s < r.length; s++) { var f = r[s]; e(t, f) || u(t, f, a(n, f)) } } }, function(t, n, r) { var e = r(28), o = r(141), i = r(85), c = r(8); t.exports = e("Reflect", "ownKeys") || function(t) { var n = o.f(c(t)), r = i.f; return r ? n.concat(r(t)) : n } }, function(t, n, r) { var e = r(79), o = r(52).concat("length", "prototype"); n.f = Object.getOwnPropertyNames || function(t) { return e(t, o) } }, function(t, n, r) { "use strict"; var e = r(87).IteratorPrototype, o = r(77), i = r(50), c = r(57), u = r(29), a = function() { return this }; t.exports = function(t, n, r) { var s = n + " Iterator"; return t.prototype = o(e, { next: i(1, r) }), c(t, s, !1, !0), u[s] = a, t } }, function(t, n, r) { var e = r(12); t.exports = !e((function() { function t() { } return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })) }, function(t, n, r) { var e = r(8), o = r(145); t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, n = !1, r = {}; try { (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array } catch (t) { } return function(r, i) { return e(r), o(i), n ? t.call(r, i) : r.__proto__ = i, r } }() : void 0) }, function(t, n, r) { var e = r(16); t.exports = function(t) { if (!e(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function(t, n, r) { var e = r(55), o = r(147); e({ target: "Object", stat: !0, forced: Object.assign !== o }, { assign: o }) }, function(t, n, r) { "use strict"; var e = r(15), o = r(12), i = r(78), c = r(85), u = r(84), a = r(89), s = r(71), f = Object.assign; t.exports = !f || o((function() { var t = {}, n = {}, r = Symbol(); return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) { n[t] = t })), 7 != f({}, t)[r] || "abcdefghijklmnopqrst" != i(f({}, n)).join("") })) ? function(t, n) { for (var r = a(t), o = arguments.length, f = 1, l = c.f, p = u.f; o > f;)for (var v, h = s(arguments[f++]), d = l ? i(h).concat(l(h)) : i(h), y = d.length, g = 0; y > g;)v = d[g++], e && !p.call(h, v) || (r[v] = h[v]); return r } : f }, function(t, n, r) { t.exports = r(149) }, function(t, n, r) { r(90), r(93), r(106); var e = r(58); t.exports = e.f("iterator") }, function(t, n, r) { var e = r(1), o = r(151), i = e["__core-js_shared__"] || o("__core-js_shared__", {}); t.exports = i }, function(t, n, r) { var e = r(1), o = r(10); t.exports = function(t, n) { try { o(e, t, n) } catch (r) { e[t] = n } return n } }, function(t, n, r) { var e = r(61), o = r(41), i = function(t) { return function(n, r) { var i, c, u = String(o(n)), a = e(r), s = u.length; return a < 0 || a >= s ? t ? "" : void 0 : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536 } }; t.exports = { codeAt: i(!1), charAt: i(!0) } }, function(t, n, r) { var e = r(1), o = r(154), i = e.WeakMap; t.exports = "function" == typeof i && /native code/.test(o.call(i)) }, function(t, n, r) { var e = r(39); t.exports = e("native-function-to-string", Function.toString) }, function(t, n, r) { "use strict"; var e = r(98).IteratorPrototype, o = r(100), i = r(30), c = r(24), u = r(25), a = function() { return this }; t.exports = function(t, n, r) { var s = n + " Iterator"; return t.prototype = o(e, { next: i(1, r) }), c(t, s, !1, !0), u[s] = a, t } }, function(t, n, r) { var e = r(4); t.exports = !e((function() { function t() { } return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })) }, function(t, n, r) { var e = r(17), o = r(18), i = r(11), c = r(101); t.exports = e ? Object.defineProperties : function(t, n) { i(t); for (var r, e = c(n), u = e.length, a = 0; u > a;)o.f(t, r = e[a++], n[r]); return t } }, function(t, n, r) { var e = r(61), o = Math.max, i = Math.min; t.exports = function(t, n) { var r = e(t); return r < 0 ? o(r + n, 0) : i(r, n) } }, function(t, n, r) { "use strict"; var e = r(105), o = {}; o[r(0)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function() { return "[object " + e(this) + "]" } : o.toString }, function(t, n, r) { var e = r(11), o = r(161); t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, n = !1, r = {}; try { (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array } catch (t) { } return function(r, i) { return e(r), o(i), n ? t.call(r, i) : r.__proto__ = i, r } }() : void 0) }, function(t, n, r) { var e = r(6); t.exports = function(t) { if (!e(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function(t, n, r) { "use strict"; var e = r(22), o = r(107), i = r(25), c = r(42), u = r(94), a = c.set, s = c.getterFor("Array Iterator"); t.exports = u(Array, "Array", (function(t, n) { a(this, { type: "Array Iterator", target: e(t), index: 0, kind: n }) }), (function() { var t = s(this), n = t.target, r = t.kind, e = t.index++; return !n || e >= n.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: e, done: !1 } : "values" == r ? { value: n[e], done: !1 } : { value: [e, n[e]], done: !1 } }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(t, n) { t.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, function(t, n, r) { t.exports = r(165) }, function(t, n, r) { r(166), r(109), r(169), r(172), r(173), r(174), r(175), r(90), r(176), r(177), r(178), r(179), r(180), r(181), r(182), r(183), r(184), r(185), r(186); var e = r(20); t.exports = e.Symbol }, function(t, n, r) { "use strict"; var e = r(7), o = r(4), i = r(64), c = r(6), u = r(31), a = r(32), s = r(167), f = r(108), l = r(168), p = r(0), v = r(65), h = p("isConcatSpreadable"), d = v >= 51 || !o((function() { var t = []; return t[h] = !1, t.concat()[0] !== t })), y = l("concat"), g = function(t) { if (!c(t)) return !1; var n = t[h]; return void 0 !== n ? !!n : i(t) }; e({ target: "Array", proto: !0, forced: !d || !y }, { concat: function(t) { var n, r, e, o, i, c = u(this), l = f(c, 0), p = 0; for (n = -1, e = arguments.length; n < e; n++)if (i = -1 === n ? c : arguments[n], g(i)) { if (p + (o = a(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded"); for (r = 0; r < o; r++, p++)r in i && s(l, p, i[r]) } else { if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded"); s(l, p++, i) } return l.length = p, l } }) }, function(t, n, r) { "use strict"; var e = r(40), o = r(18), i = r(30); t.exports = function(t, n, r) { var c = e(n); c in t ? o.f(t, c, i(0, r)) : t[c] = r } }, function(t, n, r) { var e = r(4), o = r(0), i = r(65), c = o("species"); t.exports = function(t) { return i >= 51 || !e((function() { var n = []; return (n.constructor = {})[c] = function() { return { foo: 1 } }, 1 !== n[t](Boolean).foo })) } }, function(t, n, r) { "use strict"; var e = r(7), o = r(1), i = r(21), c = r(17), u = r(92), a = r(4), s = r(9), f = r(64), l = r(6), p = r(11), v = r(31), h = r(22), d = r(40), y = r(30), g = r(100), m = r(101), b = r(110), x = r(170), w = r(171), j = r(62), O = r(18), S = r(95), _ = r(10), P = r(34), T = r(39), E = r(43), A = r(44), k = r(60), L = r(0), I = r(58), M = r(3), C = r(24), N = r(42), R = r(111).forEach, D = E("hidden"), F = L("toPrimitive"), W = N.set, G = N.getterFor("Symbol"), U = Object.prototype, B = o.Symbol, q = o.JSON, V = q && q.stringify, H = j.f, z = O.f, Y = x.f, J = S.f, K = T("symbols"), $ = T("op-symbols"), Q = T("string-to-symbol-registry"), X = T("symbol-to-string-registry"), Z = T("wks"), tt = o.QObject, nt = !tt || !tt.prototype || !tt.prototype.findChild, rt = c && a((function() { return 7 != g(z({}, "a", { get: function() { return z(this, "a", { value: 7 }).a } })).a })) ? function(t, n, r) { var e = H(U, n); e && delete U[n], z(t, n, r), e && t !== U && z(U, n, e) } : z, et = function(t, n) { var r = K[t] = g(B.prototype); return W(r, { type: "Symbol", tag: t, description: n }), c || (r.description = n), r }, ot = u && "symbol" == typeof B.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return Object(t) instanceof B }, it = function(t, n, r) { t === U && it($, n, r), p(t); var e = d(n, !0); return p(r), s(K, e) ? (r.enumerable ? (s(t, D) && t[D][e] && (t[D][e] = !1), r = g(r, { enumerable: y(0, !1) })) : (s(t, D) || z(t, D, y(1, {})), t[D][e] = !0), rt(t, e, r)) : z(t, e, r) }, ct = function(t, n) { p(t); var r = h(n), e = m(r).concat(ft(r)); return R(e, (function(n) { c && !ut.call(r, n) || it(t, n, r[n]) })), t }, ut = function(t) { var n = d(t, !0), r = J.call(this, n); return !(this === U && s(K, n) && !s($, n)) && (!(r || !s(this, n) || !s(K, n) || s(this, D) && this[D][n]) || r) }, at = function(t, n) { var r = h(t), e = d(n, !0); if (r !== U || !s(K, e) || s($, e)) { var o = H(r, e); return !o || !s(K, e) || s(r, D) && r[D][e] || (o.enumerable = !0), o } }, st = function(t) { var n = Y(h(t)), r = []; return R(n, (function(t) { s(K, t) || s(A, t) || r.push(t) })), r }, ft = function(t) { var n = t === U, r = Y(n ? $ : h(t)), e = []; return R(r, (function(t) { !s(K, t) || n && !s(U, t) || e.push(K[t]) })), e }; u || (P((B = function() { if (this instanceof B) throw TypeError("Symbol is not a constructor"); var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, n = k(t), r = function(t) { this === U && r.call($, t), s(this, D) && s(this[D], n) && (this[D][n] = !1), rt(this, n, y(1, t)) }; return c && nt && rt(U, n, { configurable: !0, set: r }), et(n, t) }).prototype, "toString", (function() { return G(this).tag })), S.f = ut, O.f = it, j.f = at, b.f = x.f = st, w.f = ft, c && (z(B.prototype, "description", { configurable: !0, get: function() { return G(this).description } }), i || P(U, "propertyIsEnumerable", ut, { unsafe: !0 })), I.f = function(t) { return et(L(t), t) }), e({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: B }), R(m(Z), (function(t) { M(t) })), e({ target: "Symbol", stat: !0, forced: !u }, { for: function(t) { var n = String(t); if (s(Q, n)) return Q[n]; var r = B(n); return Q[n] = r, X[r] = n, r }, keyFor: function(t) { if (!ot(t)) throw TypeError(t + " is not a symbol"); if (s(X, t)) return X[t] }, useSetter: function() { nt = !0 }, useSimple: function() { nt = !1 } }), e({ target: "Object", stat: !0, forced: !u, sham: !c }, { create: function(t, n) { return void 0 === n ? g(t) : ct(g(t), n) }, defineProperty: it, defineProperties: ct, getOwnPropertyDescriptor: at }), e({ target: "Object", stat: !0, forced: !u }, { getOwnPropertyNames: st, getOwnPropertySymbols: ft }), e({ target: "Object", stat: !0, forced: a((function() { w.f(1) })) }, { getOwnPropertySymbols: function(t) { return w.f(v(t)) } }), q && e({ target: "JSON", stat: !0, forced: !u || a((function() { var t = B(); return "[null]" != V([t]) || "{}" != V({ a: t }) || "{}" != V(Object(t)) })) }, { stringify: function(t) { for (var n, r, e = [t], o = 1; arguments.length > o;)e.push(arguments[o++]); if (r = n = e[1], (l(n) || void 0 !== t) && !ot(t)) return f(n) || (n = function(t, n) { if ("function" == typeof r && (n = r.call(this, t, n)), !ot(n)) return n }), e[1] = n, V.apply(q, e) } }), B.prototype[F] || _(B.prototype, F, B.prototype.valueOf), C(B, "Symbol"), A[D] = !0 }, function(t, n, r) { var e = r(22), o = r(110).f, i = {}.toString, c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []; t.exports.f = function(t) { return c && "[object Window]" == i.call(t) ? function(t) { try { return o(t) } catch (t) { return c.slice() } }(t) : o(e(t)) } }, function(t, n) { n.f = Object.getOwnPropertySymbols }, function(t, n, r) { r(3)("asyncIterator") }, function(t, n) { }, function(t, n, r) { r(3)("hasInstance") }, function(t, n, r) { r(3)("isConcatSpreadable") }, function(t, n, r) { r(3)("match") }, function(t, n, r) { r(3)("matchAll") }, function(t, n, r) { r(3)("replace") }, function(t, n, r) { r(3)("search") }, function(t, n, r) { r(3)("species") }, function(t, n, r) { r(3)("split") }, function(t, n, r) { r(3)("toPrimitive") }, function(t, n, r) { r(3)("toStringTag") }, function(t, n, r) { r(3)("unscopables") }, function(t, n, r) { r(24)(Math, "Math", !0) }, function(t, n, r) { var e = r(1); r(24)(e.JSON, "JSON", !0) }, function(t, n, r) { t.exports = r(188) }, function(t, n, r) { r(109), r(93), r(106), r(189), r(199), r(200); var e = r(20); t.exports = e.Promise }, function(t, n, r) { "use strict"; var e, o, i, c, u = r(7), a = r(21), s = r(1), f = r(33), l = r(112), p = r(34), v = r(190), h = r(24), d = r(191), y = r(6), g = r(23), m = r(192), b = r(19), x = r(113), w = r(196), j = r(114), O = r(115).set, S = r(197), _ = r(116), P = r(198), T = r(67), E = r(117), A = r(42), k = r(97), L = r(0), I = r(65), M = L("species"), C = "Promise", N = A.get, R = A.set, D = A.getterFor(C), F = l, W = s.TypeError, G = s.document, U = s.process, B = f("fetch"), q = T.f, V = q, H = "process" == b(U), z = !!(G && G.createEvent && s.dispatchEvent), Y = k(C, (function() { if (66 === I) return !0; if (!H && "function" != typeof PromiseRejectionEvent) return !0; if (a && !F.prototype.finally) return !0; if (I >= 51 && /native code/.test(F)) return !1; var t = F.resolve(1), n = function(t) { t((function() { }), (function() { })) }; return (t.constructor = {})[M] = n, !(t.then((function() { })) instanceof n) })), J = Y || !w((function(t) { F.all(t).catch((function() { })) })), K = function(t) { var n; return !(!y(t) || "function" != typeof (n = t.then)) && n }, $ = function(t, n, r) { if (!n.notified) { n.notified = !0; var e = n.reactions; S((function() { for (var o = n.value, i = 1 == n.state, c = 0; e.length > c;) { var u, a, s, f = e[c++], l = i ? f.ok : f.fail, p = f.resolve, v = f.reject, h = f.domain; try { l ? (i || (2 === n.rejection && tt(t, n), n.rejection = 1), !0 === l ? u = o : (h && h.enter(), u = l(o), h && (h.exit(), s = !0)), u === f.promise ? v(W("Promise-chain cycle")) : (a = K(u)) ? a.call(u, p, v) : p(u)) : v(o) } catch (t) { h && !s && h.exit(), v(t) } } n.reactions = [], n.notified = !1, r && !n.rejection && X(t, n) })) } }, Q = function(t, n, r) { var e, o; z ? ((e = G.createEvent("Event")).promise = n, e.reason = r, e.initEvent(t, !1, !0), s.dispatchEvent(e)) : e = { promise: n, reason: r }, (o = s["on" + t]) ? o(e) : "unhandledrejection" === t && P("Unhandled promise rejection", r) }, X = function(t, n) { O.call(s, (function() { var r, e = n.value; if (Z(n) && (r = E((function() { H ? U.emit("unhandledRejection", e, t) : Q("unhandledrejection", t, e) })), n.rejection = H || Z(n) ? 2 : 1, r.error)) throw r.value })) }, Z = function(t) { return 1 !== t.rejection && !t.parent }, tt = function(t, n) { O.call(s, (function() { H ? U.emit("rejectionHandled", t) : Q("rejectionhandled", t, n.value) })) }, nt = function(t, n, r, e) { return function(o) { t(n, r, o, e) } }, rt = function(t, n, r, e) { n.done || (n.done = !0, e && (n = e), n.value = r, n.state = 2, $(t, n, !0)) }, et = function(t, n, r, e) { if (!n.done) { n.done = !0, e && (n = e); try { if (t === r) throw W("Promise can't be resolved itself"); var o = K(r); o ? S((function() { var e = { done: !1 }; try { o.call(r, nt(et, t, e, n), nt(rt, t, e, n)) } catch (r) { rt(t, e, r, n) } })) : (n.value = r, n.state = 1, $(t, n, !1)) } catch (r) { rt(t, { done: !1 }, r, n) } } }; Y && (F = function(t) { m(this, F, C), g(t), e.call(this); var n = N(this); try { t(nt(et, this, n), nt(rt, this, n)) } catch (t) { rt(this, n, t) } }, (e = function(t) { R(this, { type: C, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = v(F.prototype, { then: function(t, n) { var r = D(this), e = q(j(this, F)); return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = H ? U.domain : void 0, r.parent = !0, r.reactions.push(e), 0 != r.state && $(this, r, !1), e.promise }, catch: function(t) { return this.then(void 0, t) } }), o = function() { var t = new e, n = N(t); this.promise = t, this.resolve = nt(et, t, n), this.reject = nt(rt, t, n) }, T.f = q = function(t) { return t === F || t === i ? new o(t) : V(t) }, a || "function" != typeof l || (c = l.prototype.then, p(l.prototype, "then", (function(t, n) { var r = this; return new F((function(t, n) { c.call(r, t, n) })).then(t, n) }), { unsafe: !0 }), "function" == typeof B && u({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(t) { return _(F, B.apply(s, arguments)) } }))), u({ global: !0, wrap: !0, forced: Y }, { Promise: F }), h(F, C, !1, !0), d(C), i = f(C), u({ target: C, stat: !0, forced: Y }, { reject: function(t) { var n = q(this); return n.reject.call(void 0, t), n.promise } }), u({ target: C, stat: !0, forced: a || Y }, { resolve: function(t) { return _(a && this === i ? F : this, t) } }), u({ target: C, stat: !0, forced: J }, { all: function(t) { var n = this, r = q(n), e = r.resolve, o = r.reject, i = E((function() { var r = g(n.resolve), i = [], c = 0, u = 1; x(t, (function(t) { var a = c++, s = !1; i.push(void 0), u++, r.call(n, t).then((function(t) { s || (s = !0, i[a] = t, --u || e(i)) }), o) })), --u || e(i) })); return i.error && o(i.value), r.promise }, race: function(t) { var n = this, r = q(n), e = r.reject, o = E((function() { var o = g(n.resolve); x(t, (function(t) { o.call(n, t).then(r.resolve, e) })) })); return o.error && e(o.value), r.promise } }) }, function(t, n, r) { var e = r(34); t.exports = function(t, n, r) { for (var o in n) r && r.unsafe && t[o] ? t[o] = n[o] : e(t, o, n[o], r); return t } }, function(t, n, r) { "use strict"; var e = r(33), o = r(18), i = r(0), c = r(17), u = i("species"); t.exports = function(t) { var n = e(t), r = o.f; c && n && !n[u] && r(n, u, { configurable: !0, get: function() { return this } }) } }, function(t, n) { t.exports = function(t, n, r) { if (!(t instanceof n)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation"); return t } }, function(t, n, r) { var e = r(0), o = r(25), i = e("iterator"), c = Array.prototype; t.exports = function(t) { return void 0 !== t && (o.Array === t || c[i] === t) } }, function(t, n, r) { var e = r(105), o = r(25), i = r(0)("iterator"); t.exports = function(t) { if (null != t) return t[i] || t["@@iterator"] || o[e(t)] } }, function(t, n, r) { var e = r(11); t.exports = function(t, n, r, o) { try { return o ? n(e(r)[0], r[1]) : n(r) } catch (n) { var i = t.return; throw void 0 !== i && e(i.call(t)), n } } }, function(t, n, r) { var e = r(0)("iterator"), o = !1; try { var i = 0, c = { next: function() { return { done: !!i++ } }, return: function() { o = !0 } }; c[e] = function() { return this }, Array.from(c, (function() { throw 2 })) } catch (t) { } t.exports = function(t, n) { if (!n && !o) return !1; var r = !1; try { var i = {}; i[e] = function() { return { next: function() { return { done: r = !0 } } } }, t(i) } catch (t) { } return r } }, function(t, n, r) { var e, o, i, c, u, a, s, f, l = r(1), p = r(62).f, v = r(19), h = r(115).set, d = r(66), y = l.MutationObserver || l.WebKitMutationObserver, g = l.process, m = l.Promise, b = "process" == v(g), x = p(l, "queueMicrotask"), w = x && x.value; w || (e = function() { var t, n; for (b && (t = g.domain) && t.exit(); o;) { n = o.fn, o = o.next; try { n() } catch (t) { throw o ? c() : i = void 0, t } } i = void 0, t && t.enter() }, b ? c = function() { g.nextTick(e) } : y && !/(iphone|ipod|ipad).*applewebkit/i.test(d) ? (u = !0, a = document.createTextNode(""), new y(e).observe(a, { characterData: !0 }), c = function() { a.data = u = !u }) : m && m.resolve ? (s = m.resolve(void 0), f = s.then, c = function() { f.call(s, e) }) : c = function() { h.call(l, e) }), t.exports = w || function(t) { var n = { fn: t, next: void 0 }; i && (i.next = n), o || (o = n, c()), i = n } }, function(t, n, r) { var e = r(1); t.exports = function(t, n) { var r = e.console; r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, n)) } }, function(t, n, r) { "use strict"; var e = r(7), o = r(23), i = r(67), c = r(117), u = r(113); e({ target: "Promise", stat: !0 }, { allSettled: function(t) { var n = this, r = i.f(n), e = r.resolve, a = r.reject, s = c((function() { var r = o(n.resolve), i = [], c = 0, a = 1; u(t, (function(t) { var o = c++, u = !1; i.push(void 0), a++, r.call(n, t).then((function(t) { u || (u = !0, i[o] = { status: "fulfilled", value: t }, --a || e(i)) }), (function(t) { u || (u = !0, i[o] = { status: "rejected", reason: t }, --a || e(i)) })) })), --a || e(i) })); return s.error && a(s.value), r.promise } }) }, function(t, n, r) { "use strict"; var e = r(7), o = r(21), i = r(112), c = r(33), u = r(114), a = r(116), s = r(34); e({ target: "Promise", proto: !0, real: !0 }, { finally: function(t) { var n = u(this, c("Promise")), r = "function" == typeof t; return this.then(r ? function(r) { return a(n, t()).then((function() { return r })) } : t, r ? function(r) { return a(n, t()).then((function() { throw r })) } : t) } }), o || "function" != typeof i || i.prototype.finally || s(i.prototype, "finally", c("Promise").prototype.finally) }, function(t, n, r) { "use strict"; var e, o, i, c, u = r(55), a = r(37), s = r(2), f = r(28), l = r(202), p = r(38), v = r(203), h = r(57), d = r(204), y = r(16), g = r(46), m = r(205), b = r(26), x = r(206), w = r(211), j = r(212), O = r(119).set, S = r(213), _ = r(214), P = r(215), T = r(120), E = r(216), A = r(54), k = r(86), L = r(5), I = r(217), M = L("species"), C = "Promise", N = A.get, R = A.set, D = A.getterFor(C), F = l, W = s.TypeError, G = s.document, U = s.process, B = f("fetch"), q = T.f, V = q, H = "process" == b(U), z = !!(G && G.createEvent && s.dispatchEvent), Y = k(C, (function() { if (66 === I) return !0; if (!H && "function" != typeof PromiseRejectionEvent) return !0; if (a && !F.prototype.finally) return !0; if (I >= 51 && /native code/.test(F)) return !1; var t = F.resolve(1), n = function(t) { t((function() { }), (function() { })) }; return (t.constructor = {})[M] = n, !(t.then((function() { })) instanceof n) })), J = Y || !w((function(t) { F.all(t).catch((function() { })) })), K = function(t) { var n; return !(!y(t) || "function" != typeof (n = t.then)) && n }, $ = function(t, n, r) { if (!n.notified) { n.notified = !0; var e = n.reactions; S((function() { for (var o = n.value, i = 1 == n.state, c = 0; e.length > c;) { var u, a, s, f = e[c++], l = i ? f.ok : f.fail, p = f.resolve, v = f.reject, h = f.domain; try { l ? (i || (2 === n.rejection && tt(t, n), n.rejection = 1), !0 === l ? u = o : (h && h.enter(), u = l(o), h && (h.exit(), s = !0)), u === f.promise ? v(W("Promise-chain cycle")) : (a = K(u)) ? a.call(u, p, v) : p(u)) : v(o) } catch (t) { h && !s && h.exit(), v(t) } } n.reactions = [], n.notified = !1, r && !n.rejection && X(t, n) })) } }, Q = function(t, n, r) { var e, o; z ? ((e = G.createEvent("Event")).promise = n, e.reason = r, e.initEvent(t, !1, !0), s.dispatchEvent(e)) : e = { promise: n, reason: r }, (o = s["on" + t]) ? o(e) : "unhandledrejection" === t && P("Unhandled promise rejection", r) }, X = function(t, n) { O.call(s, (function() { var r, e = n.value; if (Z(n) && (r = E((function() { H ? U.emit("unhandledRejection", e, t) : Q("unhandledrejection", t, e) })), n.rejection = H || Z(n) ? 2 : 1, r.error)) throw r.value })) }, Z = function(t) { return 1 !== t.rejection && !t.parent }, tt = function(t, n) { O.call(s, (function() { H ? U.emit("rejectionHandled", t) : Q("rejectionhandled", t, n.value) })) }, nt = function(t, n, r, e) { return function(o) { t(n, r, o, e) } }, rt = function(t, n, r, e) { n.done || (n.done = !0, e && (n = e), n.value = r, n.state = 2, $(t, n, !0)) }, et = function(t, n, r, e) { if (!n.done) { n.done = !0, e && (n = e); try { if (t === r) throw W("Promise can't be resolved itself"); var o = K(r); o ? S((function() { var e = { done: !1 }; try { o.call(r, nt(et, t, e, n), nt(rt, t, e, n)) } catch (r) { rt(t, e, r, n) } })) : (n.value = r, n.state = 1, $(t, n, !1)) } catch (r) { rt(t, { done: !1 }, r, n) } } }; Y && (F = function(t) { m(this, F, C), g(t), e.call(this); var n = N(this); try { t(nt(et, this, n), nt(rt, this, n)) } catch (t) { rt(this, n, t) } }, (e = function(t) { R(this, { type: C, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = v(F.prototype, { then: function(t, n) { var r = D(this), e = q(j(this, F)); return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = H ? U.domain : void 0, r.parent = !0, r.reactions.push(e), 0 != r.state && $(this, r, !1), e.promise }, catch: function(t) { return this.then(void 0, t) } }), o = function() { var t = new e, n = N(t); this.promise = t, this.resolve = nt(et, t, n), this.reject = nt(rt, t, n) }, T.f = q = function(t) { return t === F || t === i ? new o(t) : V(t) }, a || "function" != typeof l || (c = l.prototype.then, p(l.prototype, "then", (function(t, n) { var r = this; return new F((function(t, n) { c.call(r, t, n) })).then(t, n) }), { unsafe: !0 }), "function" == typeof B && u({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(t) { return _(F, B.apply(s, arguments)) } }))), u({ global: !0, wrap: !0, forced: Y }, { Promise: F }), h(F, C, !1, !0), d(C), i = f(C), u({ target: C, stat: !0, forced: Y }, { reject: function(t) { var n = q(this); return n.reject.call(void 0, t), n.promise } }), u({ target: C, stat: !0, forced: a || Y }, { resolve: function(t) { return _(a && this === i ? F : this, t) } }), u({ target: C, stat: !0, forced: J }, { all: function(t) { var n = this, r = q(n), e = r.resolve, o = r.reject, i = E((function() { var r = g(n.resolve), i = [], c = 0, u = 1; x(t, (function(t) { var a = c++, s = !1; i.push(void 0), u++, r.call(n, t).then((function(t) { s || (s = !0, i[a] = t, --u || e(i)) }), o) })), --u || e(i) })); return i.error && o(i.value), r.promise }, race: function(t) { var n = this, r = q(n), e = r.reject, o = E((function() { var o = g(n.resolve); x(t, (function(t) { o.call(n, t).then(r.resolve, e) })) })); return o.error && e(o.value), r.promise } }) }, function(t, n, r) { var e = r(2); t.exports = e.Promise }, function(t, n, r) { var e = r(38); t.exports = function(t, n, r) { for (var o in n) e(t, o, n[o], r); return t } }, function(t, n, r) { "use strict"; var e = r(28), o = r(27), i = r(5), c = r(15), u = i("species"); t.exports = function(t) { var n = e(t), r = o.f; c && n && !n[u] && r(n, u, { configurable: !0, get: function() { return this } }) } }, function(t, n) { t.exports = function(t, n, r) { if (!(t instanceof n)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation"); return t } }, function(t, n, r) { var e = r(8), o = r(207), i = r(80), c = r(118), u = r(208), a = r(210), s = function(t, n) { this.stopped = t, this.result = n }; (t.exports = function(t, n, r, f, l) { var p, v, h, d, y, g, m, b = c(n, r, f ? 2 : 1); if (l) p = t; else { if ("function" != typeof (v = u(t))) throw TypeError("Target is not iterable"); if (o(v)) { for (h = 0, d = i(t.length); d > h; h++)if ((y = f ? b(e(m = t[h])[0], m[1]) : b(t[h])) && y instanceof s) return y; return new s(!1) } p = v.call(t) } for (g = p.next; !(m = g.call(p)).done;)if ("object" == typeof (y = a(p, b, m.value, f)) && y && y instanceof s) return y; return new s(!1) }).stop = function(t) { return new s(!0, t) } }, function(t, n, r) { var e = r(5), o = r(29), i = e("iterator"), c = Array.prototype; t.exports = function(t) { return void 0 !== t && (o.Array === t || c[i] === t) } }, function(t, n, r) { var e = r(209), o = r(29), i = r(5)("iterator"); t.exports = function(t) { if (null != t) return t[i] || t["@@iterator"] || o[e(t)] } }, function(t, n, r) { var e = r(26), o = r(5)("toStringTag"), i = "Arguments" == e(function() { return arguments }()); t.exports = function(t) { var n, r, c; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function(t, n) { try { return t[n] } catch (t) { } }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (c = e(n)) && "function" == typeof n.callee ? "Arguments" : c } }, function(t, n, r) { var e = r(8); t.exports = function(t, n, r, o) { try { return o ? n(e(r)[0], r[1]) : n(r) } catch (n) { var i = t.return; throw void 0 !== i && e(i.call(t)), n } } }, function(t, n, r) { var e = r(5)("iterator"), o = !1; try { var i = 0, c = { next: function() { return { done: !!i++ } }, return: function() { o = !0 } }; c[e] = function() { return this }, Array.from(c, (function() { throw 2 })) } catch (t) { } t.exports = function(t, n) { if (!n && !o) return !1; var r = !1; try { var i = {}; i[e] = function() { return { next: function() { return { done: r = !0 } } } }, t(i) } catch (t) { } return r } }, function(t, n, r) { var e = r(8), o = r(46), i = r(5)("species"); t.exports = function(t, n) { var r, c = e(t).constructor; return void 0 === c || null == (r = e(c)[i]) ? n : o(r) } }, function(t, n, r) { var e, o, i, c, u, a, s, f, l = r(2), p = r(56).f, v = r(26), h = r(119).set, d = r(68), y = l.MutationObserver || l.WebKitMutationObserver, g = l.process, m = l.Promise, b = "process" == v(g), x = p(l, "queueMicrotask"), w = x && x.value; w || (e = function() { var t, n; for (b && (t = g.domain) && t.exit(); o;) { n = o.fn, o = o.next; try { n() } catch (t) { throw o ? c() : i = void 0, t } } i = void 0, t && t.enter() }, b ? c = function() { g.nextTick(e) } : y && !/(iphone|ipod|ipad).*applewebkit/i.test(d) ? (u = !0, a = document.createTextNode(""), new y(e).observe(a, { characterData: !0 }), c = function() { a.data = u = !u }) : m && m.resolve ? (s = m.resolve(void 0), f = s.then, c = function() { f.call(s, e) }) : c = function() { h.call(l, e) }), t.exports = w || function(t) { var n = { fn: t, next: void 0 }; i && (i.next = n), o || (o = n, c()), i = n } }, function(t, n, r) { var e = r(8), o = r(16), i = r(120); t.exports = function(t, n) { if (e(t), o(n) && n.constructor === t) return n; var r = i.f(t); return (0, r.resolve)(n), r.promise } }, function(t, n, r) { var e = r(2); t.exports = function(t, n) { var r = e.console; r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, n)) } }, function(t, n) { t.exports = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } } }, function(t, n, r) { var e, o, i = r(2), c = r(68), u = i.process, a = u && u.versions, s = a && a.v8; s ? o = (e = s.split("."))[0] + e[1] : c && (!(e = c.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = c.match(/Chrome\/(\d+)/)) && (o = e[1]), t.exports = o && +o }, function(t, n, r) { t.exports = r(219) }, function(t, n, r) { var e = r(220), o = String.prototype; t.exports = function(t) { var n = t.startsWith; return "string" == typeof t || t === o || t instanceof String && n === o.startsWith ? e : n } }, function(t, n, r) { r(221); var e = r(47); t.exports = e("String").startsWith }, function(t, n, r) { "use strict"; var e = r(7), o = r(32), i = r(222), c = r(41), u = r(224), a = "".startsWith, s = Math.min; e({ target: "String", proto: !0, forced: !u("startsWith") }, { startsWith: function(t) { var n = String(c(this)); i(t); var r = o(s(arguments.length > 1 ? arguments[1] : void 0, n.length)), e = String(t); return a ? a.call(n, e, r) : n.slice(r, r + e.length) === e } }) }, function(t, n, r) { var e = r(223); t.exports = function(t) { if (e(t)) throw TypeError("The method doesn't accept regular expressions"); return t } }, function(t, n, r) { var e = r(6), o = r(19), i = r(0)("match"); t.exports = function(t) { var n; return e(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t)) } }, function(t, n, r) { var e = r(0)("match"); t.exports = function(t) { var n = /./; try { "/./"[t](n) } catch (r) { try { return n[e] = !1, "/./"[t](n) } catch (t) { } } return !1 } }, function(t, n, r) { t.exports = r(226) }, function(t, n, r) { var e = r(227), o = Array.prototype; t.exports = function(t) { var n = t.find; return t === o || t instanceof Array && n === o.find ? e : n } }, function(t, n, r) { r(228); var e = r(47); t.exports = e("Array").find }, function(t, n, r) { "use strict"; var e = r(7), o = r(111).find, i = r(107), c = !0; "find" in [] && Array(1).find((function() { c = !1 })), e({ target: "Array", proto: !0, forced: c }, { find: function(t) { return o(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), i("find") }, function(t, n, r) { t.exports = r(230) }, function(t, n, r) { var e = r(231), o = Array.prototype; t.exports = function(t) { var n = t.sort; return t === o || t instanceof Array && n === o.sort ? e : n } }, function(t, n, r) { r(232); var e = r(47); t.exports = e("Array").sort }, function(t, n, r) { "use strict"; var e = r(7), o = r(23), i = r(31), c = r(4), u = r(121), a = [].sort, s = [1, 2, 3], f = c((function() { s.sort(void 0) })), l = c((function() { s.sort(null) })), p = u("sort"); e({ target: "Array", proto: !0, forced: f || !l || p }, { sort: function(t) { return void 0 === t ? a.call(i(this)) : a.call(i(this), o(t)) } }) }, function(t, n, r) { t.exports = r(234) }, function(t, n, r) { var e = r(235), o = Array.prototype; t.exports = function(t) { var n = t.indexOf; return t === o || t instanceof Array && n === o.indexOf ? e : n } }, function(t, n, r) { r(236); var e = r(47); t.exports = e("Array").indexOf }, function(t, n, r) { "use strict"; var e = r(7), o = r(103).indexOf, i = r(121), c = [].indexOf, u = !!c && 1 / [1].indexOf(1, -0) < 0, a = i("indexOf"); e({ target: "Array", proto: !0, forced: u || a }, { indexOf: function(t) { return u ? c.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, n, r) { "use strict"; r.r(n); var e = r(122), o = r.n(e), i = r(123), c = r.n(i), u = r(69), a = r.n(u), s = function(t, n) { return n = n || {}, new Promise((function(r, e) { var o = new XMLHttpRequest, i = [], c = [], u = {}, a = function() { return { ok: 2 == (o.status / 100 | 0), statusText: o.statusText, status: o.status, url: o.responseURL, text: function() { return Promise.resolve(o.responseText) }, json: function() { return Promise.resolve(JSON.parse(o.responseText)) }, blob: function() { return Promise.resolve(new Blob([o.response])) }, clone: a, headers: { keys: function() { return i }, entries: function() { return c }, get: function(t) { return u[t.toLowerCase()] }, has: function(t) { return t.toLowerCase() in u } } } }; for (var s in o.open(n.method || "get", t, !0), o.onload = function() { o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, n, r) { i.push(n = n.toLowerCase()), c.push([n, r]), u[n] = u[n] ? u[n] + "," + r : r })), r(a()) }, o.onerror = e, o.withCredentials = "include" == n.credentials, n.headers) o.setRequestHeader(s, n.headers[s]); o.send(n.body || null) })) }, f = r(70), l = r.n(f), p = { dev: "integrations.us-south.assistant.dev.watson.cloud.ibm.com", staging: "integrations.us-south.assistant.test.watson.cloud.ibm.com", "us-south": "assistant-chat-us-south.watsonplatform.net", "us-east": "assistant-chat-us-east.watsonplatform.net", "jp-tok": "assistant-chat-jp-tok.watsonplatform.net", "au-syd": "assistant-chat-au-syd.watsonplatform.net", "eu-gb": "assistant-chat-eu-gb.watsonplatform.net", "eu-de": "assistant-chat-eu-de.watsonplatform.net", "kr-seo": "assistant-chat-kr-seo.watsonplatform.net" }, v = { dev: "web-chat.assistant.dev.watson.cloud.ibm.com", staging: "web-chat.assistant.test.watson.cloud.ibm.com", "us-south": "web-chat.global.assistant.watson.cloud.ibm.com", "us-east": "web-chat.global.assistant.watson.cloud.ibm.com", "jp-tok": "web-chat.global.assistant.watson.cloud.ibm.com", "au-syd": "web-chat.global.assistant.watson.cloud.ibm.com", "eu-gb": "web-chat.global.assistant.watson.cloud.ibm.com", "eu-de": "web-chat.global.assistant.watson.cloud.ibm.com", "kr-seo": "web-chat.global.assistant.watson.cloud.ibm.com" }; var h; !function(t) { t.PROCESS_NOT_STARTED = "not_started", t.PROCESS_ONGOING = "ongoing", t.PROCESS_COMPLETED = "completed", t.PROCESS_CANCELLED = "cancelled" }(h || (h = {})); var d = "[Watson Assistant Chat]", y = { openChatByDefault: !1, showLauncher: !0, __ibm__: { isPreviewLink: !1, isTrackingEnabled: !0, isProcessEnabled: !1 } }; function g(t) { return "https://" + p[t.region] + "/" + (t.subscriptionID || "public") } var m = r(124), b = r.n(m), x = r(125), w = r.n(x), j = r(126), O = r.n(j), S = r(127), _ = r.n(S), P = "latest"; function T(t, n) { if (O()(n).call(n, (function(t, n) { return -_()(t, n) })), t === P) return n[0]; var r = t + ".", e = w()(n).call(n, (function(n) { return n === t || b()(n).call(n, r) })); return "1" !== t || e ? e : T("0", n) } var E = function() { for (var t = 0, n = 0, r = arguments.length; n < r; n++)t += arguments[n].length; var e = Array(t), o = 0; for (n = 0; n < r; n++)for (var i = arguments[n], c = 0, u = i.length; c < u; c++, o++)e[o] = i[c]; return e }; r.d(n, "default", (function() { return C })); var A = function(t, n, r, e) { return new (r || (r = a.a))((function(o, i) { function c(t) { try { a(e.next(t)) } catch (t) { i(t) } } function u(t) { try { a(e.throw(t)) } catch (t) { i(t) } } function a(t) { var n; t.done ? o(t.value) : (n = t.value, n instanceof r ? n : new r((function(t) { t(n) }))).then(c, u) } a((e = e.apply(t, n || [])).next()) })) }, k = function(t, n) { var r, e, i, u, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return u = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof c.a && (u[o.a] = function() { return this }), u; function s(o) { return function(c) { return function(o) { if (r) throw new TypeError("Generator is already executing."); for (; a;)try { if (r = 1, e && (i = 2 & o[0] ? e.return : o[0] ? e.throw || ((i = e.return) && i.call(e), 0) : e.next) && !(i = i.call(e, o[1])).done) return i; switch (e = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return a.label++, { value: o[1], done: !1 }; case 5: a.label++, e = o[1], o = [0]; continue; case 7: o = a.ops.pop(), a.trys.pop(); continue; default: if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) { a = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break } if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break } i[2] && a.ops.pop(), a.trys.pop(); continue }o = n.call(t, a) } catch (t) { o = [6, t], e = 0 } finally { r = i = 0 } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, c]) } } }; window.Promise || r(201); var L = { headers: { "Content-Type": "application/json", accept: "application/json" } }; function I(t, n) { return A(this, void 0, void 0, (function() { var r, e, o, i, c; return k(this, (function(u) { switch (u.label) { case 0: return r = t.__ibm__ && t.__ibm__.versionsURL ? t.__ibm__.versionsURL : "https://" + v[t.region] + "/versions.json", [4, s(r)]; case 1: return [4, u.sent().json()]; case 2: return e = u.sent(), o = e.versions, i = n.version_to_use, (c = T(i, o)) || (c = T(P, o), function(t) { for (var n = [], r = 1; r < arguments.length; r++)n[r - 1] = arguments[r]; console.error.apply(console, E([d + " " + t], n)) }('Version "' + i + '" of the chat widget was requested by the remote configuration but there is no matching version. The available versions are ' + o + ". We are using the latest version " + c + " instead. Please check your assistant configuration.")), [2, c] } })) })) } function M(t) { var n; return A(this, void 0, void 0, (function() { var r, e, o; return k(this, (function(i) { switch (i.label) { case 0: return (null === (n = t.__ibm__) || void 0 === n ? void 0 : n.isPreviewLink) ? [2, { version_to_use: P, botName: "Watson Assistant" }] : (r = function(t) { var n; if (null === (n = t.__ibm__) || void 0 === n ? void 0 : n.configURL) return "" + t.__ibm__.configURL.replace(/\/?$/, "/") + t.integrationID; var r = g(t), e = r + "/chat/config/" + t.integrationID; return -1 === l()(r).call(r, "cloud.ibm.com") && (e = e.replace("/chat/config/", "/config/")), e }(t), [4, s(r, L)]); case 1: if (404 === (e = i.sent()).status) throw new Error(d + ' The configuration for integrationID "' + t.integrationID + '" was not found. The chat widget will not be displayed.'); return [4, e.json()]; case 2: return (o = i.sent()).version_to_use || (o.version_to_use = P), o.botName = o.botName || "Watson Assistant", [2, o] } })) })) } function C(t) { var n; return A(this, void 0, void 0, (function() { var r, e, o, i; return k(this, (function(c) { switch (c.label) { case 0: return "https:" !== document.location.protocol && console.warn(d + ' Your page is not running with "https"; your data will not be sent  securely.'), function(t) { var n, r = t.integrationID, e = t.region, o = t.__ibm__, i = void 0 === o ? y.__ibm__ : o; if (!i.postURL && ("string" != typeof (n = r) || null === n.match(/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i))) throw new Error(d + ' The value of integrationID "' + r + '" is not a valid ID.'); if (!i.postURL && !e && !i.isPreviewLink) throw new Error(d + " You failed to provide a region in your config object."); if (!i.postURL && !p[e] && !i.isPreviewLink) throw new Error(d + ' The region "' + e + '" you provided in your config object is not a valid region.') }(t), r = t.element, delete t.element, [4, M(t)]; case 1: return e = c.sent(), [4, I(t, e)]; case 2: return o = c.sent(), "https://assistant-web.watsonplatform.net", i = (null === (n = t.__ibm__) || void 0 === n ? void 0 : n.cdnEndpoint) || "https://assistant-web.watsonplatform.net", [2, new a.a((function(n, c) { var u = document.createElement("script"); u.src = i + "/" + o + "/WatsonAssistantChat.js", u.type = "text/javascript", u.async = !0, u.onload = function() { new window.WatsonAssistantChat(t, e, r).start().then(n, c) }, document.getElementsByTagName("head")[0].appendChild(u) }))] } })) })) } }]).default;
window.loadWatsonAssistantChat({
  integrationID: "0cc19bbc-32a2-432c-9a2f-029b1d51f931", // The ID of this integration.
  region: "eu-gb" // The region your integration is hosted in.
}).then(function(instance) {
  instance.render();
});