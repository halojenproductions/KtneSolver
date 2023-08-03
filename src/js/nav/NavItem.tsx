
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

const results: any = [];


const Nav = () => <>
	{links.map((link, index) => {
		//console.log("aoeu");
		//link.externalAnchor && NavItem();
		results.push(

			<li
				key={index}
				className="nav-item d-inline-flex flex-row align-items-center"
			>
				{
					link.externalAnchor &&
					<a
						className='nav-link align-items-center'
						href={`https://bombmanual.com/web/index.html#${link.externalAnchor}`}
						target='_blank'
					>
						<svg
							className='bi'
							fill='currentColor'
							aria-hidden='true'
							width="16"
							height="16"
						>
							<use
								href="icons/bootstrap-icons.svg#book"
							/>
						</svg>
						{!link.internalAnchor &&
							<>&nbsp;&nbsp;{link.name}</>
						}
					</a>
				}
				{
					link.internalAnchor &&
					<a
						className='nav-link align-self-start'
						href={`#${link.internalAnchor}`}
						target='_blank'
					>
						{link.name}
					</a>
				}
			</li>
		);
	})}
	{results}
</>

const NavItem = () =>
	<li>
	</li>

export default Nav;