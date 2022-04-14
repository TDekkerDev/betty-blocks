import PropTypes from 'prop-types'


//de knop waar alle knoppen vandaan gehallt worden met clor en text en onClick maar die houw het nog niet doen
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  )
}


// de default propertie als er niks word mee gegeven
Button.defaultProps = {
  text: 'nog geen text!',
  color: 'steelblue',
}


// wat voor type er mee gegeven wordt
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
