import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const backgroundPositions = [
	{ label: __( 'Select Position', 'advance-gb-library' ), value: '' },
	{ label: __( 'Inherit', 'advance-gb-library' ), value: 'inherit' },
	{ label: __( 'Initial', 'advance-gb-library' ), value: 'initial' },
	{ label: __( 'Bottom', 'advance-gb-library' ), value: 'bottom' },
	{ label: __( 'Center', 'advance-gb-library' ), value: 'center' },
	{ label: __( 'Left', 'advance-gb-library' ), value: 'left' },
	{ label: __( 'Right', 'advance-gb-library' ), value: 'right' },
	{ label: __( 'Top', 'advance-gb-library' ), value: 'top' },
	{ label: __( 'Unset', 'advance-gb-library' ), value: 'unset' },
	{
		label: __( 'Center center', 'advance-gb-library' ),
		value: 'center center',
	},
	{ label: __( 'Left top', 'advance-gb-library' ), value: 'left top' },
	{ label: __( 'Left center', 'advance-gb-library' ), value: 'left center' },
	{ label: __( 'Left bottom', 'advance-gb-library' ), value: 'left bottom' },
	{ label: __( 'Right top', 'advance-gb-library' ), value: 'right top' },
	{
		label: __( 'Right center', 'advance-gb-library' ),
		value: 'right center',
	},
	{
		label: __( 'Right bottom', 'advance-gb-library' ),
		value: 'right bottom',
	},
	{ label: __( 'Center top', 'advance-gb-library' ), value: 'center top' },
	{
		label: __( 'Center bottom', 'advance-gb-library' ),
		value: 'center bottom',
	},
];

const BackgroundPositionComponent = ( {
	attributeKey = 'bgPosition',
	attributeValue = {},
	setAttributes,
} ) => {
	return (
		<div className="setting-row">
			<SelectControl
				label={ __( 'Background Position', 'advance-gb-library' ) }
				value={ attributeValue }
				options={ backgroundPositions }
				onChange={ ( value ) =>
					setAttributes( {
						[ attributeKey ]: value,
					} )
				}
			/>
		</div>
	);
};

export default BackgroundPositionComponent;
