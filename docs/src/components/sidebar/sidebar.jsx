import { h } from 'preact';
import {snakeCase} from '../../utils/string';
import './sidebar.scss';

export default function({functions}) {
	return (
		<div className='sidebar'>
			{Object.entries(functions).map(([key, value]) => {
				return (
					<ul>
						{key}
						<ul>
							{value.map(functionInfo => {
								const name = functionInfo.functionName;

								return (
									<li>
										<a href={`#${snakeCase(name)}`}>
											{name}
										</a>
									</li>
								);
							})}
						</ul>
					</ul>
				);
			})}
		</div>
	);
}