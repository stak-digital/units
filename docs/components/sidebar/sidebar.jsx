import { h } from 'preact';
import Accordion from '../accordion/accordion.jsx';
import snakeCase from 'snake-case';
import './sidebar.css';

function buildFunctionListItem(functionInfo) {
	const name = functionInfo.functionName;

	return (
		<li>
			<a href={`#${snakeCase(name)}`}>
				{name}
			</a>
		</li>
	);
}

export default function({functions, onSearchInputChanged, searchTerm}) {
	return (
		<div className='sidebar'>
			<label>
				Search
				<input type="text" onKeyDown={onSearchInputChanged}/>
			</label>
			<ul>
				<li>
					<a href="#getting_started">
						Getting started
					</a>
				</li>
				<li>
					<a href="#usage">
						Usage
					</a>
				</li>
				<li>
					<a href="#usage_library_version">
						Library version
					</a>
				</li>
				<li>
					<a href="#usage_category_version">
						Category version
					</a>
				</li>
				<li>
					<a href="#usage_individual_functions">
						Individual functions
					</a>
				</li>
			</ul>
			{Object.entries(functions).map(([key, value]) => {
				return (
					<ul>
						<Accordion
							title={
								<a href={`#${key}`}>
									{key}
								</a>
							}
							isOpen={false}
						>
							<ul>
								{value.filter(functionInfo => {
									return functionInfo.functionName.includes(searchTerm)
								}).map(buildFunctionListItem)}
							</ul>
						</Accordion>
					</ul>
				);
			})}
		</div>
	);
}