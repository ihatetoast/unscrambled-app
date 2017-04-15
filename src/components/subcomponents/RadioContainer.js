import React from 'react';
import EggButton from './EggButton';
import RadioGroup from './RadioGroup';


class RadioContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      transOptions: [],
      transSelection: [],
      accomOptions: [],
      accomSelection: [],
      petsOptions: [],
      petsSelection: [],
      exerOptions: [],
      exerSelection: [],
      fancyOptions: [],
      fancySelection: []
    };
    this.handleTransportation = this.handleTransportation.bind(this);
    this.handleAccommodation = this.handleAccommodation.bind(this);
    this.handlePets = this.handlePets.bind(this);
    this.handleExercise = this.handleExercise.bind(this);
    this.handleFancy = this.handleFancy.bind(this);
  }
  componentDidMount() {
    fetch('./choices_db.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          transOptions: data.transOptions,
          transSelection: data.transSelection,
          accomOptions: data.accomOptions,
          accomSelection: data.accomSelection,
          petsOptions: data.petsOptions,
          petsSelection: data.petsSelection,
          exerOptions: data.exerOptions,
          exerSelection: data.exerSelection,
          fancyOptions: data.fancyOptions,
          fancySelection: data.fancySelection
        })
      })
      .catch(e => console.log("bugger"))
  }
  handleSubmit(e){
    console.log(`You've submitted. Now you need to get lists.`);
  }
  
  handleTransportation(e){
    console.log(`Handle transportation fired. Should see list for the option I chose.`);
    this.setState({ transSelection: [e.target.value] });
  }
  handleAccommodation(e){
    console.log(`Handle accommodation fired. Should see list for the option I chose.`);
    this.setState({ accomSelection: [e.target.value] });
  }
  handlePets(e){
    console.log(`Handle pets fired. Should see list for the option I chose.`);
    this.setState({ petsSelection: [e.target.value] });
  }
  handleExercise(e){
    console.log(`Handle exercise fired. Should see list for the option I chose.`);
    this.setState({ exerSelection: [e.target.value] });
  }
  handleFancy(e){
    console.log(`Handle fancy fired. Should see list for the option I chose.`);
    this.setState({ fancySelection: [e.target.value] });
  }
  render(){
    return(
    <div>
      <form className="radioBtnHolder" onSubmit={(e) => this.handleSubmit(e)}>
        <RadioGroup
          title={'How am I getting there?'}
          setName={'transportation'}
          controlFunc={this.handleTransportation}
          type={'radio'}
          options={this.state.transOptions}
          selectedOptions={this.state.transSelection} />
        <RadioGroup
          title={'Where am I staying?'}
          setName={'accommodation'}
          controlFunc={this.handleAccommodation}
          type={'radio'}
          options={this.state.accomOptions}
          selectedOptions={this.state.accomSelection} />
        <RadioGroup
          title={'Whom am I taking?'}
          setName={'pets'}
          controlFunc={this.handlePets}
          type={'radio'}
          options={this.state.petsOptions}
          selectedOptions={this.state.petsSelection} />
        <RadioGroup
          title={`Am I runnin' or slackin'?`}
          setName={'exercise'}
          controlFunc={this.handleExercise}
          type={'radio'}
          options={this.state.exerOptions}
          selectedOptions={this.state.exerSelection} />
        <RadioGroup
          title={'Do I have to get fancy?'}
          setName={'fancy'}
          controlFunc={this.handleFancy}
          type={'radio'}
          options={this.state.fancyOptions}
          selectedOptions={this.state.fancySelection} />
        <EggButton type="submit" className="btnEgg btnEggMinor" btntext="Save" value="Submit"/>
      </form>
    </div>
    )
  }
};
export default RadioContainer;










/*
<form className="radioBtnHolder" onSubmit={(e) => this.getLists(e)}>
        <EggButton type="submit" className="btnEgg btnEggMinor" btntext="Save" />
      </form>


NOTES ON RADIO BUTTONS TO DRY OUT CODE:

1) create a container component for the radio buttons
2) create a radio button component

var Radio = React.createClass({
  render: function() {
    var key = this.props.key;
    return (
      <label className="radio-inline" key={key} htmlFor={key}>
        <input id={key} type="radio" checked={this.props.selected} value={key} />
        {this.props.label}
      </label>
    );
  }
});

var RadiosContainer = React.createClass({
  getInitialState: function() {
    return { selected: this.props.initialSelected };
  },
  
  render: function() {
    return (
      <div>
        {this.props.radios.map(function(radioProps) {
          var selected = this.state.selected === radioProps.key;
          return <Radio {...radioProps} selected={selected} />;
        }, this)}
      </div>
    );
  }
});

var radios = [
  { key: 'radioA', label: 'Radio A' },
  { key: 'radioB', label: 'Radio B' },
  { key: 'radioC', label: 'Radio C' }
];
var selectedRadio = 'radioB';

React.render(
  <RadiosContainer radios={radios} initialSelected={selectedRadio} />, 
  document.getElementById('container')
);
*/



/*OR*/
/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radios: {
        radioA: 'Radio A',
        radioB: 'Radio B',
        radioC: 'Radio C',
      },
      selected: 'radioA',
    };
  }

  renderRadioWithLabel(key) {
    const isChecked = key === this.state.selected;

    return (
      <label className="radio-inline" key={key} htmlFor={key}>
        <input id={key} type="radio" checked={isChecked} value={key} />
        {this.state.radios[key]}
      </label>
    );
  }
    
  render() {
    return (
      <div>
        {Object.keys(this.state.radios).map(key =>
          this.renderRadioWithLabel(key))}
      </div>
    );
  }
}
 
ReactDOM.render(<App />, document.getElementById('container'));


*/




