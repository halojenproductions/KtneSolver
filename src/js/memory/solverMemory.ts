import { getById } from '../utilities';

export function memory_solve(): void {	
	
	var display : HTMLInputElement[] = [
		<HTMLInputElement> document.querySelector(`.memory_display_1:checked`),
		<HTMLInputElement> document.querySelector(`.memory_display_2:checked`),
		<HTMLInputElement> document.querySelector(`.memory_display_3:checked`),
		<HTMLInputElement> document.querySelector(`.memory_display_4:checked`),
		<HTMLInputElement> document.querySelector(`.memory_display_5:checked`)		
	];
	var label : HTMLInputElement[] = [
		<HTMLInputElement> document.querySelector(`.memory_text_1:checked`),
		<HTMLInputElement> document.querySelector(`.memory_text_2:checked`),
		<HTMLInputElement> document.querySelector(`.memory_text_3:checked`),
		<HTMLInputElement> document.querySelector(`.memory_text_4:checked`),
		<HTMLInputElement> document.querySelector(`.memory_text_5:checked`)		
	];
	var position : HTMLInputElement[] = [
		<HTMLInputElement> document.querySelector(`.memory_position_1:checked`),
		<HTMLInputElement> document.querySelector(`.memory_position_2:checked`),
		<HTMLInputElement> document.querySelector(`.memory_position_3:checked`),
		<HTMLInputElement> document.querySelector(`.memory_position_4:checked`),
		<HTMLInputElement> document.querySelector(`.memory_position_5:checked`)		
	]

	//stage1
	if (display[0] == undefined)	{
		console.log("No stage1 input detected");
		clear_elements(".memory_text_1, .memory_position_1");
		return;
	}
	else if (display[0].value == "d1" || display[0].value == "d2")	{
		//select p2
		getById("memory_position_1_2").checked = true; 
		clear_elements(".memory_text_1");
	}	
	else if (display[0].value == "d3")	{
		//select p3
		getById("memory_position_1_3").checked = true; 
		clear_elements(".memory_text_1");
	}
	else if (display[0].value == "d4")	{
		//select p4
		getById("memory_position_1_4").checked = true; 
		clear_elements(".memory_text_1");
	}	

	//stage2
	if (display[1] == undefined)	{
		console.log("No stage2 input detected");
		clear_elements(".memory_text_2, .memory_position_2");
		return;
	}
	else if (display[1].value == "d1")	{
		//text 4	
		getById("memory_text_2_4").checked = true; 
		clear_elements(".memory_position_2");
	}
	else if (display[1].value == "d2" || display[1].value == "d4")	{
		//select postition from stage1
		if (label[0] == undefined || position[0] == undefined) {
			console.log("Stage1 incomplete");		
			return;
		}			
		let stage1p = <HTMLInputElement>document.querySelector(`.memory_position_1:checked`);		
		let stage2p : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_position_2`)
		stage2p.forEach(p => {
			if (p.value == stage1p.value)
				p.checked = true;
		});
		clear_elements(".memory_text_2");
	}
	else if (display[1].value == "d3")	{
		//select p1
		getById("memory_position_2_1").checked = true; 
		clear_elements(".memory_text_2");
	}
	
	//stage3	
	if (display[2] == undefined)	{
		console.log("No stage3 input detected");
		clear_elements(".memory_text_3, .memory_position_3");
		return;
	}
	else if (display[2].value == "d1")	{
		//stage 2 label		
		if (label[1] == undefined || position[1] == undefined) {
			console.log("Stage2 incomplete");		
			return;
		}
		let stage2t = <HTMLInputElement>document.querySelector(`.memory_text_2:checked`);		
		let stage3t : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_text_3`)
		stage3t.forEach(t => {
			if (t.value == stage2t.value)
				t.checked = true;
		});		
		clear_elements(".memory_position_3");
	}
	else if (display[2].value == "d2")	{
		//stage 1 label		
		if (label[0] == undefined || position[0] == undefined) {
			console.log("Stage1 incomplete");		
			return;
		}
		let stage1t = <HTMLInputElement>document.querySelector(`.memory_text_1:checked`);		
		let stage3t : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_text_3`)
		stage3t.forEach(t => {
			if (t.value == stage1t.value)
				t.checked = true;
		});		
		clear_elements(".memory_position_3");	
	}
	else if (display[2].value == "d3")	{
		//select p3
		getById("memory_position_3_3").checked = true; 
		clear_elements(".memory_text_3");

	} else if (display[2].value == "d4")	{
		//select l4
		getById("memory_text_3_4").checked = true; 
		clear_elements(".memory_position_3");
	}
	
	//stage4	
	if (display[3] == undefined)	{
		console.log("No stage4 input detected");
		clear_elements(".memory_text_4, .memory_position_4");
		return;
	}
	else if (display[3].value == "d1")	{			
		//select postition from stage1	
		if (label[0] == undefined || position[0] == undefined) {
			console.log("Stage1 incomplete");		
			return;
		}	
		let stage1p = <HTMLInputElement>document.querySelector(`.memory_position_1:checked`);		
		let stage4p : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_position_4`)
		stage4p.forEach(p => {
			if (p.value == stage1p.value)
				p.checked = true;
		});	
		clear_elements(".memory_text_4");
	}
	else if (display[3].value == "d2")	{
		//select p1
		getById("memory_position_4_1").checked = true; 	
		clear_elements(".memory_text_4");
	}
	else if (display[3].value == "d3" || display[3].value == "d4")	{
		//select postition from stage2		
		if (label[1] == undefined || position[1] == undefined) {
			console.log("Stage2 incomplete");		
			return;
		}
		let stage2p = <HTMLInputElement>document.querySelector(`.memory_position_2:checked`);		
		let stage4p : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_position_4`)
		stage4p.forEach(p => {
			if (p.value == stage2p.value)
				p.checked = true;
		});
		clear_elements(".memory_text_4");
	}
	
	//stage5
	if (label[3] == undefined || position[3] == undefined) {
		console.log("Stage4 incomplete");		
		return;
	}	
	if (display[4] == undefined)	{
		console.log("No stage5 input detected");
		clear_elements(".memory_text_5, .memory_position_5");
		return;
	}
	else if (display[4].value == "d1")	{			
		//select label from stage1	
		if (label[0] == undefined || position[0] == undefined) {
			console.log("Stage1 incomplete");		
			return;
		}	
		let stage1t = <HTMLInputElement>document.querySelector(`.memory_text_1:checked`);		
		let stage5t : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_text_5`)
		stage5t.forEach(t => {
			if (t.value == stage1t.value)
				t.checked = true;
		});	
		clear_elements(".memory_position_5");
		
	}
	else if (display[4].value == "d2")	{
		//select label from stage2
		if (label[1] == undefined || position[1] == undefined) {
			console.log("Stage2 incomplete");		
			return;
		}
		let stage2t = <HTMLInputElement>document.querySelector(`.memory_text_2:checked`);		
		let stage5t : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_text_5`)
		stage5t.forEach(t => {
			if (t.value == stage2t.value)
				t.checked = true;
		});
		clear_elements(".memory_position_5");
		
	}
	else if (display[4].value == "d3")	{
		//select label from stage4	
		if (label[3] == undefined || position[3] == undefined) {
			console.log("Stage4 incomplete");		
			return;
		}
		let stage4t = <HTMLInputElement>document.querySelector(`.memory_text_4:checked`);		
		let stage5t : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_text_5`)
		stage5t.forEach(t => {
			if (t.value == stage4t.value)
				t.checked = true;
		});	
		clear_elements(".memory_position_5");
		
	}
	else if (display[4].value == "d4")	{
		//select label from stage3
		if (label[2] == undefined || position[2] == undefined) {
			console.log("Stage3 incomplete");		
			return;
		}
		let stage3t = <HTMLInputElement>document.querySelector(`.memory_text_3:checked`);		
		let stage5t : NodeListOf<HTMLInputElement> =document.querySelectorAll(`.memory_text_5`)
		stage5t.forEach(t => {
			if (t.value == stage3t.value)
				t.checked = true;
		});	
		clear_elements(".memory_position_5");

	}
	
}

function clear_elements(e : string): void {	
		//todo: helper function to clear form without clearing user inputs
		// let elements: NodeListOf<HTMLInputElement> = document.querySelectorAll(`${e}`)
		// elements.forEach(p => {
		// 	p.checked = false;
		// });
		console.log(e);
}