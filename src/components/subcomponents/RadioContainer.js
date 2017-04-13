import React from 'react';
import EggButton from './EggButton';
import RadioButtons from './RadioButtons';

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
      gooutOptions: [],
      gooutSelection: []
    };
    this.handleChoiceSelection = this.handleChoiceSelection.bind(this);
  }
  componentDidMount() {
    fetch('./../../options.js')
      .then(data => {
        this.setState({
          transSelection: data.transSelection,
        });
      });
  }
  handleChoiceSelection(e) {
    this.setState(
      { transSelection: [e.target.value] }, () => console.log('trans:', this.state.transSelection)
      );
  }
  getLists(){
    console.log(`You need to get lists.`)
  }
  render(){
    return(
    <div>
      <form className="radioBtnHolder" onSubmit={(e) => this.getLists(e)}>
        <p style={`font-size= 5px`}>if you see me, the form is here</p>
        <RadioButtons
          title={'How am I getting there??'}
          setName={'tranportation'}
          controlFunc={this.handleChoiceSelections}
          type={'radio'}
          options={this.state.transOptions}
          selectedOptions={this.state.transSelection} />
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





