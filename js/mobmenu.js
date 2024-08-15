(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMobmenuBtn: document.querySelector("[data-mobmenu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMobmenuBtn: document.querySelector("[data-mobmenu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    mobmenu: document.querySelector("[data-mobmenu]"),
    mobmenuname: document.querySelector("[data-mobmenuname]"),

    mobmenufeatures: document.querySelector("[data-mobmenufeatures]"),
    mobmenuteam: document.querySelector("[data-mobmenuteam]"),
    mobmenutestimonials: document.querySelector("[data-mobmenutestimonials]"),
    mobmenucontact: document.querySelector("[data-mobmenucontact]"),
  };

  refs.openMobmenuBtn.addEventListener("click", toggleMobmenu);
  refs.closeMobmenuBtn.addEventListener("click", toggleMobmenu);

  refs.mobmenufeatures.addEventListener("click", toggleMobmenu);
  refs.mobmenuteam.addEventListener("click", toggleMobmenu);
  refs.mobmenutestimonials.addEventListener("click", toggleMobmenu);
  refs.mobmenucontact.addEventListener("click", toggleMobmenu);

  function toggleMobmenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobmenu.classList.toggle("is-open");
    refs.mobmenuname.classList.toggle("is-open");
  }
})();
