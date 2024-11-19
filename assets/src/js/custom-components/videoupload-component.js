/* eslint-disable @wordpress/i18n-no-variables */
/* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	Button,
	SelectControl,
	PanelRow,
	TextControl,
	Tooltip,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const VideoUploadComponent = ( {
	attributeKey = 'video',
	attributeValue = '',
	vidTypeAttrKey = 'vidType',
	vidTypeAttrValue = '',
	vimeoLinkAttrKey = 'vimeoLink',
	vimeoLinkAttrValue = '',
	youtubeLinkAttrKey = 'youtubeLink',
	youtubeLinkAttrValue = '',
	attributeWidth = '900',
	attributeHeight = '506',
	aspectRatio = '16:9',
	setAttributes,
} ) => {
	let videoTooltip = __( 'Upload Video', 'advance-gb-library' );
	if ( attributeWidth && attributeHeight ) {
		videoTooltip = __(
			`Minimum upload size: ${ attributeWidth }x${ attributeHeight } px. Maintain a ${ aspectRatio } aspect ratio.`,
			'advance-gb-library'
		);
	}
	return (
		<div className="setting-row">
			<SelectControl
				label={ __( 'Select Video Type', 'advance-gb-library' ) }
				value={ vidTypeAttrValue }
				options={ [
					{
						label: __( 'Upload Video', 'advance-gb-library' ),
						value: 'media-upload',
					},
					{
						label: __( 'Youtube Video', 'advance-gb-library' ),
						value: 'youtube',
					},
					{
						label: __( 'Vimeo Video', 'advance-gb-library' ),
						value: 'vimeo',
					},
				] }
				onChange={ ( value ) =>
					setAttributes( {
						[ vidTypeAttrKey ]: value,
					} )
				}
			/>
			{ vidTypeAttrValue && vidTypeAttrValue === 'media-upload' && (
				<>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( video ) =>
								setAttributes( {
									[ attributeKey ]: video.url
										? video.url
										: '',
								} )
							}
							type="video"
							allowedTypes={ [ 'video' ] }
							value={ attributeValue }
							render={ ( { open } ) => (
								<>
									{ attributeValue === '' ? (
										<Tooltip text={ videoTooltip }>
											<Button
												className={
													attributeValue
														? 'image-button'
														: 'button button-large'
												}
												onClick={ open }
											>
												{ __(
													'Upload Video',
													'advance-gb-library'
												) }
											</Button>
										</Tooltip>
									) : (
										<>
											<div className="video-preview">
												<video
													src={ attributeValue }
													autoPlay=""
													muted=""
													loop=""
												/>
											</div>
											<div className="video-action-buttons">
												<Tooltip text={ videoTooltip }>
													<Button
														className={ 'button' }
														onClick={ open }
													>
														{ __(
															'Replace Video ',
															'advance-gb-library'
														) }
													</Button>
												</Tooltip>
												{ attributeValue && (
													<>
														<Button
															onClick={ () =>
																setAttributes( {
																	[ attributeKey ]:
																		'',
																} )
															}
															className="button remove-button is-primary"
														>
															{ __(
																'Remove Video',
																'advance-gb-library'
															) }
														</Button>
													</>
												) }
											</div>
										</>
									) }
								</>
							) }
						/>
					</MediaUploadCheck>
				</>
			) }
			{ vidTypeAttrValue && vidTypeAttrValue === 'youtube' && (
				<PanelRow>
					<TextControl
						label={ __(
							'Enter youtube video link',
							'advance-gb-library'
						) }
						value={ youtubeLinkAttrValue }
						onChange={ ( value ) =>
							setAttributes( {
								[ youtubeLinkAttrKey ]: value,
							} )
						}
						help={ __(
							'It is recommended to use https://www.youtube-nocookie.com/embed/ link for example https://www.youtube-nocookie.com/embed/coGyUE4cz10.',
							'advance-gb-library'
						) }
					/>
				</PanelRow>
			) }
			{ vidTypeAttrValue && vidTypeAttrValue === 'vimeo' && (
				<PanelRow>
					<TextControl
						label={ __(
							'Enter vimeo video link',
							'advance-gb-library'
						) }
						value={ vimeoLinkAttrValue }
						onChange={ ( value ) =>
							setAttributes( {
								[ vimeoLinkAttrKey ]: value,
							} )
						}
						help={ __(
							'It is recommended to use https://player.vimeo.com/video/video_ID/ link for example https://player.vimeo.com/video/347119375.',
							'advance-gb-library'
						) }
					/>
				</PanelRow>
			) }
		</div>
	);
};

export default VideoUploadComponent;
