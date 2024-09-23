// select all element by another function
const donationBtn = selectElById("donation-btn");
const historyBtn = selectElById("history-btn");
const donationContainer = selectElById("donation-container");
const historyContainer = selectElById("history-container");

// something happend click on history btn
historyBtn.addEventListener("click", () =>
  showCurrentDatas(historyBtn, donationBtn, historyContainer, donationContainer)
);
// something happent click on donation btn
donationBtn.addEventListener("click", () =>
  showCurrentDatas(donationBtn, historyBtn, donationContainer, historyContainer)
);
function showCurrentDatas(activeBtn, deActivebtn, showConten, hideContent) {
  activeBtn.classList.add(
    "bg-gradient-to-l",
    "from-[#86EFAC]",
    "to-primary",
    "hover:to-[#86EFAC]"
  );
  deActivebtn.classList.remove(
    "bg-gradient-to-l",
    "from-[#86EFAC]",
    "to-primary",
    "hover:to-[#86EFAC]",
    "bg-primary"
  );
  deActivebtn.classList.add(
    "hover:bg-primary",
    "bg-gray-300",
    "bg-opacity-20",
    "border"
  );
  hideContent.classList.add("hidden");
  showConten.classList.remove("hidden");
}

// donate people
const userBalance = selectElById("user-balence");
const userMobileBalance = selectElById("user-m-balence");

const doantionContainers = document.querySelectorAll(".doantion-container");
doantionContainers.forEach((container) => {
  let orgCurrAmount = container.querySelector("#donatedAmount");
  let donateInput = container.querySelector("input");
  let donateBtn = container.querySelector("button");
  let userNumBal = parseFloat(userBalance.innerText);
  let orgTitle = container.querySelector("#title");

  donateBtn.addEventListener("click", function () {
    let parseDonateInp = parseFloat(donateInput.value);

    if (isNaN(parseDonateInp) || parseDonateInp <= 0) {
      alert("invalid amount entered!");
      return;
    } else if (parseDonateInp > userNumBal) {
      alert("You  don't have enough Money for donate");
      return;
    }
    my_modal.showModal();

    let organizeAmt = parseFloat(orgCurrAmount.innerText);

    // add to org amount of user amount
    organizeAmt += parseDonateInp;
    // subtruct user amount
    userNumBal -= parseDonateInp;
    // show everything in the page
    orgCurrAmount.innerText = organizeAmt;
    userBalance.innerText = userNumBal;
    userMobileBalance.innerText = userBalance;

    //   // add history
    let newHistory = document.createElement("div");
    newHistory.classList.add("rounded-md", "border-[1.4px]", "p-5");
    selectElById("emptyHis").classList.add("hidden");
    let date = new Date();

    newHistory.innerHTML = `<h3 class="font-bold md:text-customLg mb-2 flex gap-2 text-left">
                            <p id="palce-name">
                            <span id="doanted-amount"> ${parseDonateInp} Taka</span>
                          ${orgTitle.innerText}
                           </p>
                          </h3>
                          <p class="text-gray-600 md:text-sm text-xs p-2 rounded-lg bg-gray-50">
                            Date :
                           <span id="date">${date.toString()}</span>
                            </p>`;

    historyContainer.insertBefore(newHistory, historyContainer.firstChild);
    donateInput.value = "";
  });
});

// blog paga show click on blog btn
const blog = selectElById("blog");

blog.addEventListener("click", function () {
  window.location.assign("http://127.0.0.1:5500/blog.html");
});

// function parseIntoNum(elem) {
//   return parseFloat(elem.value);
// }
