export function search() {
  const searchInput = document.getElementById('search');
  const suggestionsList = document.getElementById('search-result');

  const noResult = {
    class: 'search-no-result',
    text: 'По вашему запросу результатов не найдено!'
  }

  if(searchInput) {
    const suggestions = [
      'Артем Белокобыльский',
      'Александр Соколов',
      'Валерий Дмитриев',
      'Константин Прушин',
      'Андрей Валевв',
      'Олег Сазонов',
      'Григорий Синяев',
      'Ольга Нестерова',
      'Оксана Старшова',
      'Надежда Рязева',
      'Светлана Решетникова',
      'Наталья Веселова',
      'Максим Клюев',
      'Станислав Быков',
      'Ярослав Гимов',
      'Никита Кротов',
      'Артем Глухов',
      'Денис Глухов',
      'Сергей Лунин',
      'Ирина Федорова',
      'Значение 1',
      'Значение 2',
      'Значение 3',
      'Значение 4',
      'Значение 5',
      'Значение 6',
      'Значение 7',
      'Значение 8',
      'Значение 9',
      'Значение 10',
    ];

    searchInput.addEventListener('input', (e) => {
      if(e.target.value.length >= 1) {
        suggestionsList.classList.remove('hidden')
      } else {
        suggestionsList.classList.add('hidden')
      }
      const searchString = searchInput.value.toLowerCase();

      if (searchString === '') {
        suggestionsList.innerHTML = '';
      } else {
        const filteredSuggestions = suggestions.filter(suggestion =>
          suggestion.toLowerCase().includes(searchString)
        );
        displaySuggestions(filteredSuggestions);
      }
    });

    function displaySuggestions(filteredSuggestions) {
      if(filteredSuggestions.length === 0) {
        suggestionsList.innerHTML = `<p class="${noResult.class}">${noResult.text}</p>`;
      } else {
        suggestionsList.innerHTML = '';
        filteredSuggestions.forEach(suggestion => {
          const link = document.createElement('a');
          link.textContent = suggestion;
          link.addEventListener('click', () => {
            searchInput.value = suggestion;
            suggestionsList.innerHTML = '';
            suggestionsList.classList.add('hidden')
          });
          suggestionsList.appendChild(link);
        });
      }
    }
  }
}
