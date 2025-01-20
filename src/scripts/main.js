document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");
  const header = document.querySelector(".header");
  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.clientHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY < heroHeight) {
      header.classList.remove("header--scrolled");
    } else {
      header.classList.add("header--scrolled");
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetTab = event.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);

      hideTabs();
      resetButtons();

      tab.classList.add("shows__list--is-active");
      event.target.classList.add("shows__tabs__button--is-active");
    });
  });

  questions.forEach((question) => {
    question.addEventListener('click', openAnswer);
  });
});

function openAnswer(element) {
  const faqAnswer = element.target.parentNode;
  faqAnswer.classList.toggle("faq__questions__item--is-open");
}

function resetButtons() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  buttons.forEach((button) => {
    button.classList.remove("shows__tabs__button--is-active");
  });
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");
  tabsContainer.forEach((tab) => {
    tab.classList.remove("shows__list--is-active");
  });
}
