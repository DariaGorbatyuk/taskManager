const createFilterMarkup = (options, isChecked) => {
  const {text, value} = options;
  return ` <input
          type="radio"
          id="filter__${text.toLowerCase()}"
          class="filter__input visually-hidden"
          name="filter"
          ${isChecked ? `checked` : ``}
        />
        <label for="filter__${text.toLowerCase()}" class="filter__label">
          ${text} <span class="filter__${text.toLowerCase()}-count">${value}</span></label
        >`;
};

export const createFilters = (filters) => {
  const filterMarkup = filters.reduce((acc, item, i) => {
    return acc + createFilterMarkup(item, i === 0);
  }, ``);

  return `<section class="main__filter filter container">
        ${filterMarkup}
      </section>`;
};
