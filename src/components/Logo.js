import PropTypes from 'prop-types'


// de logo 
const logo = ({height, width}) => {
    return (
        <img src={require('../img/logo-hor-black.png')} alt="logo" height={height} width={width} />
    )
} 

// de default propertie
logo.defaultProps = {
    height: 'auto',
    width: 'auto',
}

// de wat voor type word mee gegeven
logo.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
}

export default logo
