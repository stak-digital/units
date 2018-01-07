import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import './accordion.scss';

export default class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: props.isOpen
		};

		this.handleExpandButtonClicked = this.handleExpandButtonClicked.bind(this);
	}

	handleExpandButtonClicked() {
		this.setState(state => {
			return {
				...state,
				isOpen: !state.isOpen
			};
		});
	}

	render() {
		return (
			<div
				className="accordion"
			>
				<div className="accordion__title-container">
					{this.props.title}
					<button onClick={this.handleExpandButtonClicked}>
						{this.state.isOpen ? '/\\' : '\\/'}
					</button>
				</div>
				<div
					className={`accordion__inner${this.state.isOpen ? ' is-open' : ''}`}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}

Accordion.defaultProps = {
	isOpen: true,
};

Accordion.propTypes = {
	children: PropTypes.node,
	title: PropTypes.node,
	isOpen: PropTypes.bool
};