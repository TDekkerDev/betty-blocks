import PropTypes from 'prop-types'


//het componeten die weer trug word gegeven
const Text = ({text ,color}) => {
  return (
      <a style = {{ color: color }}>{text}</a>
  )
}

//de default propertie van de text
Text.defaultProps = {
    color: 'black',
    text: 'no text yet',
}

// wat voor type er word mee gegeven
Text.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Text
