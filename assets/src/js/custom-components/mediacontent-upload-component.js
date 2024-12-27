/* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
/* eslint-disable @wordpress/i18n-no-variables */
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MediaContentUploadComponent = ( {
	attributeKey = 'attributeValue',
	attributeValue = {},
	attributeWidth,
	attributeHeight,
	setAttributes,
} ) => {
	let imageTooltip = __( 'Upload Image', 'advance-gb-library' );
	if ( attributeWidth && attributeHeight ) {
		imageTooltip = __(
			`Upload Image of ${ attributeWidth }x${ attributeHeight } px.`,
			'advance-gb-library'
		);
	}
	return (
		<div className="setting-row content-image-uploader">
			{ ! attributeValue.url && (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( image ) => {
							const newImage = {};
							newImage.id = image.id;
							newImage.url = image.url;
							newImage.url = image.sizes.full.url
								? image.sizes.full.url
								: '';
							newImage.alt = image.alt;
							newImage.width = image.width;
							newImage.height = image.height;
							setAttributes( {
								[ attributeKey ]: newImage,
							} );
						} }
						allowedTypes={ [ 'image' ] }
						value={ attributeValue.id }
						render={ ( { open } ) => (
							<div className="image-wrap text-center u-margin-b10">
								<Tooltip text={ imageTooltip }>
									<Button
										className="button icon-button"
										onClick={ open }
									>
										<i className="dashicons dashicons-upload"></i>
									</Button>
								</Tooltip>
							</div>
						) }
					/>
				</MediaUploadCheck>
			) }
			{ attributeValue.url && (
				<div className="image-preview image-controle-visible-hover">
					<div className="image-controls small-icons icon-center-fixed">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( image ) => {
									const newImage = {};
									newImage.id = image.id;
									newImage.url = image.sizes.full.url
										? image.sizes.full.url
										: '';
									newImage.alt = image.alt;
									newImage.width = image.width;
									newImage.height = image.height;
									setAttributes( {
										[ attributeKey ]: newImage,
									} );
								} }
								allowedTypes={ [ 'image' ] }
								value={ attributeValue.id }
								render={ ( { open } ) => {
									return (
										<Tooltip
											text={ __(
												'Edit Image',
												'advance-gb-library'
											) }
										>
											<i
												className="dashicons dashicons-edit edit-image"
												onClick={ open }
												aria-hidden="true"
											></i>
										</Tooltip>
									);
								} }
							/>
						</MediaUploadCheck>
						<Tooltip
							text={ __( 'Remove Image', 'advance-gb-library' ) }
						>
							<i
								className="dashicons dashicons-no-alt remove-image"
								onClick={ () =>
									setAttributes( { [ attributeKey ]: {} } )
								}
								aria-hidden="true"
							></i>
						</Tooltip>
					</div>
					<img
						src={ attributeValue.url }
						alt={ attributeValue.alt }
						width={ attributeValue.width }
						height={ attributeValue.height }
					/>
				</div>
			) }
		</div>
	);
};

export default MediaContentUploadComponent;
