import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
	return(
		<div claasName='pa2'>
			<input className='tc pa3 ba b--gray bg-yellow' 
				type='Search'
				placeholder='Search Robots'
				onChange = {searchChange} 
			/>
		</div>
	);
}
export default SearchBox