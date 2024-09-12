// // Day displayer
// let todos = [];
// var dnt = document.getElementById("today");
// const today = new Date();
// window.onload = () => {
//   todos = JSON.parse(localStorage.getItem("todos")) || [];
// };
// const daysofweek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const dayOfWeek = daysofweek[today.getDay()];
// let hours = today.getHours();

// const ispm = hours >= 12;
// if (hours > 12) {
//   hours -= 12;
// } else if (hours == 0) {
//   hours = 12;
// }
// const minutes = today.getMinutes().toString().padStart(2, "0");
// const ampm = ispm ? "PM" : "AM";
// const formattedTime = `${hours}.${minutes} ${ampm}`;
// const formattedDateTime = `It's ${dayOfWeek} ${formattedTime}`;
// dnt.textContent = formattedDateTime;

// document.addEventListener("DOMContentLoaded", function () {
//   var getin = document.getElementById("textin");
//   var postin = document.getElementById("todos");
//   var press = document.getElementById("act");
//   var displayer = document.getElementById("flyer");

//   function updateflyervisibility() {
//     displayer.style.display = postin.children.length > 1 ? "none" : "flex";
//     if (postin.children.length <= 1) {
//       displayer.innerHTML = "<h3>No Tasks so far</h3>";
//     }
//   }

//   function addtask() {
//     var inputvalue = getin.value.trim();

//     if (inputvalue) {
//       if (displayer.style.display !== "none") displayer.style.display = "none";
//       var newtask = document.createElement("div");
//       newtask.className = "tasks";
//       newtask.style.marginBottom = "10px";
//       newtask.innerHTML = `<h3>${inputvalue}</h3>`;
//       todos.push(inputvalue);

//       var deleteicon = document.createElement("img");
//       deleteicon.src =
//         "https://img.icons8.com/?size=100&id=PN84GwwZXtfH&format=png&color=000000";
//       deleteicon.className = "delicon";
//       deleteicon.alt = "Delete Task";

//       var editicon = document.createElement("img");
//       editicon.src =
//         "https://img.icons8.com/?size=100&id=6rM43YNMgkta&format=png&color=000000";
//       editicon.className = "editicon";
//       editicon.alt = "Edit Task";

//       newtask.appendChild(deleteicon);
//       newtask.appendChild(editicon);
//       postin.appendChild(newtask);
//       getin.value = "";

//       deleteicon.addEventListener("click", function () {
//         let resp = confirm("Are you sure you want to delete");
//         if (resp) {
//           postin.removeChild(newtask);
//           updateflyervisibility();
//         } else {
//           updateflyervisibility();
//         }
//       });

//       editicon.addEventListener("click", function () {
//         var newtext = prompt("Enter new text", inputvalue);
//         todos.push(newtext);
//         if (newtext) {
//           newtask.innerHTML = `<h3>${newtext}</h3>`;
//           inputvalue = newtext;
//           newtask.appendChild(deleteicon);
//           newtask.appendChild(editicon);
//         }
//       });
//     }
//     updateflyervisibility();
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   getin.addEventListener("keyup", function (e) {
//     updateflyervisibility();
//     if (e.keyCode === 13) {
//       addtask();
//     }
//   });
//   press.addEventListener("click", addtask);
//   updateflyervisibility();
// });

