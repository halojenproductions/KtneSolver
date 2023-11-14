import { useEffect } from "react";
import Button from "../components/Button";
import Group from "../components/Group";
import Module from "../components/Module";
import { morseSet } from "./renderMorse";
import { setupMorse } from "./setupMorse";

export const MorseModule = () => {
	const specialClass = (isSpecial: boolean | undefined) => (isSpecial && 'colour-white' || '');

	const renderLabel = (code: string[]) => code.map((c) => `&#${c};`).join(' ');

	const renderRow = (start: number, end: number) => Object.values(morseSet).map((val, idx) => {
		if (idx >= start && idx <= end) {
			return (
				<Button
					idPrefix='morse'
					index={idx}
					className={`btn btn-outline-primary ${specialClass(val.isSpecial)}`}
					label={renderLabel(val.code)}
					key={idx}
					customAttr={{ "data-symbolcode": val.code.join(' ') }}
				/>
			);
		} else {
			return null;
		}
	});

	// Ok well I wasn't planning on using any actual react (yet) 
	// but this will run the setup function _after_ the module is built.
	useEffect(() => setupMorse(), []);

	return (
		<Module
			id='Morse'
			title='Morse'
		>
			<Group key={'row1'}>
				{renderRow(0, 3)}
			</Group>
			<Group key={'row2'}>
				{renderRow(4, 8)}
			</Group>
			<Group key={'row3'}>
				{renderRow(9, 11)}
			</Group>
			<Group key={'row4'}>
				{renderRow(12, 14)}
			</Group>
			<Group key={'row5'}>
				{renderRow(15, 17)}
			</Group>
		</Module>
	);
};

export default MorseModule;
