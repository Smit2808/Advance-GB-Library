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
	RangeControl,
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

import ContentAlignmentComponent from '../../js/custom-components/contentalignment-component';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId } = props;
	const {
		blockID,
		bgColor,
		teamMemberNameColor,
		teamMemberDescriptionColor,
		showTeamMemberName,
		showImage,
		showTeamMemberDescription,
		teamMemberItems,
		contentAlignment,
		columns,
	} = attributes;

	if ( ! blockID ) {
		setAttributes( {
			blockID: `team-members-section-${ clientId }`,
		} );
	}

	const blockStyle = {};
	bgColor && ( blockStyle.backgroundColor = bgColor );

	const headingStyle = {};
	teamMemberNameColor && ( headingStyle.color = teamMemberNameColor );

	const descStyle = {};
	teamMemberDescriptionColor &&
		( descStyle.color = teamMemberDescriptionColor );

	const teamMemberContentStyle = {};
	contentAlignment && ( teamMemberContentStyle.textAlign = contentAlignment );

	const columnClass = 2 === columns ? 'has-two-columns' : 'has-three-columns';
	const classes = classnames(
		className,
		'team-members-section',
		columnClass
	);
	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
	} );

	useEffect( () => {
		if ( 0 === teamMemberItems.length ) {
			setAttributes( {
				teamMemberItems: [
					{
						title: '',
						description: '',
						imageID: '',
						imageURL:
							'/wp-content/themes/Advance-GB-Library/assets/src/images/placeholder-image.png',
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
		const arrayCopy = [ ...teamMemberItems ];
		arrayCopy[ oldIndex ] = teamMemberItems[ newIndex ];
		arrayCopy[ newIndex ] = teamMemberItems[ oldIndex ];

		setAttributes( { teamMemberItems: arrayCopy } );
	};

	const addNewItem = () => {
		let itemsArr = teamMemberItems;
		const newObject = [
			...teamMemberItems,
			{
				index: teamMemberItems.length,
				title: '',
				description: '',
				imageID: '',
				imageURL:
					'/wp-content/themes/Advance-GB-Library/assets/src/images/placeholder-image.png',
				imageAlt: '',
				imageWidth: '',
				imageHeight: '',
			},
		];
		itemsArr = newObject;
		setAttributes( {
			teamMemberItems: itemsArr,
		} );
	};

	const teamMemberDivs = teamMemberItems.map( ( teamMemberItem, index ) => {
		return (
			<div className="team-member-wrapper" key={ index }>
				<div className={ `item-action-wrap` }>
					<div className="move-item">
						{ 0 < index && (
							<Tooltip
								text={ __(
									'Move Left',
									'advance-gb-learning'
								) }
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
						{ index + 1 < teamMemberItems.length && (
							<Tooltip
								text={ __(
									'Move Right',
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
					{ 1 < teamMemberItems.length && (
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
										const arrayCopy = [
											...teamMemberItems,
										];
										arrayCopy.splice( index, 1 );
										setAttributes( {
											teamMemberItems: arrayCopy,
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
							<div className="advance-gb-learning-block-control image-preview image-controle-visible-hover">
								{ teamMemberItem.imageURL && (
									<div
										className={ `image-controls small-icons icon-bottom-left-fixed` }
									>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ ( item ) => {
													const arrayCopy = [
														...teamMemberItems,
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
														teamMemberItems:
															arrayCopy,
													} );
												} }
												allowedTypes={ [ 'image' ] }
												value={ teamMemberItem.imageID }
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
														...teamMemberItems,
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
														teamMemberItems:
															arrayCopy,
													} );
												} }
											></i>
										</Tooltip>
									</div>
								) }
								{ teamMemberItem.imageURL && (
									<img
										width={ teamMemberItem.imageWidth }
										height={ teamMemberItem.imageHeight }
										src={ teamMemberItem.imageURL }
										alt={ teamMemberItem.imageAlt }
									/>
								) }
							</div>
							{ ! teamMemberItem.imageURL && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ ( item ) => {
											const arrayCopy = [
												...teamMemberItems,
											];
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
												teamMemberItems: arrayCopy,
											} );
										} }
										allowedTypes={ [ 'image' ] }
										value={ teamMemberItem.imageURL }
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
					<div
						className="team-member-content-wrapper"
						style={ teamMemberContentStyle }
					>
						{ showTeamMemberName && (
							<RichText
								tagName="h3"
								placeholder={ __(
									'Enter Team Member Name',
									'advance-gb-learning'
								) }
								className="team-member-name"
								value={ teamMemberItem.title }
								onChange={ ( value ) => {
									const arrayCopy = [ ...teamMemberItems ];
									arrayCopy[ index ].title = value;
									setAttributes( {
										teamMemberItems: arrayCopy,
									} );
								} }
								style={ headingStyle }
							/>
						) }
						{ showTeamMemberDescription && (
							<RichText
								tagName="p"
								placeholder={ __(
									'Enter Team Member Description',
									'advance-gb-learning'
								) }
								className="team-member-description"
								value={ teamMemberItem.description }
								onChange={ ( value ) => {
									const arrayCopy = [ ...teamMemberItems ];
									arrayCopy[ index ].description = value;
									setAttributes( {
										teamMemberItems: arrayCopy,
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
											<RangeControl
												label={ __(
													'Columns',
													'advance-gb-learning'
												) }
												value={ columns }
												onChange={ ( value ) => {
													setAttributes( {
														columns: value,
													} );
												} }
												min={ 2 }
												max={ 3 }
											/>
											<ToggleControl
												label={ __(
													'Show Team Member Image',
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
													'Show Team Member Name',
													'advance-gb-learning'
												) }
												checked={ showTeamMemberName }
												onChange={ (
													showTeamMemberName
												) =>
													setAttributes( {
														showTeamMemberName,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Show Team Member Description',
													'advance-gb-learning'
												) }
												checked={
													showTeamMemberDescription
												}
												onChange={ (
													showTeamMemberDescription
												) =>
													setAttributes( {
														showTeamMemberDescription,
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
														value: teamMemberNameColor,
														onChange: ( value ) => {
															setAttributes( {
																teamMemberNameColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Team Member Name Color',
															'advance-gb-learning'
														),
													},
													{
														value: teamMemberDescriptionColor,
														onChange: ( value ) => {
															setAttributes( {
																teamMemberDescriptionColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Team Member Description Color',
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
					</div>
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
							text={ __( 'Add New Item', 'advance-gb-learning' ) }
						>
							<i
								className="add-new-item dashicons dashicons-plus"
								aria-hidden="true"
							></i>
						</Tooltip>
					</div>
				</div>
			</div>
		</>
	);
}
