import PropTypes from 'prop-types'
import Btn from './Btn'
import {useLocation} from 'react-router-dom'

const Header = ({ titles, price, showAdd, onAdd }) => {
    let title = 'Task Manager';
    const location = useLocation()
    return (
        <header>
            <h1>{title}</h1>
            {location.pathname=== '/' &&
            <Btn text={showAdd ? 'Close' : 'Add'} onClick={onAdd} color={showAdd ? 'firebrick' : 'navy'} />}
        </header>
    )
}

// Helps specify the type, made it robust
Header.propTypes = {
    titles: PropTypes.string,
    showAdd: PropTypes.bool
}

Header.defaultProps = {
    titles: 'title'
}

export default Header