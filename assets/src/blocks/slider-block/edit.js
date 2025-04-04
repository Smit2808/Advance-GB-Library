/* eslint-disable import/no-extraneous-dependencies */
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
import { useEffect, useRef } from '@wordpress/element';
import classnames from 'classnames';
import './editor.scss';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ContentAlignmentComponent from '../../js/custom-components/contentalignment-component';
import TitleTagComponent from '../../js/custom-components/titletag-component';

export default function Edit( props ) {
	const { attributes, setAttributes, className, clientId } = props;
	const {
		blockID,
		mainHeading,
		showMainHeading,
		bgColor,
		contentBgColor,
		titleColor,
		mainHeadingColor,
		descriptionColor,
		showTitle,
		showImage,
		showDescription,
		sliderItems,
		contentAlignment,
		autoplay,
		arrows,
		dots,
		loopSlide,
		mainHeadingContentAlignment,
		titleTag,
	} = attributes;

	/* Slider Items Action */
	const sliderRef = useRef( null );

	if ( ! blockID ) {
		setAttributes( {
			blockID: `slider-section-${ clientId }`,
		} );
	}

	const blockStyle = {};
	bgColor && ( blockStyle.backgroundColor = bgColor );

	const mainHeadingStyle = {};
	mainHeadingColor && ( mainHeadingStyle.color = mainHeadingColor );
	mainHeadingContentAlignment &&
		( mainHeadingStyle.textAlign = mainHeadingContentAlignment );

	const headingStyle = {};
	titleColor && ( headingStyle.color = titleColor );

	const descStyle = {};
	descriptionColor && ( descStyle.color = descriptionColor );

	const contentStyle = {};
	contentAlignment && ( contentStyle.textAlign = contentAlignment );
	contentBgColor && ( contentStyle.backgroundColor = contentBgColor );

	const classes = classnames( className, 'slider-section' );
	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
	} );

	useEffect( () => {
		if ( 0 === sliderItems.length ) {
			setAttributes( {
				sliderItems: [
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
		const arrayCopy = [ ...sliderItems ];
		arrayCopy[ oldIndex ] = sliderItems[ newIndex ];
		arrayCopy[ newIndex ] = sliderItems[ oldIndex ];

		setAttributes( { sliderItems: arrayCopy } );
	};

	const addNewItem = () => {
		let itemsArr = sliderItems;
		const newObject = [
			...sliderItems,
			{
				index: sliderItems.length,
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
			sliderItems: itemsArr,
		} );
		setTimeout( () => {
			sliderRef.current.slickGoTo( sliderItems.length );
		}, 10 );
	};

	/* Slider Settings */
	const settings = {
		autoplay: false,
		arrows,
		dots,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	const sliderItemDivs = sliderItems.map( ( sliderItem, index ) => {
		return (
			<div className="slider-section__slide-item" key={ index }>
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
						{ index + 1 < sliderItems.length && (
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
					{ 1 < sliderItems.length && (
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
										const arrayCopy = [ ...sliderItems ];
										arrayCopy.splice( index, 1 );
										setAttributes( {
											sliderItems: arrayCopy,
										} );
									}
								} }
							></i>
						</Tooltip>
					) }
				</div>
				{ showImage && (
					<div className="image-wrapper">
						<div className="advance-gb-learning-block-control image-preview image-controle-visible-hover">
							{ sliderItem.imageURL && (
								<div
									className={ `image-controls small-icons icon-bottom-left-fixed` }
								>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ ( item ) => {
												const arrayCopy = [
													...sliderItems,
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
													sliderItems: arrayCopy,
												} );
											} }
											allowedTypes={ [ 'image' ] }
											value={ sliderItem.imageID }
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
													...sliderItems,
												];
												arrayCopy[ index ].imageID = '';
												arrayCopy[ index ].imageURL =
													'';
												arrayCopy[ index ].imageAlt =
													'';
												arrayCopy[ index ].imageWidth =
													'';
												arrayCopy[ index ].imageHeight =
													'';
												setAttributes( {
													sliderItems: arrayCopy,
												} );
											} }
										></i>
									</Tooltip>
								</div>
							) }
							{ sliderItem.imageURL && (
								<img
									width={ sliderItem.imageWidth }
									height={ sliderItem.imageHeight }
									src={ sliderItem.imageURL }
									alt={ sliderItem.imageAlt }
								/>
							) }
						</div>
						{ ! sliderItem.imageURL && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( item ) => {
										const arrayCopy = [ ...sliderItems ];
										arrayCopy[ index ].imageID = item.id;
										arrayCopy[ index ].imageURL = item.url;
										arrayCopy[ index ].imageAlt = item.alt;
										arrayCopy[ index ].imageWidth =
											item.width;
										arrayCopy[ index ].imageHeight =
											item.height;
										setAttributes( {
											sliderItems: arrayCopy,
										} );
									} }
									allowedTypes={ [ 'image' ] }
									value={ sliderItem.imageURL }
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
				<div className="content-wrapper" style={ contentStyle }>
					{ showTitle && (
						<RichText
							tagName="h3"
							placeholder={ __(
								'Enter Title',
								'advance-gb-learning'
							) }
							className="content-wrapper__title"
							value={ sliderItem.title }
							onChange={ ( value ) => {
								const arrayCopy = [ ...sliderItems ];
								arrayCopy[ index ].title = value;
								setAttributes( {
									sliderItems: arrayCopy,
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
							className="content-wrapper__description"
							value={ sliderItem.description }
							onChange={ ( value ) => {
								const arrayCopy = [ ...sliderItems ];
								arrayCopy[ index ].description = value;
								setAttributes( {
									sliderItems: arrayCopy,
								} );
							} }
							style={ descStyle }
						/>
					) }
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
													'Show Main Heading',
													'advance-gb-learning'
												) }
												checked={ showMainHeading }
												onChange={ (
													showMainHeading
												) =>
													setAttributes( {
														showMainHeading,
													} )
												}
											/>
											{ showMainHeading && (
												<TitleTagComponent
													attributeKey="titleTag"
													attributeValue={ titleTag }
													setAttributes={
														setAttributes
													}
												/>
											) }
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
													'Show Title',
													'advance-gb-learning'
												) }
												checked={ showTitle }
												onChange={ ( showTitle ) =>
													setAttributes( {
														showTitle,
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
											<ContentAlignmentComponent
												attributeKey="mainHeadingContentAlignment"
												attributeValue={
													mainHeadingContentAlignment
												}
												setAttributes={ setAttributes }
												componentLabel="Main Heading Content Alignment"
											/>
											<ContentAlignmentComponent
												attributeKey="contentAlignment"
												attributeValue={
													contentAlignment
												}
												setAttributes={ setAttributes }
												componentLabel="Slider Content Alignment"
											/>
										</PanelBody>
										<PanelBody
											title={ __(
												'Slider Settings',
												'advance-gb-library'
											) }
											initialOpen={ false }
										>
											<ToggleControl
												label={ __(
													'Autoplay',
													'advance-gb-library'
												) }
												checked={ autoplay }
												onChange={ ( value ) =>
													setAttributes( {
														autoplay: value,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Arrows',
													'advance-gb-library'
												) }
												checked={ arrows }
												onChange={ ( value ) =>
													setAttributes( {
														arrows: value,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Dots',
													'advance-gb-library'
												) }
												checked={ dots }
												onChange={ ( value ) =>
													setAttributes( {
														dots: value,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Loop',
													'advance-gb-library'
												) }
												checked={ loopSlide }
												onChange={ ( value ) =>
													setAttributes( {
														loopSlide: value,
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
														value: mainHeadingColor,
														onChange: ( value ) => {
															setAttributes( {
																mainHeadingColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Main Heading Color',
															'advance-gb-learning'
														),
													},
													{
														value: contentBgColor,
														onChange: ( value ) => {
															setAttributes( {
																contentBgColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Content Background Color',
															'advance-gb-learning'
														),
													},
													{
														value: titleColor,
														onChange: ( value ) => {
															setAttributes( {
																titleColor:
																	value ===
																	undefined
																		? ''
																		: value,
															} );
														},
														label: __(
															'Title Color',
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
					{ showMainHeading && (
						<RichText
							tagName={ titleTag }
							placeholder={ __(
								'Enter Main Heading',
								'advance-gb-library'
							) }
							onChange={ ( value ) =>
								setAttributes( { mainHeading: value } )
							}
							value={ mainHeading }
							className="slider-section__main-heading"
							style={ mainHeadingStyle }
						/>
					) }
					<div className="slider-section__wrapper">
						<Slider
							ref={ sliderRef }
							{ ...settings }
							className="slider-section__slider-main"
						>
							{ sliderItemDivs }
						</Slider>
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
