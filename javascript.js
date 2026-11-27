// Массив с тремя выдуманными фильмами для отрисовки
const ITEMS = [
  { id: "tv-101", title: "Вымышленный маяк", year: "2019", summary: "История смотрителя маяка на отдалённом острове" },
  { id: "tv-102", title: "Городские огни", year: "2021", summary: "Документальный сериал о ночной жизни мегаполисов" },
  { id: "tv-103", title: "Последний поезд", year: "2020", summary: "Драма о пассажирах поезда, застрявшего в снегу" }
];

// Находим пустой список результатов в HTML
const list = document.querySelector("#list");

// Функция отрисовки карточек фильмов в список
function renderItems(items) {
  // Если массив пустой, показываем сообщение и выходим
  if (items.length === 0) {
    list.innerHTML = '<li class="empty">Ничего не найдено. Попробуй другое название.</li>';
    return;
  }
  
  // Преобразуем каждый объект в HTML-строку карточки и объединяем их
  list.innerHTML = items.map(item => {
    return `
      <li class="card" data-id="${item.id}">
        <div class="poster-placeholder"></div>
        <h3>${item.title}</h3>
        <p class="year">${item.year}</p>
      </li>
    `;
  }).join("");
}

// Вызываем функцию отрисовки с нашими данными
renderItems(ITEMS);
