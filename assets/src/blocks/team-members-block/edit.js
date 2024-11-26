/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	ToggleControl,
	TabPanel,
	Dashicon,
	Tooltip,
	Button,
} from '@wordpress/components';

import {
	RichText,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import classnames from 'classnames';
import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId } = props;
	const {
		blockID,
		bgColor,
		headingColor,
		descriptionColor,
		showHeading,
		showImage,
		showDescription,
		cardItems,
	} = attributes;

	if ( ! blockID ) {
		setAttributes( {
			blockID: `team-members-section-${ clientId }`,
		} );
	}

	const blockStyle = {};
	bgColor && ( blockStyle.backgroundColor = bgColor );

	const headingStyle = {};
	headingColor && ( headingStyle.color = headingColor );

	const descStyle = {};
	descriptionColor && ( descStyle.color = descriptionColor );

	const classes = classnames( className, 'team-members-section' );
	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
	} );

	useEffect( () => {
		if ( 0 === cardItems.length ) {
			setAttributes( {
				cardItems: [
					{
						title: '',
						description: '',
						imageID: '',
						imageURL: '',
						imageAlt: '',
						imageWidth: '',
						imageHeight: '',
					},
				],
			} );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	const moveItem = ( oldIndex, newIndex ) => {
		const arrayCopy = [ ...cardItems ];
		arrayCopy[ oldIndex ] = cardItems[ newIndex ];
		arrayCopy[ newIndex ] = cardItems[ oldIndex ];

		setAttributes( { cardItems: arrayCopy } );
	};

	const addNewItem = () => {
		let itemsArr = cardItems;
		const newObject = [
			...cardItems,
			{
				index: cardItems.length,
				title: '',
				description: '',
				imageID: '',
				imageURL: '',
				imageAlt: '',
				imageWidth: '',
				imageHeight: '',
			},
		];
		itemsArr = newObject;
		setAttributes( {
			cardItems: itemsArr,
		} );
	};

	const teamMemberDivs = cardItems.map( ( cardItem, index ) => {
		return (
			<div className="team-member-wrapper" key={ index }>
				<div className={ `item-action-wrap` }>
					<div className="move-item">
						{ 0 < index && (
							<Tooltip
								text={ __( 'Move Up', 'advance-gb-learning' ) }
							>
								<span
									className="dashicons dashicons-arrow-left-alt"
									aria-hidden="true"
									onClick={ () =>
										moveItem( index, index - 1 )
									}
								></span>
							</Tooltip>
						) }
						{ index + 1 < cardItems.length && (
							<Tooltip
								text={ __(
									'Move Down',
									'advance-gb-learning'
								) }
							>
								<span
									onKeyUp={ () => {} }
									role="button"
									tabIndex={ 0 }
									className="dashicons dashicons-arrow-right-alt"
									onClick={ () =>
										moveItem( index, index + 1 )
									}
								></span>
							</Tooltip>
						) }
					</div>
					{ 1 < cardItems.length && (
						<Tooltip
							text={ __( 'Remove Item', 'advance-gb-learning' ) }
						>
							<i
								onKeyUp={ () => {} }
								role="button"
								tabIndex={ 0 }
								className="remove-item dashicons dashicons-no-alt"
								onClick={ () => {
									const toDelete =
										// eslint-disable-next-line no-alert
										confirm(
											__(
												'Are you sure you want to delete this item?'
											)
										);
									if ( true === toDelete ) {
										const arrayCopy = [ ...cardItems ];
										arrayCopy.splice( index, 1 );
										setAttributes( {
											cardItems: arrayCopy,
										} );
									}
								} }
							></i>
						</Tooltip>
					) }
				</div>
				<div className="team-member-inner-wrapper">
					{ showImage && (
						<div className="team-member-image-wrapper">
							<div className="vitria-block-control image-preview image-controle-visible-hover">
								{ cardItem.imageURL && (
									<div
										className={ `image-controls small-icons icon-bottom-left-fixed` }
									>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ ( item ) => {
													const arrayCopy = [
														...cardItems,
													];
													arrayCopy[ index ].imageID =
														item.id;
													arrayCopy[
														index
													].imageURL = item.url;
													arrayCopy[
														index
													].imageAlt = item.alt;
													arrayCopy[
														index
													].imageWidth = item.width;
													arrayCopy[
														index
													].imageHeight = item.height;
													setAttributes( {
														cardItems: arrayCopy,
													} );
												} }
												allowedTypes={ [ 'image' ] }
												value={ cardItem.imageID }
												render={ ( { open } ) => {
													return (
														<Tooltip
															text={ __(
																'Edit Image',
																'advance-gb-learning'
															) }
														>
															<i
																onKeyUp={ () => {} }
																role="button"
																tabIndex={ 0 }
																className="dashicons dashicons-edit edit-image"
																onClick={ open }
															></i>
														</Tooltip>
													);
												} }
											/>
										</MediaUploadCheck>
										<Tooltip
											text={ __(
												'Remove Image',
												'advance-gb-learning'
											) }
										>
											<i
												onKeyUp={ () => {} }
												role="button"
												tabIndex={ 0 }
												className="dashicons dashicons-no-alt remove-image"
												onClick={ () => {
													const arrayCopy = [
														...cardItems,
													];
													arrayCopy[ index ].imageID =
														'';
													arrayCopy[
														index
													].imageURL = '';
													arrayCopy[
														index
													].imageAlt = '';
													arrayCopy[
														index
													].imageWidth = '';
													arrayCopy[
														index
													].imageHeight = '';
													setAttributes( {
														cardItems: arrayCopy,
													} );
												} }
											></i>
										</Tooltip>
									</div>
								) }
								{ cardItem.imageURL && (
									<img
										width={ cardItem.imageWidth }
										height={ cardItem.imageHeight }
										src={ cardItem.imageURL }
										alt={ cardItem.imageAlt }
									/>
								) }
							</div>
							{ ! cardItem.imageURL && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ ( item ) => {
											const arrayCopy = [ ...cardItems ];
											arrayCopy[ index ].imageID =
												item.id;
											arrayCopy[ index ].imageURL =
												item.url;
											arrayCopy[ index ].imageAlt =
												item.alt;
											arrayCopy[ index ].imageWidth =
												item.width;
											arrayCopy[ index ].imageHeight =
												item.height;
											setAttributes( {
												cardItems: arrayCopy,
											} );
										} }
										allowedTypes={ [ 'image' ] }
										value={ cardItem.imageURL }
										render={ ( { open } ) => (
											<div className="upload-wrap">
												<Tooltip
													text={ __(
														'Upload Image of 510x106px',
														'advance-gb-learning'
													) }
												>
													<Button
														onClick={ open }
														className="button"
													>
														<i className="dashicons dashicons-upload"></i>
													</Button>
												</Tooltip>
											</div>
										) }
									/>
								</MediaUploadCheck>
							) }
						</div>
					) }
					<div className="team-member-content-wrapper">
						{ showHeading && (
							<RichText
								tagName="h3"
								placeholder={ __(
									'Enter Title',
									'advance-gb-learning'
								) }
								className="title"
								value={ cardItem.title }
								onChange={ ( value ) => {
									const arrayCopy = [ ...cardItems ];
									arrayCopy[ index ].title = value;
									setAttributes( {
										cardItems: arrayCopy,
									} );
								} }
								style={ headingStyle }
							/>
						) }
						{ showDescription && (
							<RichText
								tagName="p"
								placeholder={ __(
									'Enter Description',
									'advance-gb-learning'
								) }
								className="description"
								value={ cardItem.description }
								onChange={ ( value ) => {
									const arrayCopy = [ ...cardItems ];
									arrayCopy[ index ].description = value;
									setAttributes( {
										cardItems: arrayCopy,
									} );
								} }
								style={ descStyle }
							/>
						) }
					</div>
				</div>
			</div>
		);
	} );

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
									<>
										<PanelBody
											title={ __(
												'Settings',
												'advance-gb-learning'
											) }
										>
											<ToggleControl
												label={ __(
													'Show Image',
													'advance-gb-learning'
												) }
												checked={ showImage }
												onChange={ ( showImage ) =>
													setAttributes( {
														showImage,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Show Heading',
													'advance-gb-learning'
												) }
												checked={ showHeading }
												onChange={ ( showHeading ) =>
													setAttributes( {
														showHeading,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Show Description',
													'advance-gb-learning'
												) }
												checked={ showDescription }
												onChange={ (
													showDescription
												) =>
													setAttributes( {
														showDescription,
													} )
												}
											/>
										</PanelBody>
									</>
								) : (
									<>
										<PanelBody
											title={ __(
												'Color Settings',
												'advance-gb-learning'
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
															'advance-gb-learning'
														),
													},
													{
														value: headingColor,
														onChange: ( value ) => {
															setAttributes( {
																headingColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Heading Color',
															'advance-gb-learning'
														),
													},
													{
														value: descriptionColor,
														onChange: ( value ) => {
															setAttributes( {
																descriptionColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Description Color',
															'advance-gb-learning'
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
			<div { ...blockProps } style={ blockStyle }>
				<div className="container">
					<div className="team-members-wrapper">
						{ teamMemberDivs }
						<div
							onKeyUp={ () => {} }
							role="button"
							tabIndex={ 0 }
							className="add-item-wrap"
							onClick={ () => {
								addNewItem();
							} }
						>
							<Tooltip
								text={ __(
									'Add New Item',
									'advance-gb-learning'
								) }
							>
								<i
									className="add-new-item dashicons dashicons-plus"
									aria-hidden="true"
								></i>
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
