import { getById } from '../utilities';
import { wordsDictionary } from './solverWords';

export function renderWords(): void {
  var words_inputs = getById("WordsForm");

  let group = document.createElement("div");
  group.className = "btn-group btn-group align-top mb-1";
  group.setAttribute("role", "group");

  var stage = ["Step 1", "Step 2"];

  for (let i = 0; i < stage.length; i++) {
    var input = document.createElement("input");
    input.id = `words_s${i + 1}`;
    input.className = "btn-check words_stage";
    input.setAttribute("type", "radio");
    input.setAttribute("name", `words_stage`);
    input.setAttribute("autocomplete", "off");	
    input.value = stage[i];

    var label = document.createElement("label");
    label.className = "btn btn-outline-primary";
    label.setAttribute("for", `words_s${i + 1}`);
    label.appendChild(document.createTextNode(`${stage[i]}`));

    group.appendChild(input);
    group.appendChild(label);
  }

  words_inputs.appendChild(group);

  group = document.createElement("div");
  group.className = "btn-group btn-group-sm d-flex";
  group.setAttribute("role", "group");

  let sortedEntries = Object.entries(wordsDictionary).sort((a, b) => a[0].localeCompare(b[0]));

  let index = 0;

  sortedEntries.forEach(([key, value]) => {
    let input = document.createElement("input");
    input.id = `words_display_${key}`;
    input.className = `btn-check words_display`;
    input.setAttribute("type", "radio");
    input.setAttribute("name", `words_display`);
    input.setAttribute("autocomplete", "off");
    input.setAttribute("value", `${key}`);

    let label = document.createElement("label");
    label.className = `btn  btn-outline-primary `;
    label.setAttribute("for", `words_display_${key}`);
    label.setAttribute("data-wordsCode", `${value.display}`);
    label.insertAdjacentHTML('beforeend', `${value.display}`);

    group.appendChild(input);
    group.appendChild(label);

    index++;

    if (index % 8 === 0 || index === Object.keys(wordsDictionary).length) {
      words_inputs.appendChild(group);
      group = document.createElement("div");
      group.className = "btn-group btn-group-sm d-flex";
      group.setAttribute("role", "group");
    }
  });
}
