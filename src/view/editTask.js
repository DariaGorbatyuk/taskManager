import dayjs from "dayjs";
import {COLORS} from "../const.js";

export const createTaskEditTemplate = (options) => {
  const {description, dueDate, color, repeat} = options;
  const isRepeat = Object.values(repeat).some(Boolean);
  const repeatClass = isRepeat ? `card--repeat` : ``;

  const setDate = () => {
    return ` <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${dueDate ? `yes` : `no`}</span>
              </button>

              ${dueDate ?
    `<fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder=""
                    name="date"
                    value="${dayjs(dueDate).format(`D MMMM`)}"
                  />
                </label>
              </fieldset>` : ``}`;
  };

  const setRepeat = () => {
    const daysGenerate = () => {
      return Object.entries(repeat).map(([day, value]) => {
        return `<input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-${day}-4"
                    name="repeat"
                    value="${day}"
                    ${value ? `checked` : ``}
                  />
                  <label class="card__repeat-day" for="repeat-${day}-4"
                    >${day}</label
                  >`;
      }).join(``);
    };
    return ` <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${isRepeat ? `yes` : `no`}</span>
              </button>

            ${isRepeat ? `<fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner">
                  ${daysGenerate()};
                </div>
              </fieldset>` : ``}  `;
  };

  const setColors = () => {
    return COLORS.map((colorItem, index) => {
      return ` <input
                type="radio"
                id="color-${colorItem}-${index}"
                class="card__color-input card__color-input--${colorItem} visually-hidden"
                name="color"
                value="${colorItem}"
                ${colorItem === color ? `checked` : ``}
              />
              <label
                for="color-${colorItem}-${index}"
                class="card__color card__color--${colorItem}"
                >${colorItem}</label
              >`;
    }).join(``);
  };
  const dateMarkup = setDate();
  const colorsMarkup = setColors();
  const repeatMarkup = setRepeat();
  return `<article class="card card--edit card--${color} ${repeatClass}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${description}</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
             ${dateMarkup}
             ${repeatMarkup}
            </div>
          </div>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
             ${colorsMarkup}
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};
