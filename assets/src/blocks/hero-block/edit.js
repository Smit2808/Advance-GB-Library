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
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	Dashicon,
	ToggleControl,
} from '@wordpress/components';
// eslint-disable-next-line import/no-unresolved
import MediaUploadComponent from '../../js/custom-components/mediaupload-component';
import BackgroundPositionComponent from '../../js/custom-components/background-position';
import BackgroundBlendmodeComponent from '../../js/custom-components/background-blendmode';
import ContentAlignmentComponent from '../../js/custom-components/contentalignment-component';
import TitleTagComponent from '../../js/custom-components/titletag-component';
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId } = props;
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
		showHeading,
		showDesc,
		showBtn,
		headingColor,
		btnColor,
		btnBgColor,
		contentColor,
		bgColor,
	} = attributes;
	const classes = classnames(
		className,
		'hero-block',
		contentAlignment && 'text-' + contentAlignment
	);
	setAttributes( { blockID: `hero-block-${ clientId }` } );
	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
	} );
	const blockStyle = {};
	backgroundImage &&
		backgroundImage.url &&
		( blockStyle.backgroundImage = `url(${ backgroundImage.url })` );
	bgPosition && ( blockStyle.backgroundPosition = bgPosition );
	bgBlendMode && ( blockStyle.backgroundBlendMode = bgBlendMode );
	blockStyle.backgroundColor = bgColor;

	const headingStyle = {};
	headingColor && ( headingStyle.color = headingColor );

	const descStyle = {};
	contentColor && ( descStyle.color = contentColor );

	const btnStyle = {};
	btnColor && ( btnStyle.color = btnColor );
	btnBgColor && ( btnStyle.backgroundColor = btnBgColor );
	return (
		<>
			<InspectorControls>
				<div className="advance-gb-learning-block-sidebar">
					<TabPanel
						className="tab-panel"
						activeClass="active-tab"
						tabs={ [
							{
								name: 'general',
								title: (
									<>
										<Dashicon icon="admin-settings" />{ ' ' }
										General
									</>
								),
								className: 'general-tab',
							},
							{
								name: 'design',
								title: (
									<>
										<Dashicon icon="art" /> Design
									</>
								),
								className: 'design-tab',
							},
						] }
					>
						{ ( tab ) => (
							<div className="tab-panel-description-area">
								{ tab.name === 'general' ? (
									<div>
										<PanelBody
											title={ __(
												'Background',
												'advance-gb-library'
											) }
											initialOpen={ true }
										>
											<MediaUploadComponent
												attributeKey="backgroundImage"
												attributeValue={
													backgroundImage
												}
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
											<ToggleControl
												label={ __(
													'Show Heading',
													'advance-gb-library'
												) }
												checked={ showHeading }
												onChange={ ( value ) =>
													setAttributes( {
														showHeading: value,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Show Description',
													'advance-gb-library'
												) }
												checked={ showDesc }
												onChange={ ( value ) =>
													setAttributes( {
														showDesc: value,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Show Button',
													'advance-gb-library'
												) }
												checked={ showBtn }
												onChange={ ( value ) =>
													setAttributes( {
														showBtn: value,
													} )
												}
											/>
											<ContentAlignmentComponent
												attributeKey="contentAlignment"
												attributeValue={
													contentAlignment
												}
												setAttributes={ setAttributes }
											/>
											<TitleTagComponent
												attributeKey="titleTag"
												attributeValue={ titleTag }
												setAttributes={ setAttributes }
											/>
										</PanelBody>
									</div>
								) : (
									<PanelBody
										title={ __(
											'Color Settings',
											'advance-gb-library'
										) }
										initialOpen={ true }
									>
										<PanelColorSettings
											colorSettings={ [
												{
													value: bgColor,
													onChange: ( value ) => {
														setAttributes( {
															bgColor: value,
														} );
													},
													label: __(
														'Background Color',
														'advance-gb-library'
													),
												},
												{
													value: headingColor,
													onChange: ( value ) => {
														setAttributes( {
															headingColor: value,
														} );
													},
													label: __(
														'Heading Color',
														'advance-gb-library'
													),
												},
												{
													value: contentColor,
													onChange: ( value ) => {
														setAttributes( {
															contentColor: value,
														} );
													},
													label: __(
														'Content Color',
														'advance-gb-library'
													),
												},
												{
													value: btnBgColor,
													onChange: ( value ) => {
														setAttributes( {
															btnBgColor: value,
														} );
													},
													label: __(
														'Button Background Color',
														'advance-gb-library'
													),
												},
												{
													value: btnColor,
													onChange: ( value ) => {
														setAttributes( {
															btnColor: value,
														} );
													},
													label: __(
														'Button Color',
														'advance-gb-library'
													),
												},
											] }
										/>
									</PanelBody>
								) }
							</div>
						) }
					</TabPanel>
				</div>
			</InspectorControls>
			<div { ...blockProps } style={ blockStyle }>
				<div className="container">
					<div className="hero-block__content">
						{ showHeading && (
							<RichText
								tagName={ titleTag }
								placeholder={ __(
									'Enter Heading',
									'advance-gb-library'
								) }
								onChange={ ( value ) =>
									setAttributes( { heading: value } )
								}
								value={ heading }
								className="hero-block__heading"
								style={ headingStyle }
							/>
						) }
						{ showDesc && (
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
								style={ descStyle }
							/>
						) }
						{ showBtn && (
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
									style={ btnStyle }
								/>
							</div>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
