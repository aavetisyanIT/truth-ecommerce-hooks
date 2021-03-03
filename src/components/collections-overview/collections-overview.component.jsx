import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';
import DirectoryContext from './../../contexts/directory/directory.context';

const CollectionsOverview = () => {
	const collections = useContext(DirectoryContext);
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default CollectionsOverview;
