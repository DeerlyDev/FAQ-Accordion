const triggers = document.querySelectorAll(".faq__trigger");
const ICON_PLUS = "assets/images/icon-plus.svg";
const ICON_MINUS = "assets/images/icon-minus.svg";

for (const trigger of triggers) {
  const item = trigger.closest(".faq__item");
  const answer = item.querySelector(".faq__answer");
  const icon = item.querySelector(".faq__toggle-icon");

  answer.classList.add("faq__answer--close");
  icon.src = ICON_PLUS;

  trigger.addEventListener("click", () => {
    answer.classList.toggle("faq__answer--open");
    answer.classList.toggle("faq__answer--close");

    const isOPen = answer.classList.contains("faq__answer--open");
    icon.src = isOPen ? ICON_MINUS : ICON_PLUS;
  });
}
