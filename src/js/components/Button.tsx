import { createElement } from "react";

export const Button = (props) => {
	/*	let input = document.createElement("input");
		input.id = `morse_${idx}`;
		input.className = `btn-check`;
		input.setAttribute("type", "radio");
		input.setAttribute("name", `morse_${idx}`);
		input.setAttribute("autocomplete", "off");
		input.setAttribute("value", `${idx}`);
	
		let label = document.createElement("label");
		if (val.isSpecial) {
			label.className = `btn btn-outline-primary`;
		}
		else {
			label.className = `btn btn-outline-secondary`;
		}
	
		label.setAttribute("for", `morse_${idx}`);
		label.setAttribute("data-symbolCode", `${val.code.join(' ')}`);
		label.insertAdjacentHTML('beforeend', `&#${val.code.join('; &#')};`);*/


	return (<>
		<input 
			id={`${props.idPrefix}_${props.index}`}
			className="btn-check"
			type="radio"
			name={`${props.idPrefix}_${props.index}`}
			autoComplete="off"
			value={props.index}
		/>
		<label
			className={props.className}
			htmlFor={`${props.idPrefix}_${props.index}`}
			dangerouslySetInnerHTML={{__html: props.label}}
			style={props.style}
			{...props.customAttr}
		>
		</label>
		{ }
	</>
	)

};

export default Button;
