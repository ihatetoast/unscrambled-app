this.

this.state.newName

onChange={(e) => this.handlehangeName(e)}

/*
/ *********************************** /
//   notes for props and iterating   //
/ *********************************** /

Problem: I'm repeating myself
        The code below is repeated too much. 
        <div className="radio">
            <label>
                <input type="radio" name='transportation' className='radio' value="car" checked={this.state.selectedTrans === 'car'} onChange={this.handleTransChange}/>
                My car
            </label>
        </div>

Solution: DRY OUT
    make a generic component for a group of radio buttons.
    pass in an array (via props) to specify the labels of each radio button in the group

    const transportation = [
        { label: 'My car', value: 'car' },
        { label: 'Megabus', value: 'megabus' },
        { label: 'Motorcycle', value: 'motorcycle' }
    ];

    <RadioGroup name="transportation" onChange={this.handleTransChange} value={this.state.selectedTrans} options={transportation} />

    create a component called `RadioGroup` that uses those props to re-create that same code you just shared



*/