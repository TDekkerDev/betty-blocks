import React from 'react'
import ReactDOM from 'react-dom'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
// dit verandert je velue.
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // als er op Submit word geklick word het element verandert.
  handleSubmit(event) {
    document.getElementById('naam').innerHTML = (this.state.value);
    event.preventDefault();
  }

//dit word gerender en in de html gestopt.
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>

      
    );
  }
}

//de timer met een interval vann 1000.
function tick() {
  document.getElementById('time').innerHTML = (new Date().toLocaleTimeString());
}
setInterval(tick, 1000);

//fuction to render NameForm.


// fuction met time out 
// function reder_time_out(){
// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('form')
// );}setTimeout(reder_time_out,500)


// function met een onload.
window.onload = function() {
  ReactDOM.render(
    <NameForm />,
    document.getElementById('form')
  );
}




// dit html waar als word verandert door de js.
const form = () => {
  return (
    <div >
      <div >
        <div id="form"></div>
        <h1 id ='naam'>naam</h1>
        <h1 id ='time'>time</h1>
      </div>  
    </div>
  )
  
}


export default form

