import ReactDOM from 'react-dom'
import React,{ Component } from 'react'


//het aan maken  via een state
class NameForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { achternaam:'',name:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

// dit verandert je velue.
handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}

  // als er op Submit word geklick word het element verandert.
  handleSubmit(event){
    const { achternaam, name} = this.state
    event.preventDefault()
    document.getElementById('naam').innerHTML = (name);
    document.getElementById('achternaam').innerHTML = (achternaam);
  }

//dit word gerender en in de html gestopt.
  render() {
	return(
    <form onSubmit={this.handleSubmit}>
      <div>
      <label htmlFor='name'>Name</label>
      <input
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={this.handleChange}
      />
      </div>
      <div>
      <label htmlFor='achternaam'>achternaam</label>
      <input
        name='achternaam'
        placeholder='achternaam'
        value = {this.state.achternaam}
        onChange={this.handleChange}
      />
      </div>
      <div>
      <button  type='submit'>stuur</button>
      </div>
    </form>
    )
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
        <label>U naam:     
        <a id ='naam'></a>
        </label>
        <br></br>
        <br></br>
        <label>U achternaam:     
        <a id ='achternaam'></a>
        </label>
        <h1 id ='time'>time</h1>
      </div>  
    </div>
  )
  
}


export default form
