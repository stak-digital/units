import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import highlight from 'highlight.js';
import SideBar from '../sidebar/sidebar.jsx';
import snakeCase from 'snake-case';
import kebabCase from 'kebab-case';
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

	componentDidMount() {
		Array.from(this.root.querySelectorAll('pre code')).forEach(codeBlock => {
			highlight.highlightBlock(codeBlock);
		});
	}

	render() {
		return (
			<div
				ref={el => this.root = el}
				className="body__wrapper"
			>
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

					<h2 id="getting_started">
						Getting started
					</h2>

					<pre>
						<code className="bash">
							yarn add @stak-digital/units
						</code>
					</pre>
					<pre>
						<code className="bash">
							npm install --save @stak-digital/units
						</code>
					</pre>

					<h2 id="usage">
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

					<h3 id="usage_library_version">
						Library version
					</h3>

					<pre>
						<code className="javascript">
							import units from '@stak-digital/units';<br/>
							<br/>
							const amountInPounds = 60;<br/>
							const amountInKilograms = units.poundsToKilograms(amountInPounds);<br/>
							/* 27.2155 */<br/>
							<br/>
							const amountInInches = 30;<br/>
							const amountInMeters = units.inchesToMeters(amountInInches);<br/>
							/* 0.762 */
						</code>
					</pre>

					<h3 id="usage_category_version">
						Category version
					</h3>

					<pre>
						<code className="javascript">
							import convertWeight from '@stak-digital/units/weight'; <br/>
							import convertLength from '@stak-digital/units/length'; <br/>
							<br/>
							const amountInPounds = 60; <br/>
							const amountInKilograms = convertWeight.poundsToKilograms(amountInPounds); <br/>
							/* 27.2155 */<br/>
							<br/>
							const amountInInches = 30; <br/>
							const amountInMeters = convertLength.inchesToMeters(amountInInches); <br/>
							/* 0.762 */<br/>
						</code>
					</pre>

					<h3 id="usage_individual_functions">
						Individual functions
					</h3>

					<pre>
						<code className="javascript">
							import poundsToKilograms from '@stak-digital/units/pounds-to-kilograms'; <br/>
							import inchesToMeters from '@stak-digital/units/inches-to-meters'; <br/>
							<br/>
							const amountInPounds = 60; <br/>
							const amountInKilograms = poundsToKilograms(amountInPounds); <br/>
							/* 27.2155 */<br/>
							<br/>
							const amountInInches = 30; <br/>
							const amountInMeters = inchesToMeters(amountInInches); <br/>
							/* 0.762 */
						</code>
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
											<h4>
												Usage
											</h4>
											<pre>
												<code className="javascript">
													import {functionInfo.functionName} from '@stak-digital/units/{kebabCase(functionInfo.functionName)}';<br/>
													<br/>
													{functionInfo.functionName}(10);
												</code>
											</pre>
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