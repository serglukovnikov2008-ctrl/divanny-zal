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
  // Находим форму, поле ввода и элемент для текста подсказки
const form = document.querySelector(".search-form");
const input = document.querySelector("#movie-search");
const errorText = document.querySelector("#search-error");

// 1. Вешаем обработчик на отправку формы, а не на клик по кнопке
form.addEventListener("submit", function(event) {
  // 2. Отменяем стандартную перезагрузку страницы браузером
  event.preventDefault();

  // 3. Получаем значение из поля ввода и убираем пробелы по краям
  const title = input.value.trim();

  // 4. Если значение пустое, показываем подсказку к действию и выходим
  if (title === "") {
    errorText.textContent = "Введите название фильма или сериала";
    return;
  }

  // Если всё верно, убираем текст подсказки
  errorText.textContent = "";

  // 5. Создаём объект записи с уникальным id и добавляем его в массив
  const newItem = {
    id: String(Date.now()),
    title: title,
    year: "2024",
    summary: "Добавлено вручную в список «Посмотрим»"
  };
  watchlist.push(newItem);

  // 6. Вызываем функцию перерисовки, чтобы обновить список на странице
  renderResults();

  // 7. Очищаем поля формы и возвращаем курсор в поле ввода
  form.reset();
  input.focus();
});
  
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
