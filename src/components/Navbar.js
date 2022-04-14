import PropTypes from 'prop-types'
import Button from './Button'
import Logo from './Logo'

//de html met de ander componeten er in 
function navbar() {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <Logo   width="10%" />
        </div>
        <div className="navbar-links">
            <Button color='green' text='Butten_1'/>
            <Button color='red' text='Butten_2'/>
            <Button color='yellow' text='Butten_3'/>
        </div>
    </div>
  )
}

export default navbar





