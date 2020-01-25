import React from 'react';

const Filter = ({filterName, handleChange}) => (
	<div>
		filter shown with <input
			value={filterName}
			onChange={(e) => handleChange(e.target.value)}
		/>
	</div>
);

export default Filter;
