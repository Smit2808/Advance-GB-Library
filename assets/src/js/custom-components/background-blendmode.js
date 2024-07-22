import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const backgroundblendmode = [
	{
		label: __( 'Select Background Blend Mode', 'advance-gb-library' ),
		value: '',
	},
	{ label: __( 'Normal', 'advance-gb-library' ), value: 'normal' },
	{ label: __( 'Multiply', 'advance-gb-library' ), value: 'multiply' },
	{ label: __( 'Screen', 'advance-gb-library' ), value: 'screen' },
	{ label: __( 'Overlay', 'advance-gb-library' ), value: 'overlay' },
	{ label: __( 'Darken', 'advance-gb-library' ), value: 'darken' },
	{ label: __( 'Lighten', 'advance-gb-library' ), value: 'lighten' },
	{ label: __( 'Color Dodge', 'advance-gb-library' ), value: 'color-dodge' },
	{ label: __( 'Color Burn', 'advance-gb-library' ), value: 'color-burn' },
	{ label: __( 'Hard Light', 'advance-gb-library' ), value: 'hard-light' },
	{ label: __( 'Soft Light', 'advance-gb-library' ), value: 'soft-light' },
	{ label: __( 'Difference', 'advance-gb-library' ), value: 'difference' },
	{ label: __( 'Exclusion', 'advance-gb-library' ), value: 'exclusion' },
];

const BackgroundBlendmodeComponent = ( {
	attributeKey = 'bgBlendMode',
	attributeValue = {},
	setAttributes,
} ) => {
	return (
		<div className="setting-row">
			<SelectControl
				label={ __( 'Background Blend Mode', 'advance-gb-library' ) }
				value={ attributeValue }
				options={ backgroundblendmode }
				onChange={ ( value ) =>
					setAttributes( {
						[ attributeKey ]: value,
					} )
				}
			/>
		</div>
	);
};

export default BackgroundBlendmodeComponent;
