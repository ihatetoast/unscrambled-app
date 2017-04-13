import React from 'react';


const RadioButtons = (props) => (
	<div>
		<p>i am a pretend radio button boop boop boop</p>
	</div>

)
export default RadioButtons

/*
/ *********************************** /
//   notes for props and iterating   //
/ *********************************** /

Problem: I'm repeating myself
		The code below is repeated too much. 
		<div className="radio">
			<label>
				<input type="radio" name='transportation' value="car" checked={this.state.selectedTrans === 'car'} onChange={this.handleTransChange}/>
				My car
			</label>
		</div>

Solution: DRY OUT
	make a generic component for a group of radio buttons.
	pass in an array (via props) to specify the labels of each radio button in the group

	<RadioGroup name="transportation" onChange={this.handleTransChange} value={this.state.selectedTrans} options={transportation} />

	create a component called `RadioGroup` that uses those props to re-create that same code you just shared

these will be the objs in an array
const choices = [
	 transportation: {
	    { label: 'my car', value: 'car' },
	    { label: 'Megabus', value: 'Megabus' },
	    { label: 'my motorcycle or a bigger boat', value: 'motorcycle' }
	},
	accommodation: {
		{ label: 'with Pooh', value: 'pooh' },
	    { label: 'with Dad and Ellen, value: 'dad' },
	    { label: 'with Mary and Jeff', value: 'mary' },
	    { label: 'at La Quinta or The Overlook', value: 'la quinta' }
	},
	pets: {
	    { label: 'all the critters', value: 'all the critters' },
	    { label: 'just the hounds', value: 'just the hounds' },
	    { label: 'just the cats', value: 'just the cats' },
	    { label: 'just myself', value: 'just myself' }
	},
	runnin: {
		{ label: 'running', value: 'run },
		{ label: 'slacking', value: 'slack' }
	},
	goingOut: {
		{ label: 'going out', value: 'going out' },
		{ label: 'staying in', value: 'staying in' }
	}
]

	


*/