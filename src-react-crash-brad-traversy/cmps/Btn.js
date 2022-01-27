import PropTypes from 'prop-types'

const Btn = ({ color, text, onClick }) => {
  return (
    <button style={{ backgroundColor:color }} className='btn' onClick={onClick}>
        {text}
    </button>
  )
}

Btn.defaultProps = {
    color: 'steelblue',
    text: 'BTN'
}

Btn.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string
}
export default Btn
