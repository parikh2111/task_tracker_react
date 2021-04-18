import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
	const onClick = () => {
		console.log('click2');
	}
	return (
		<header>
			<h1 className="header">{title}</h1>
			<Button color='green' text='Add' onClick={onClick} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker'
}

Header.propsTypes = {
	title: PropTypes.string.isRequired
}



export default Header
