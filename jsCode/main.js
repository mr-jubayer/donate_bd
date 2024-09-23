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
