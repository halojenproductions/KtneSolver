import { getById } from '../utilities';

const position = "Position";
const label = "Label";


export function memory_solve(e : Element): void {	
	clean_form();

	//todo: rewrite this to use this object instead of immediately creating another varible!
	var element = { 
		name: e.getAttribute("data-elementname"),
		stage: e.getAttribute("data-elementstage"),
		value: e.getAttribute("data-elementvalue"),
	} 
	 
	var type : string = "";
	
	var value = element.value != undefined ? parseInt(element.value) : 0; //todo: I guess i'll change this since YOU dont like inline if
	var stage = element.stage != undefined ? parseInt(element.stage) : 0;

	if (element.name === "display")	{	
		clear_stage(stage);	
		var number : number = 0;
		switch (stage) {
			case 1 : {
				switch (value) {
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
				switch (value) {
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
				switch (value) {
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
				switch (value) {
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
				switch (value) {
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

		data_persistance(stage, type, number);
		getById(`memory_label_${stage}`).appendChild(document.createTextNode(`${type} ${number}`));

	} else if (element.name === "input") {
		//maybe also retrieve the selected display value to determin stuff?
		//clear data attributes
		//STOP WORKING ON THIS AND MAKE A PLAN
		var array = getById(`memory_stage_${stage}`).attributes;
				
		const data = array[1].name;
		if(data.includes(label.toLowerCase())) {
			data_persistance(stage, position, value);			
		}
		else if(data.includes(position.toLowerCase())) {
			data_persistance(stage, label, value);	
			
		}	
	}
}

function data_persistance(stage : number, type : string, number : number) {
	var element = getById(`memory_stage_${stage}`);
	element.setAttribute(`data-${type}`, number.toString())
}

function clear_stage(stage : number) {
	//todo: clear attributes
	getById(`memory_label_${stage}`).replaceChildren(""); //don't tell the courts I wrote this code!
	var inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.memory_input_${stage}`);
	if (inputs != null) {
		inputs.forEach((element) => {
			element.checked = false;
		});
		
	}
}

function clean_form() {
	//check any missing data
	//check all inputs have matching display else all clear stage
	//check all labels have mathcing display else call clear stage
	//check all attributes match inputs and display	
	throw new Error('Function not implemented.');
}
	