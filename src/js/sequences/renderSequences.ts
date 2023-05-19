import { getById } from '../utilities';

export function renderSequences(): void {
  const attributes = [
    { text: "Red", name: "wireColour", class: "colour-red" },
    { text: "Blue", name: "wireColour", class: "colour-blue" },
    { text: "Black", name: "wireColour", class: "colour-black" },
    { text: "A", name: "wireConnection", class: "" },
    { text: "B", name: "wireConnection", class: "" },
    { text: "C", name: "wireConnection", class: "" },
    { text: "Leave", name: "wireSolution", class: "text-success disabled" }
  ];

  const Sequences_inputs = getById("SequencesForm");

  for (let i = 1; i <= 9; i++) {
    const group: HTMLDivElement = document.createElement("div");
    group.className = `btn-group-sm btn-group-vertical align-top flex-fill`;
    if (i < 9) {
      group.classList.add("me-1");
    }
    group.setAttribute("role", "group");

    for (let ii = 0; ii < attributes.length; ii++) {
      const { text, name, class: textColor } = attributes[ii];

      const input: HTMLInputElement = document.createElement("input");
      input.id = `Sequences_${i}_${ii}`;
      input.className = "btn-check Sequences_button";
      input.type = "radio";
      input.name = `Sequences_${i}_${name}`;
      input.autocomplete = "off";

      const label: HTMLLabelElement = document.createElement("label");
      label.className = `btn btn-outline-primary ${textColor}`;
      label.htmlFor = `Sequences_${i}_${ii}`;
      label.textContent = text;
      label.id = `Sequences_${i}_${ii}_label`;

      group.appendChild(input);
      group.appendChild(label);
    }
    Sequences_inputs.appendChild(group);
  }
}
