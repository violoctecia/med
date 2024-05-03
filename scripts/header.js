document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылки на элементы mobile_menu_icon и mobile_menu
  const mobileMenuIcon = document.querySelector(".mobile_menu_icon");
  const mobileMenu = document.querySelector(".mobile_menu");

  // Добавляем обработчик события клика на mobileMenuIcon
  mobileMenuIcon.addEventListener("click", function () {
    // Переключаем класс "active" у mobileMenu
    mobileMenu.classList.toggle("active");

    // Переключаем класс "active" у mobileMenuIcon
    mobileMenuIcon.classList.toggle("active");

    // Переключаем класс "active" у body
    document.body.classList.toggle("active");
  });
});
