import React, { useContext } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import CollectionsContext from './../../contexts/collections/collections.context';

const CollectionPreview = ({ title }) => {
	const collections = useContext(CollectionsContext);
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{collections[title].items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
