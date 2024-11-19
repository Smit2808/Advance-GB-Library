import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';

const TitleTagComponent = ( {
	attributeKey = 'titleTag',
	attributeValue = {},
	setAttributes,
} ) => {
	const handleButtonClick = ( value ) => {
		setAttributes( { [ attributeKey ]: value } );
	};

	return (
		<div className="setting-row heading-tag-settings">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ __( 'Heading Tag', 'advance-gb-library' ) }
			</label>
			<ButtonGroup>
				<Button
					className={ 'H1' === attributeValue ? 'active' : '' }
					onClick={ () => handleButtonClick( 'H1' ) }
				>
					H1
				</Button>
				<Button
					className={ 'H2' === attributeValue ? 'active' : '' }
					onClick={ () => handleButtonClick( 'H2' ) }
				>
					H2
				</Button>
				<Button
					className={ 'H3' === attributeValue ? 'active' : '' }
					onClick={ () => handleButtonClick( 'H3' ) }
				>
					H3
				</Button>
				<Button
					className={ 'H4' === attributeValue ? 'active' : '' }
					onClick={ () => handleButtonClick( 'H4' ) }
				>
					H4
				</Button>
				<Button
					className={ 'H5' === attributeValue ? 'active' : '' }
					onClick={ () => handleButtonClick( 'H5' ) }
				>
					H5
				</Button>
				<Button
					className={ 'H6' === attributeValue ? 'active' : '' }
					onClick={ () => handleButtonClick( 'H6' ) }
				>
					H6
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default TitleTagComponent;
