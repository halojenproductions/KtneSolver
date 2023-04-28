import { getById } from '../utilities';

const position = "Position";
const label = "Label";


export function memory_solve(e : HTMLInputElement): void {		
	clean_form();

	//only solve if checking a button
	if (!e.checked) 
		return;
	var n = e.getAttribute("data-elementname");
	var s =  e.getAttribute("data-elementstage");
	var  v = e.getAttribute("data-elementvalue");

	if (n && s && v) {
		handle_inputs(n,s,v); //todo: split this into display and input logic
	}
}

function handle_inputs(name: string, stage: string, value: string): void {	 	 
	var type : string = "";	

	var element = { 
		name: name,
		stage: parseInt(stage),
		value: parseInt(value)
	} 		

	if (element.name === "display")	{	
		clear_stage(element.stage);	
		var number : number = 0;
		switch (element.stage) {
			case 1 : {
				switch (element.value) {
						case 1:
						case 2:
							type = position;
							number = 2;
							break;			
						case 3:
							type = position;
							number = 3;
							break;				
						case 4:
							type = position;
							number = 4;
							break; 
						default:
							break;;					
					};	
				break;
			}
			case 2: {				
				switch (element.value) {
					case 1:						
						type = label;
						number = 4;
						break;	
					case 2:
					case 4:						
						type = position;
						var data = getById("memory_stage_1").getAttribute("data-position");
						if (data == undefined)
						{
							console.log("stage 1 missing data");
							return;
						}
						number = parseInt(data);
						break;	
					case 3:
						type = position;
						number = 1;
						break;
					default:
						break;					
				};	
				break;
			}
			case 3: {				
				switch (element.value) {
					case 1:
						type = label;
						var data = getById("memory_stage_2").getAttribute("data-label");
						if (data == undefined)
						{
							console.log("stage 2 missing data");
							return;
						}
						number = parseInt(data);						
						break;							
					case 2:	
						type = label;
						var data = getById("memory_stage_1").getAttribute("data-label");
						
						if (data == undefined)
						{
							console.log("stage 1 missing data");
							return;
						}
						number = parseInt(data);
						break;	
					case 3:
						type = position;
						number = 3;
						break;
					case 4:	
						type = label;
						number = 4;
						break;
					default:
						break;					
				};							
				break;
			}
			case 4: {
				switch (element.value) {
					case 1:
						type = position;
						var data = getById("memory_stage_1").getAttribute("data-position");
						if (data == undefined)
						{
							console.log("stage 1 missing data");
							return;
						}
						number = parseInt(data);
						break;	
					case 2:	
						type = position;
						number = 1;							
						break;	
					case 3:
					case 4:	
						type = position;
						var data = getById("memory_stage_2").getAttribute("data-position");
						if (data == undefined)
						{
							console.log("stage 2 missing data");
							return;
						}
						number = parseInt(data);
						break;
					default:
						break;					
				};			
				break;
			}
			case 5: {				
				switch (element.value) {
					case 1:
						type = label;
						var data = getById("memory_stage_1").getAttribute("data-label");
						if (data == undefined)
						{
							console.log("stage 1 missing data");
							return;
						}
						number = parseInt(data);
						break;	
					case 2:	
						type = label;
						var data = getById("memory_stage_2").getAttribute("data-label");
						if (data == undefined)
						{
							console.log("stage 2 missing data");
							return;
						}
						number = parseInt(data);
						break;		
					case 3:
						type = label;
						var data = getById("memory_stage_4").getAttribute("data-label");
						if (data == undefined)
						{
							console.log("stage 4 missing data");
							return;
						}
						number = parseInt(data);
						break;	
					case 4:	
						type = label;
						var data = getById("memory_stage_3").getAttribute("data-label");
						if (data == undefined)
						{
							console.log("stage 3 missing data");
							return;
						}
						number = parseInt(data);
						break;
					default:
						break;					
				};			
				break;
			}
		}	

		data_persistance(element.stage, type, number);
		getById(`memory_label_${element.stage}`).appendChild(document.createTextNode(`${type} ${number}`));

	} else if (element.name === "input") {

		var array = getById(`memory_stage_${element.stage}`).attributes;
				
		const data = array[1].name;
		if(data.includes(label.toLowerCase())) {
			data_persistance(element.stage, position, element.value);			
		}
		else if(data.includes(position.toLowerCase())) {
			data_persistance(element.stage, label, element.value);			
		}	

		//todo: call display logic in loop to regen the labels. 
	}
}

function data_persistance(stage : number, type : string, number : number) {
	var element = getById(`memory_stage_${stage}`);
	element.setAttribute(`data-${type.toLowerCase()}`, number.toString())
}

function clear_stage(stage : number) {	
	getById(`memory_label_${stage}`).replaceChildren("");
	var inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.memory_input_${stage}`);
	if (inputs != null) {
		inputs.forEach((element) => {
			element.checked = false;
		});		
	}

	var persistance = getById(`memory_stage_${stage}`)

	persistance.removeAttribute("data-label")
	persistance.removeAttribute("data-position")
}

function clean_form() {
	for (let i = 1; i <= 5; i++) { 
			var display = document.querySelector(`.memory_display_${i}:checked`)
			if (display == undefined) {
				clear_stage(i);
			}
		}		
	}	

	