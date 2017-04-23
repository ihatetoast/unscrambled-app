import React from 'react';
// import { Link } from 'react-router-dom';
import EggButton from './EggButton';
import EggBorder from './EggBorder';
import EggPicture from './EggPicture';
import RadioGroup from './RadioGroup';
import './../../styles/RadCont_LstBits.css';

import biggerBoat from '../../assets/jaws.jpg';
import shiningLiving from '../../assets/shining-twins_living.svg';
import katzDeli from '../../assets/katzdeli.svg';
import running from '../../assets/forrest.svg'

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
  handleClearAll(e) {
    e.preventDefault();
    this.setState({
      transSelection: [],
      accomSelection: [],
      petsSelection: [],
      exerSelection: [],
      fancySelection: []
    });
  }
  handleDecisions(e) {
    e.preventDefault();
    this.setState({
      transSelection: [e.target.value],
      accomSelection: [e.target.value],
      petsSelection: [e.target.value],
      exerSelection: [e.target.value],
      fancySelection: [e.target.value]
    });

    const tripDecisions = {
      transSelection: this.state.transSelection,
      accomSelection: this.state.accomSelection,
      petsSelection: this.state.petsSelection,
      exerSelection: this.state.exerSelection,
      fancySelection: this.state.fancySelection
    };
    const ts = this.state;
    console.log(`You are going by ${ts.transSelection[0]} and staying at ${ts.accomSelection[0]} and taking ${ts.petsSelection[0]} 
      and plannin on ${ts.exerSelection[0]}. Are you going out? You said ${ts.fancySelection[0]}.`);
    console.log(tripDecisions);
    this.handleClearAll(e);
  }
  render(){
    return(
    <div>
      <h2>You have decisions to make:</h2>
      <form className="radioBtnHolder" onSubmit={(e) => this.handleDecisions(e)}>
        <div className="radioPicRow">
          <RadioGroup
            title={'How am I getting there?'}
            setName={'transportation'}
            controlFunc={this.handleTransportation}
            type={'radio'}
            options={this.state.transOptions}
            selectedOptions={this.state.transSelection} />
          <EggPicture src={ biggerBoat }/>
        </div>
        <EggBorder />
        <div className="radioPicRow">
          <RadioGroup
            title={'Where am I staying?'}
            setName={'accommodation'}
            controlFunc={this.handleAccommodation}
            type={'radio'}
            options={this.state.accomOptions}
            selectedOptions={this.state.accomSelection} />
          <EggPicture src={ shiningLiving }/>
        </div>
        <EggBorder />
        <div className="radioPicRow">
          <RadioGroup
            title={'Whom am I taking?'}
            setName={'pets'}
            controlFunc={this.handlePets}
            type={'radio'}
            options={this.state.petsOptions}
            selectedOptions={this.state.petsSelection} />
        {/* <EggPicture src={ WILL NEED TO MAKE }/>*/}
        </div>
        <EggBorder />
        <div className="radioPicRow">
          <RadioGroup
            title={`Am I sweatin' or slackin'?`}
            setName={'exercise'}
            controlFunc={this.handleExercise}
            type={'radio'}
            options={this.state.exerOptions}
            selectedOptions={this.state.exerSelection} />
          <EggPicture src={ running }/>
        </div>
       <EggBorder />
        <div className="radioPicRow">
          <RadioGroup
            title={'Am I going out?'}
            setName={'fancy'}
            controlFunc={this.handleFancy}
            type={'radio'}
            options={this.state.fancyOptions}
            selectedOptions={this.state.fancySelection} />
          <EggPicture src={ katzDeli }/>
        </div>
       <EggBorder />
        <div className="radioPicRow">
         <EggButton type="submit" className="btnEgg btnEggMinor" btntext="Save" value="Submit"/>
         
          <EggButton onClick={this.handleClearAll} className="btnEgg btnEggMinor" btntext="Clear"/>
        </div>
      </form>
    </div>
    )
  }
};
export default RadioContainer;



 // <button className="btnEgg btnEggMinor"><Link to="/packing"> save &amp; pack</Link></button>
  // <EggButton type="submit" className="btnEgg btnEggMinor" btntext="Save" value="Submit" onClick={this.SOMETHING}/>
