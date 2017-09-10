import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import SideBar from '../sidebar/sidebar.jsx';
import {snakeCase} from '../../utils/string';
import './app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			functionsByCategory: props.functions.reduce((acc, curr) => {
				if (!!acc[curr.category]) {
					return {
						...acc,
						[curr.category]: [
							...acc[curr.category],
							curr
						]
					};
				} else {
					return {
						...acc,
						[curr.category]: [curr]
					}
				}
			}, {})
		};
	}

	render() {
		return (
			<div className="body__wrapper">
				<SideBar functions={this.state.functionsByCategory}/>
				<div>
					<h1>
						Units
					</h1>
					{Object.entries(this.state.functionsByCategory).map(([key, value]) => {
						return (
							<div className="category">
								<h2>
									Category: {key}
								</h2>
								{value.map(functionInfo => {
									return (
										<div id={snakeCase(functionInfo.functionName)}>
											<h3>
												Function: {functionInfo.functionName}
											</h3>
											{functionInfo.description !== '' && (
												<p>
													{functionInfo.description}
												</p>
											)}
											<h4>
												Arguments
											</h4>
											{functionInfo.arguments.map(argument => {
												return (
													<div>
														<p>
															{argument.name} {`{${argument.type}}`}
														</p>
														{argument.description !== '' && (
															<p>
																{functionInfo.description}
															</p>
														)}
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	functions: PropTypes.object.isRequired,
};