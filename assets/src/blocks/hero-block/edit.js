/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const { blockID, heading, description, button } = attributes;
	setAttributes( { blockID: `hero-block-${ clientId }` } );
	const blockProps = useBlockProps( {
		className: 'hero-block',
		id: blockID,
	} );
	const onSelectTab = ( tabName ) => {
		console.log( 'Selecting tab', tabName );
	};
	return (
		<>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					onSelect={ onSelectTab }
					tabs={ [
						{
							name: 'general',
							title: 'General',
							className: 'general-tab',
						},
						{
							name: 'design',
							title: 'Design',
							className: 'design-tab',
						},
					] }
				>
					{ ( tab ) => (
						<div className="tab-panel-description-area">
							{ tab.title === 'General' ? (
								<div>this is General tab</div>
							) : (
								<div>this is tab 2</div>
							) }
						</div>
					) }
					{ /* { ( tab ) => <p>{ tab.name }</p> } */ }
				</TabPanel>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
					<div className="hero-block__content">
						<RichText
							tagName="h1"
							placeholder={ __(
								'Enter Heading',
								'advance-gb-library'
							) }
							onChange={ ( value ) =>
								setAttributes( { heading: value } )
							}
							value={ heading }
							className="hero-block__heading"
						/>
						<RichText
							tagName="p"
							placeholder={ __(
								'Enter Description',
								'advance-gb-library'
							) }
							onChange={ ( value ) =>
								setAttributes( { description: value } )
							}
							value={ description }
							className="hero-block__description"
						/>
						<div className="btn-wrap hero-block__button">
							<RichText
								tagName="p"
								placeholder={ __(
									'Enter button text',
									'advance-gb-library'
								) }
								keepPlaceholderOnFocus="true"
								value={ button }
								className="btn btn-primary"
								onChange={ ( value ) =>
									setAttributes( { button: value } )
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
