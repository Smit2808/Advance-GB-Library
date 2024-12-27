/* eslint-disable no-unused-expressions */
import { __ } from '@wordpress/i18n';

import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	TabPanel,
	Dashicon,
	ButtonGroup,
	SelectControl,
} from '@wordpress/components';
import './editor.scss';
import MediaContentUploadComponent from '../../js/custom-components/mediacontent-upload-component';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId, className } = props;

	const { blockID, bgColor, mediaImage, imgAlign, imgSize } = attributes;

	/* Styles */
	const bgStyle = {};
	bgColor && ( bgStyle.backgroundColor = bgColor );
	/* Styles Ends */

	/* Blockprops */
	const classes = classnames( className, 'media-and-content' );

	if ( ! blockID ) {
		setAttributes( { blockID: `media-and-content-${ clientId }` } );
	}

	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
		style: bgStyle,
	} );

	let imageSizeClass = '';
	imageSizeClass = ` img-size-${ imgSize }`;
	/* Blockprops Ends */

	return (
		<Fragment>
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
									<>
										<PanelBody
											title={ __(
												'Settings',
												'advance-gb-library'
											) }
											initialOpen={ true }
										>
											<SelectControl
												label={ __(
													'Image Size',
													'advance-gb-library'
												) }
												value={ imgSize }
												options={ [
													{
														label: 'Small',
														value: 'small',
													},
													{
														label: 'Medium',
														value: 'medium',
													},
													{
														label: 'Full',
														value: 'full',
													},
												] }
												onChange={ ( value ) =>
													setAttributes( {
														imgSize: value,
													} )
												}
												__nextHasNoMarginBottom
											/>
										</PanelBody>
										<PanelBody
											title={ __(
												'Image Alignment',
												'advance-gb-library'
											) }
											initialOpen={ false }
										>
											<div className="block-image-alignment-group">
												<ButtonGroup>
													<Button
														variant={
															imgAlign === 'left'
																? 'primary'
																: undefined
														}
														onClick={ () =>
															setAttributes( {
																imgAlign:
																	'left',
															} )
														}
													>
														<Dashicon icon="align-left" />
														{ __(
															'Left',
															'advance-gb-library'
														) }
													</Button>
													<Button
														variant={
															imgAlign === 'right'
																? 'primary'
																: undefined
														}
														onClick={ () =>
															setAttributes( {
																imgAlign:
																	'right',
															} )
														}
													>
														<Dashicon icon="align-right" />
														{ __(
															'Right',
															'advance-gb-library'
														) }
													</Button>
												</ButtonGroup>
											</div>
										</PanelBody>
									</>
								) : (
									<>
										<PanelBody
											title={ __(
												'Color Settings',
												'advance-gb-library'
											) }
											initialOpen={ false }
										>
											<PanelColorSettings
												colorSettings={ [
													{
														value: bgColor,
														onChange: ( value ) => {
															setAttributes( {
																bgColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Background Color',
															'advance-gb-library'
														),
													},
												] }
											/>
										</PanelBody>
									</>
								) }
							</div>
						) }
					</TabPanel>
				</div>
			</InspectorControls>
			<div { ...blockProps }>
				<div className="container">
					<div
						className={ `media-and-content__wrapper img-align-${ imgAlign }${ imageSizeClass }` }
					>
						<div className="media-and-content__media-wrapper">
							<MediaContentUploadComponent
								attributeKey="mediaImage"
								attributeValue={ mediaImage }
								setAttributes={ setAttributes }
							/>
						</div>
						<div className="media-and-content__content-wrapper">
							<InnerBlocks
								allowedBlocks={ [
									'core/list',
									'core/paragraph',
									'core/heading',
								] }
								templateLock={ false }
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
