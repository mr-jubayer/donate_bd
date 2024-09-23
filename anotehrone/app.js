// // select all element by another function
// const donationBtn = selectElById("donation-btn");
// const historyBtn = selectElById("history-btn");
// const donationContainer = selectElById("donation-container");
// const historyContainer = selectElById("history-container");

// // something happend click on history btn
// historyBtn.addEventListener("click", () =>
//   showCurrentDatas(historyBtn, donationBtn, historyContainer, donationContainer)
// );
// // something happent click on donation btn
// donationBtn.addEventListener("click", () =>
//   showCurrentDatas(donationBtn, historyBtn, donationContainer, historyContainer)
// );
// function showCurrentDatas(activeBtn, deActivebtn, showConten, hideContent) {
//   activeBtn.classList.add(
//     "bg-gradient-to-l",
//     "from-[#86EFAC]",
//     "to-primary",
//     "hover:to-[#86EFAC]"
//   );
//   deActivebtn.classList.remove(
//     "bg-gradient-to-l",
//     "from-[#86EFAC]",
//     "to-primary",
//     "hover:to-[#86EFAC]",
//     "bg-primary"
//   );
//   deActivebtn.classList.add(
//     "hover:bg-primary",
//     "bg-gray-300",
//     "bg-opacity-20",
//     "border"
//   );
//   hideContent.classList.add("hidden");
//   showConten.classList.remove("hidden");
// }

// // donate people
// const userMobileBalance = selectElById("user-m-balence");

// const noakhaliDonateBtn = selectElById("noakhali-donatingBtn");

// // donate for noakhali
// noakhaliDonateBtn.addEventListener("click", function () {
//   const noakhaliOrganizeAmt = selectElById("noakhaliDonatedValue");
//   const noakhaliOrgTitle = selectElById("n-title");
//   const inputDonate = selectElById("noakhali-inputDonate");
//   const modalId = my_modal_1;
//   //   donatePeople(noakhaliOrganizeAmt, noakhaliOrgTitle, inputDonate, modalId);
// });
// // doante for feni
// const feniDonateBtn = selectElById("feni-donatingBtn");
// feniDonateBtn.addEventListener("click", function () {
//   const feniOrgAmt = selectElById("feniOrgAmt");
//   const feniOrgTitle = selectElById("f-title");
//   const inputDonate = selectElById("feni-inputDonate");
//   const modalId = my_modal_2;
//   //   donatePeople(feniOrgAmt, feniOrgTitle, inputDonate, modalId);
// });
// // doante for qouta injured people
// const qoutaInjuredDonateBtn = selectElById("qouta-donatingBtn");
// qoutaInjuredDonateBtn.addEventListener("click", function () {
//   const qoutaInjuredOrganizeAmt = selectElById("qoutaOrgAmt");
//   const qoutaOrgTitle = selectElById("q-title");
//   const inputDonate = selectElById("qouta-inputDonate");
//   const modalId = my_modal_3;
//   //   donatePeople(qoutaInjuredOrganizeAmt, qoutaOrgTitle, inputDonate, modalId);
// });

// // function donatePeople(orgAmt, orgTitle, inpDon, modalId) {
// //   let parseUserBal = parseFloat(userBalance.innerText);
// //   let inputDonate = parseFloat(inpDon.value);
// //   // donaton validation
// //   if (isNaN(inputDonate) || inputDonate <= 0) {
// //     alert("invalid amount entered!");
// //     return;
// //   } else if (inputDonate > parseUserBal) {
// //     alert("You  don't have enough Money for donate");
// //     return;
// //   }
// //   modalId.showModal();

// //   // org amount
// //   let organizeAmt = parseFloat(orgAmt.innerText);

// //   // add to org amount of user amount
// //   organizeAmt += inputDonate;
// //   // subtruct user amount
// //   parseUserBal -= inputDonate;
// //   // show everything in the page
// //   orgAmt.innerText = organizeAmt;
// //   userBalance.innerText = parseUserBal;
// //   userMobileBalance.innerText = parseUserBal;

// //   // add history
// //   let newHistory = document.createElement("div");
// //   newHistory.classList.add("rounded-md", "border-[1.4px]", "p-5");
// //   selectElById("emptyHis").classList.add("hidden");

// //   let date = new Date();

// //   newHistory.innerHTML = `<h3 class="font-bold md:text-customLg mb-2 flex gap-2 text-left">
// //           <p id="palce-name">
// //               <span id="doanted-amount"> ${inputDonate} Taka</span>
// //             ${orgTitle.innerText}
// //         </p>
// //       </h3>
// //       <p class="text-gray-600 md:text-sm text-xs p-2 rounded-lg bg-gray-50">
// //            Date :
// //         <span id="date">${date.toString()}</span>
// //     </p>`;

// //   historyContainer.insertBefore(newHistory, historyContainer.firstChild);
// //   inpDon.value = "";
// // }

// // blog paga show click on blog btn
// const blog = selectElById("blog");
// const userBalance = selectElById("user-balence");

// blog.addEventListener("click", function () {
//   window.location.assign("http://127.0.0.1:5500/blog.html");
// });

const donationContainers = document.querySelectorAll(".donation-container");

donationContainers.forEach((cont) => {
  cont.addEventListener("click", function (e) {
    let btn = cont.querySelector("button");
    let inp = cont.querySelector("input");
    let bal = cont.querySelector("#DonatedValue");
    btn.addEventListener("click", function () {
      console.log(inp.value, bal.innerText);
    });
  });
});
