import { __ } from '@wordpress/i18n';
import { Button, ButtonGroup } from '@wordpress/components';

const TitleTagComponent = ( { attributeKey = 'titleTag', setAttributes } ) => {
	const handleButtonClick = ( value ) => {
		setAttributes( { [ attributeKey ]: value } );
	};

	return (
		<div className="setting-row">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ __( 'Title Tag', 'advance-gb-library' ) }
			</label>
			<ButtonGroup>
				<Button onClick={ () => handleButtonClick( 'H1' ) }>H1</Button>
				<Button onClick={ () => handleButtonClick( 'H2' ) }>H2</Button>
				<Button onClick={ () => handleButtonClick( 'H3' ) }>H3</Button>
				<Button onClick={ () => handleButtonClick( 'H4' ) }>H4</Button>
				<Button onClick={ () => handleButtonClick( 'H5' ) }>H5</Button>
				<Button onClick={ () => handleButtonClick( 'H6' ) }>H6</Button>
				<Button onClick={ () => handleButtonClick( 'P' ) }>P</Button>
			</ButtonGroup>
		</div>
	);
};

export default TitleTagComponent;
