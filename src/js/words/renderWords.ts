import { getById } from '../utilities';

export const wordsSet: { [key: string]: string } = {
  blank: "Blank",
  c: "C",
  cee: "Cee",
  display: "Display",
  done: "DONE",
  first: "First",
  holdon: "Hold On",
  lead: "Lead",
  led: "LED",
  leed: "Leed",
  no: "No",
  nothing: "Nothing",
  okay: "Okay",
  read: "Read",
  red: "Red",
  reed: "Reed",
  says: "Says",
  see: "See",
  their: "Their",
  there: "There",
  theyare: "They Are",
  theyre: "They're",
  ur: "UR",
  yes: "Yes",
  you: "You",
  youare: "You Are",
  your: "YOUR",
  youre: "You're",
  space: "&nbsp",
  hold: "Hold",
  left: "Left",
  like: "Like",
  middle: "Middle",
  next: "Next",
  press: "Press",
  ready: "Ready",
  right: "Right",
  sure: "Sure",
  u: "U",
  uhhuh: "Uh Huh",
  uhuh: "Uh Uh",
  uhhh: "Uhhh",
  wait: "Wait",
  what: "What",
  whatq: "What?"
};

export function renderWords(): void {
  var words_inputs = getById("WordsForm");

  let group = document.createElement("div");
  group.className = "btn-group btn-group align-top center mb-1";
  group.setAttribute("role", "group");

  var stage = ["View", "Push"];

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

  let sortedEntries = Object.entries(wordsSet).sort((a, b) => a[0].localeCompare(b[0]));

  let index = 0;

  sortedEntries.forEach(([key, value]) => {
    let input = document.createElement("input");
    input.id = `words_display${index}`;
    input.className = `btn-check words_display`;
    input.setAttribute("type", "radio");
    input.setAttribute("name", `words_display`);
    input.setAttribute("autocomplete", "off");
    input.setAttribute("value", `${key}`);

    let label = document.createElement("label");
    label.className = `btn  btn-outline-primary `;
    label.setAttribute("for", `words_display${index}`);
    label.setAttribute("data-wordsCode", `${value}`);
    label.insertAdjacentHTML('beforeend', `${value}`);

    group.appendChild(input);
    group.appendChild(label);

    index++;

    if (index % 8 === 0 || index === Object.keys(wordsSet).length) {
      words_inputs.appendChild(group);
      group = document.createElement("div");
      group.className = "btn-group btn-group-sm d-flex";
      group.setAttribute("role", "group");
    }
  });
}
