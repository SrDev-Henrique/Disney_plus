document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");

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
});

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
