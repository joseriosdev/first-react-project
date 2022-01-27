import PropTypes from 'prop-types'

const Button = ({ color, txt, type }) => {
    const colors = {
        blue: 'btn-primary',
        red: 'btn-danger',
        green: 'btn-success',
        yellow: 'btn-warning',
        gray: 'btn-secondary',
        white: 'btn-light',
        black: 'btn-dark',
        cyan: 'btn-info'
    }

    color = color in colors ? color : 'blue'

    return (
        <button type={type} className={"btn "+ colors[color]}>{txt}</button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    txt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

Button.defaultProps = {
    type: 'button',
    txt: 'BTN'
}

export default Button