import Form from './Form';
import Api from './Api'



//de html met de ander componeten er in 
const main = () => {
  return (
    <div className="main">
      <h1>dit is de api</h1>
      <Api />
      <h1>dit is de form</h1>
      <Form />
    </div>
  )
  
}

export default main
