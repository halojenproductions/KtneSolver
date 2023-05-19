import { getById } from '../utilities';

export function renderSequences(): void {
  let attributes = [["Red", "wireColour", "colour-red"], ["Blue", "wireColour", "colour-blue"],["Black", "wireColour", "colour-black"], ["A", "wireConnection", ""],["B", "wireConnection", ""],["C", "wireConnection", ""], ["Leave", "wireSolution", "text-success disabled"]];
  let Sequences_inputs = getById("SequencesForm");

  for (let i = 1; i <= 9; i++) {
    let group: HTMLDivElement = document.createElement("div");
    group.className = `btn-group-sm btn-group-vertical align-top flex-fill`;
    if (i < 9) {
      group.classList.add("me-1");
    }
    group.setAttribute("role", "group");

    for (let ii = 0; ii < attributes.length; ii++) {
      let input: HTMLInputElement = document.createElement("input");
      input.id = `Sequences_${i}_${ii + 1}`;
      input.className = "btn-check Sequences_button";
      input.setAttribute("type", "radio");
      input.setAttribute("name", `Sequences_${i}_${attributes[ii][1]}`);
      input.setAttribute("autocomplete", "off");

      let label: HTMLLabelElement = document.createElement("label");
      label.className = `btn btn-outline-primary ${attributes[ii][2]}`;
      label.setAttribute("for", `Sequences_${i}_${ii + 1}`);
      label.appendChild(document.createTextNode(`${attributes[ii][0]}`));
      label.id = `Sequences_${i}_${ii + 1}_label`;

      group.appendChild(input);
      group.appendChild(label);
    }
    Sequences_inputs.appendChild(group);
  }
}
