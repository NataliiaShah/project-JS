document.addEventListener('DOMContentLoaded', function () {
  // Ініціалізуємо Accordion для елементів з класом 'accordion'
  const accordion = new Accordion('.accordion', {
    activeIndex: 0, // Відкриваємо перший елемент за замовчуванням
    collapsible: true, // Дозволяємо згортати елементи
    duration: 300, // Анімація при відкритті/закритті
  });
});
