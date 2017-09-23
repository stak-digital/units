import { h } from 'preact';
import {snakeCase} from '../../utils/string';
import './sidebar.scss';

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
			{Object.entries(functions).map(([key, value]) => {
				return (
					<ul>
						{key}
						<ul>
							{value.filter(functionInfo => {
								return functionInfo.functionName.includes(searchTerm)
							}).map(buildFunctionListItem)}
						</ul>
					</ul>
				);
			})}
		</div>
	);
}