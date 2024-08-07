/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
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
import { TabPanel, PanelBody } from '@wordpress/components';
// eslint-disable-next-line import/no-unresolved
import MediaUploadComponent from '../../js/custom-components/mediaupload-component';
import BackgroundPositionComponent from '../../js/custom-components/background-position';
import BackgroundBlendmodeComponent from '../../js/custom-components/background-blendmode';
import ContentAlignmentComponent from '../../js/custom-components/contentalignment-component';
import TitleTagComponent from '../../js/custom-components/titletag-component';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const {
		blockID,
		heading,
		description,
		button,
		backgroundImage,
		bgPosition,
		bgBlendMode,
		contentAlignment,
		titleTag,
	} = attributes;
	setAttributes( { blockID: `hero-block-${ clientId }` } );
	const blockProps = useBlockProps( {
		className: 'hero-block',
		id: blockID,
	} );
	const blockStyle = {};
	backgroundImage &&
		backgroundImage.url &&
		( blockStyle.backgroundImage = `url(${ backgroundImage.url })` );
	bgPosition && ( blockStyle.backgroundPosition = bgPosition );
	bgBlendMode && ( blockStyle.backgroundBlendMode = bgBlendMode );
	return (
		<>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
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
						{
							name: 'advance',
							title: 'Advance',
							className: 'advance-tab',
						},
					] }
				>
					{ ( tab ) => (
						<div className="tab-panel-description-area">
							{ tab.title === 'General' ? (
								<div>
									<PanelBody
										title={ __(
											'Background Image',
											'advance-gb-library'
										) }
										initialOpen={ false }
									>
										<MediaUploadComponent
											attributeKey="backgroundImage"
											attributeValue={ backgroundImage }
											setAttributes={ setAttributes }
										/>
										<BackgroundPositionComponent
											attributeKey="bgPosition"
											attributeValue={ bgPosition }
											setAttributes={ setAttributes }
										/>
										<BackgroundBlendmodeComponent
											attributeKey="bgBlendMode"
											attributeValue={ bgBlendMode }
											setAttributes={ setAttributes }
										/>
									</PanelBody>
									<PanelBody
										title={ __(
											'Content',
											'advance-gb-library'
										) }
										initialOpen={ false }
									>
										<ContentAlignmentComponent
											attributeKey="contentAlignment"
											attributeValue={ contentAlignment }
											setAttributes={ setAttributes }
										/>
										<TitleTagComponent
											attributeKey="titleTag"
											attributeValue={ titleTag }
											setAttributes={ setAttributes }
										/>
									</PanelBody>
								</div>
							) : tab.title === 'Design' ? (
								<div>this is Design tab</div>
							) : (
								<div>this is Advance tab</div>
							) }
						</div>
					) }
				</TabPanel>
			</InspectorControls>
			<div { ...blockProps } style={ blockStyle }>
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
