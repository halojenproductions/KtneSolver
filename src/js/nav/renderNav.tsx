import { getById } from '../utilities';

class LinkClass {
	name: string;
	internalAnchor: string;
	externalAnchor: string;
	public constructor(name: string, internalAnchor: string, externalAnchor: string) {
		this.name = name;
		this.internalAnchor = internalAnchor;
		this.externalAnchor = externalAnchor;
	}
}

const links: Array<LinkClass> = [
	new LinkClass("Basic wires", "Basic", "Wires"),
	new LinkClass("Button", "MissileButton", "TheButton"),
	new LinkClass("Keypad", "Keypad", "Keypads"),
	new LinkClass("Simon says", "Simon", "SimonSays"),
	new LinkClass("Who's on first", "", "WhosOnFirst"),
	new LinkClass("Memory", "Memory", "Memory"),
	new LinkClass("Morse code", "", "MorseCode"),
	new LinkClass("Complicated wires", "Complicated", "ComplicatedWires"),
	new LinkClass("Wire sequences", "Sequences", "WireSequences"),
	new LinkClass("Mazes", "", "Mazes"),
	new LinkClass("Password", "Password", "Passwords"),
	new LinkClass("Knobs", "Knobs", "Knobs"),
];

export function renderNav(): void {
	var nav = getById("Nav");

	links.forEach((link) => {
		let navItem: HTMLLIElement = document.createElement("li");
		navItem.className = "nav-item d-inline-flex flex-row align-items-center";

		if (link.externalAnchor) {
			let externLink: HTMLAnchorElement = document.createElement("a");
			externLink.className = "nav-link align-items-center";
			externLink.href = `https://bombmanual.com/web/index.html#${link.externalAnchor}`;
			externLink.target = "_blank";

			let symbol: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			symbol.classList.add("bi");
			symbol.setAttribute("fill", "currentColor");
			symbol.setAttribute("aria-hidden", "true");
			symbol.setAttribute("width", "16");
			symbol.setAttribute("height", "16");

			let use: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', "use");
			use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "icons/bootstrap-icons.svg#book");

			symbol.appendChild(use);
			externLink.appendChild(symbol);

			if (!link.internalAnchor) {
				externLink.insertAdjacentHTML('beforeend', "&nbsp;&nbsp;" + link.name);
			}

			navItem.appendChild(externLink);
		}

		if (link.internalAnchor) {
			let anchor: HTMLAnchorElement = document.createElement("a");
			anchor.className = "nav-link  align-self-start";
			anchor.href = `#${link.internalAnchor}`;
			anchor.innerHTML = link.name;

			navItem.appendChild(anchor);
		}

		nav.appendChild(navItem)
	});
}