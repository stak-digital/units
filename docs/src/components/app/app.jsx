import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import SideBar from '../sidebar/sidebar.jsx';
import {snakeCase} from '../../utils/string';
import './app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
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

		this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
	}

	handleSearchInputChanged(event) {
		const newValue = event.target.value;
		console.log(newValue);

		this.setState({
			searchValue: newValue
		});
	}

	render() {
		return (
			<div className="body__wrapper">
				<SideBar
					functions={this.state.functionsByCategory}
					searchTerm={this.state.searchValue}
					onSearchInputChanged={this.handleSearchInputChanged}
				/>
				<div>
					<h1>
						Units by Stak Digital
					</h1>
					<p>
						A highly modular unit conversion library.
					</p>
					<div>
						<a href="https://travis-ci.org/stak-digital/units">
							<img
								src="https://travis-ci.org/stak-digital/units.svg?branch=master"
								alt="Build Status"
							/>
						</a>
						<a href="https://codecov.io/gh/stak-digital/units">
							<img
								src="https://codecov.io/gh/stak-digital/units/branch/master/graph/badge.svg"
								alt="Code Coverage"
							/>
						</a>
					</div>

					<h2>
						Getting Started
					</h2>

					<p>
						<code>
							yarn add @stak-digital/units
						</code>
					</p>
					<p>
						<code>
							npm install --save @stak-digital/units
						</code>
					</p>

					<h2>
						Usage
					</h2>

					<p>
						The library is split into three tiers:
					</p>

					<ul>
						<li>
							Library (index.js)
						</li>
						<li>
							Conversion category (weight.js, length.js)
						</li>
						<li>
							Individual function (poundsToKilograms.js)
						</li>
					</ul>

					<h3>
						Library Version
					</h3>

					<pre>
						<div>
							import units from '@stak-digital/units';
						</div>

						<div>
							const amountInPounds = 60;
						</div>
						<div>
							const amountInKilograms = units.poundsToKilograms(amountInPounds);
						</div>
						<div>
							// 27.2155
						</div>

						<div>
							const amountInInches = 30;
						</div>
						<div>
							const amountInMeters = units.inchesToMeters(amountInInches);
						</div>
						<div>
							// 0.762
						</div>
					</pre>

					<h3>
						Category Version
					</h3>

					<pre>
						<div>
							import convertWeight from '@stak-digital/units/weight';
						</div>
						<div>
							import convertLength from '@stak-digital/units/length';
						</div>

						<div>
							const amountInPounds = 60;
						</div>
						<div>
							const amountInKilograms = convertWeight.poundsToKilograms(amountInPounds);
						</div>
						<div>
							// 27.2155
						</div>

						<div>
							const amountInInches = 30;
						</div>
						<div>
							const amountInMeters = convertLength.inchesToMeters(amountInInches);
						</div>
						<div>
							// 0.762
						</div>
					</pre>

					<h3>
						Individual Functions
					</h3>

					<pre>
						<div>
							import poundsToKilograms from '@stak-digital/units/pounds-to-kilograms';
						</div>
						<div>
							import inchesToMeters from '@stak-digital/units/inches-to-meters';
						</div>

						<div>
							const amountInPounds = 60;
						</div>
						<div>
							const amountInKilograms = poundsToKilograms(amountInPounds);
						</div>
						<div>
							// 27.2155
						</div>

						<div>
							const amountInInches = 30;
						</div>
						<div>
							const amountInMeters = inchesToMeters(amountInInches);
						</div>
						<div>
							// 0.762
						</div>
					</pre>
					{Object.entries(this.state.functionsByCategory).map(([key, value]) => {
						return (
							<div className="category">
								<h2>
									Category: {key}
								</h2>
								{value.map(functionInfo => {
									return (
										<div className="function" id={snakeCase(functionInfo.functionName)}>
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