/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import ServerSideRender from '@wordpress/server-side-render';

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	TextControl,
	SelectControl,
	TabPanel,
	Dashicon,
} from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';
import './editor.scss';
import Select, { components } from 'react-select';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import metadata from './block.json';

function arrayMove( array, from, to ) {
	array = array.slice();
	array.splice(
		to < 0 ? array.length + to : to,
		0,
		array.splice( from, 1 )[ 0 ]
	);
	return array;
}
const SortableMultiValue = SortableElement( ( props ) => {
	const onMouseDown = ( e ) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const innerProps = { onMouseDown };
	return <components.MultiValue { ...props } innerProps={ innerProps } />;
} );
const SortableSelect = SortableContainer( Select );

export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
	const {
		heading,
		currentPostID,
		displayTitle,
		numberOfPosts,
		blockID,
		displayReadmoreBtn,
		readMoreBtnText,
		selectedCategory,
		selectedTag,
		titleColor,
		headingColor,
		bgColor,
		contentBgColor,
		btnBgColor,
		btnTextColor,
	} = attributes;

	const [ pageList, setpageList ] = useState( [] );

	const [ termTypesList, setTermTypesList ] = useState( [] );

	const [ postTagsList, setPostTagsList ] = useState( [] );

	useEffect( () => {
		wp.apiFetch( {
			path:
				'agb_api/request/all_posts?post_category=' +
				selectedCategory +
				'&post_tag=' +
				selectedTag,
		} ).then( ( posts ) => {
			const pageOption = [];
			posts.forEach( function ( item ) {
				let postTitle = item.title;
				postTitle = postTitle.replace( /&#038;/g, '&' );
				postTitle = postTitle.replace( /&#8217;/g, "'" );
				postTitle = postTitle.replace( /&#8230;/g, '...' );
				postTitle = postTitle.replace( /&#8216;/g, "'" );
				postTitle = postTitle.replace( /&#8220;/g, '"' );
				postTitle = postTitle.replace( /&#8221;/g, '"' );
				postTitle = postTitle.replace( /&#8211;/g, '-' );
				postTitle = postTitle.replace( /&amp;/g, '&' );
				pageOption.push( {
					label: postTitle,
					value: item.id,
				} );
			} );
			setTimeout(
				function () {
					setpageList( pageOption );
				}.bind( this ),
				600
			);
		} );
	}, [ selectedCategory, selectedTag ] );

	useEffect( () => {
		wp.apiFetch( {
			path:
				'agb_api/request/all_posts?post_category=' +
				selectedCategory +
				'&post_tag=' +
				selectedTag,
		} ).then( ( pages ) => {
			const pageOption = [];
			pages.forEach( function ( item ) {
				let postTitle = item.title;
				postTitle = postTitle.replace( /&#038;/g, '&' );
				postTitle = postTitle.replace( /&#8217;/g, "'" );
				postTitle = postTitle.replace( /&#8230;/g, '...' );
				postTitle = postTitle.replace( /&#8216;/g, "'" );
				postTitle = postTitle.replace( /&#8220;/g, '"' );
				postTitle = postTitle.replace( /&#8221;/g, '"' );
				postTitle = postTitle.replace( /&#8211;/g, '-' );
				postTitle = postTitle.replace( /&amp;/g, '&' );
				pageOption.push( {
					label: postTitle,
					value: item.id,
				} );
			} );

			setTimeout(
				function () {
					setpageList( pageOption );
				}.bind( this ),
				600
			);
		} );

		wp.apiFetch( { path: '/agb_api/request/all_post_categories' } ).then(
			( termTypes ) => {
				const termTypeOptions = [];
				termTypeOptions.push( {
					label: __( 'Select Category', 'advance-gb-learning' ),
					value: '',
				} );
				termTypes.forEach( function ( item ) {
					let catTitle = item.name;
					catTitle = catTitle.replace( /&#038;/g, '&' );
					catTitle = catTitle.replace( /&#8217;/g, "'" );
					catTitle = catTitle.replace( /&#8230;/g, '...' );
					catTitle = catTitle.replace( /&#8216;/g, "'" );
					catTitle = catTitle.replace( /&#8220;/g, '"' );
					catTitle = catTitle.replace( /&#8221;/g, '"' );
					catTitle = catTitle.replace( /&#8211;/g, '-' );
					catTitle = catTitle.replace( /&amp;/g, '&' );
					termTypeOptions.push( {
						label: catTitle,
						value: item.slug,
					} );
				} );

				setTimeout(
					function () {
						setTermTypesList( termTypeOptions );
					}.bind( this ),
					600
				);
			}
		);

		wp.apiFetch( { path: '/agb_api/request/all_post_tags' } ).then(
			( postTags ) => {
				const postTagsOption = [];
				postTagsOption.push( {
					label: __( 'Select Tag', 'advance-gb-learning' ),
					value: '',
				} );
				postTags.forEach( function ( item ) {
					postTagsOption.push( {
						label: item.name,
						value: item.slug,
					} );
				} );

				setTimeout(
					function () {
						setPostTagsList( postTagsOption );
					}.bind( this ),
					600
				);
			}
		);
	}, [] );

	useEffect( () => {
		setAttributes( {
			blockID: `posts-listing-block-unique-${ clientId }`,
		} );
	}, [ clientId ] );

	const onSortEnd = ( { oldIndex, newIndex } ) => {
		const newValue = arrayMove(
			JSON.parse( currentPostID ),
			oldIndex,
			newIndex
		);
		setAttributes( { currentPostID: JSON.stringify( newValue ) } );
	};
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
											initialOpen={ true }
										>
											<SelectControl
												label={ __(
													'Select Post Category',
													'advance-gb-learning'
												) }
												value={ selectedCategory }
												options={ termTypesList }
												onChange={ ( value ) => {
													setAttributes( {
														selectedCategory: value,
														currentPostID: null,
													} );
												} }
											/>
											<SelectControl
												label={ __(
													'Select Post Tag',
													'advance-gb-learning'
												) }
												value={ selectedTag }
												options={ postTagsList }
												onChange={ ( value ) => {
													setAttributes( {
														selectedTag: value,
													} );
												} }
											/>
											<p>
												<strong>
													{ __(
														'Hint:',
														'advance-gb-learning'
													) }
												</strong>
												{ __(
													' When selecting both the post tag and category, the system will display posts that have the same tag and category that we selected.',
													'advance-gb-learning'
												) }
											</p>
											<label htmlFor="posts">
												{ __(
													'Select Posts',
													'advance-gb-learning'
												) }
											</label>
											<SortableSelect
												onSortEnd={ onSortEnd }
												isFixed={ false }
												distance={ 4 }
												placeholder={ __(
													'Select Posts',
													'advance-gb-learning'
												) }
												getHelperDimensions={ ( {
													node,
												} ) =>
													node.getBoundingClientRect()
												}
												isMulti
												options={ pageList }
												value={ JSON.parse(
													currentPostID
												) }
												onChange={ ( currentPostID ) =>
													setAttributes( {
														currentPostID:
															JSON.stringify(
																currentPostID
															),
													} )
												}
												components={ {
													MultiValue:
														SortableMultiValue,
												} }
												closeMenuOnSelect={ false }
												className="components-base-control ant-select"
											/>
											<RangeControl
												label={ __(
													'Number of Posts to Display',
													'advance-gb-learning'
												) }
												value={ numberOfPosts }
												onChange={ ( value ) =>
													setAttributes( {
														numberOfPosts: value,
													} )
												}
												min={ 1 }
												max={ 30 }
											/>
											<ToggleControl
												label={ __(
													'Show Heading',
													'advance-gb-learning'
												) }
												checked={ displayTitle }
												onChange={ ( displayTitle ) =>
													setAttributes( {
														displayTitle,
													} )
												}
											/>
											{ displayTitle && (
												<>
													<TextControl
														label={ __(
															'Enter Heading Here',
															'advance-gb-learning'
														) }
														placeholder={ __(
															'Enter Heading',
															'advance-gb-learning'
														) }
														value={ heading }
														onChange={ (
															heading
														) =>
															setAttributes( {
																heading,
															} )
														}
													/>
												</>
											) }
											<ToggleControl
												label={ __(
													'Show Read More Button',
													'advance-gb-learning'
												) }
												checked={ displayReadmoreBtn }
												onChange={ (
													displayReadmoreBtn
												) =>
													setAttributes( {
														displayReadmoreBtn,
													} )
												}
											/>
											{ displayReadmoreBtn && (
												<TextControl
													label={ __(
														'Readmore Button Text',
														'advance-gb-learning'
													) }
													placeholder={ __(
														'Enter Readmore Button Text',
														'advance-gb-learning'
													) }
													value={ readMoreBtnText }
													onChange={ (
														readMoreBtnText
													) =>
														setAttributes( {
															readMoreBtnText,
														} )
													}
												/>
											) }
										</PanelBody>
									</>
								) : (
									<>
										<PanelBody
											title={ __(
												'Color Settings',
												'advance-gb-learning'
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
															'advance-gb-learning'
														),
													},
													{
														value: headingColor,
														onChange: ( value ) => {
															setAttributes( {
																headingColor:
																	value,
															} );
														},
														label: __(
															'Heading Color',
															'advance-gb-learning'
														),
													},
													{
														value: contentBgColor,
														onChange: ( value ) => {
															setAttributes( {
																contentBgColor:
																	value,
															} );
														},
														label: __(
															'Post Card Background Color',
															'advance-gb-learning'
														),
													},
													{
														value: titleColor,
														onChange: ( value ) => {
															setAttributes( {
																titleColor:
																	value,
															} );
														},
														label: __(
															'Post Title Color',
															'advance-gb-learning'
														),
													},
													{
														value: btnBgColor,
														onChange: ( value ) => {
															setAttributes( {
																btnBgColor:
																	value,
															} );
														},
														label: __(
															'Button Background Color',
															'advance-gb-learning'
														),
													},
													{
														value: btnTextColor,
														onChange: ( value ) => {
															setAttributes( {
																btnTextColor:
																	value,
															} );
														},
														label: __(
															'Button Text Color',
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
			<ServerSideRender
				block={ metadata.name }
				attributes={ {
					heading,
					currentPostID,
					displayTitle,
					numberOfPosts,
					blockID,
					displayReadmoreBtn,
					readMoreBtnText,
					selectedCategory,
					selectedTag,
					titleColor,
					headingColor,
					bgColor,
					contentBgColor,
					btnBgColor,
					btnTextColor,
				} }
			/>
		</>
	);
}
