// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n'; // Add this line

const ContentAlignmentComponent = ( {
	attributeKey = 'contentAlignment',
	attributeValue = {},
	setAttributes,
} ) => {
	return (
		<div className="setting-row">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ __( 'Content Position', 'advance-gb-library' ) }
			</label>
			<AlignmentMatrixControl
				value={ attributeValue }
				onChange={ ( value ) =>
					setAttributes( {
						[ attributeKey ]: value,
					} )
				}
			/>
		</div>
	);
};

export default ContentAlignmentComponent;
