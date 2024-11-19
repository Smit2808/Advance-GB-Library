import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MediaUploadComponent = ( {
	attributeKey = 'backgroundImage',
	attributeValue = {},
	setAttributes,
} ) => {
	return (
		<div className="setting-row bg-image-uploader">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ __( 'Background Image', 'advance-gb-library' ) }
			</label>
			<MediaUpload
				onSelect={ ( newImg ) => {
					const newImage = {};
					newImage.id = newImg.id;
					newImage.url = newImg.sizes.full.url
						? newImg.sizes.full.url
						: '';
					newImage.alt = newImg.alt;
					newImage.width = newImg.width;
					newImage.height = newImg.height;
					setAttributes( {
						[ attributeKey ]: newImage,
					} );
				} }
				allowedTypes={ [ 'image' ] }
				value={ attributeValue.id }
				render={ ( { open } ) => (
					<>
						{ ! attributeValue.url ? (
							<Button
								className={
									'components-button editor-post-featured-image__toggle'
								}
								onClick={ open }
							>
								{ __( 'Upload Image', 'advance-gb-library' ) }
							</Button>
						) : (
							<>
								<div className="image-preview">
									<img
										src={ attributeValue.url }
										alt={ attributeValue.alt }
									/>
									<div className="media-action-buttons">
										<Button
											className={
												'components-button editor-post-featured-image__action'
											}
											onClick={ open }
										>
											{ __(
												'Replace',
												'advance-gb-library'
											) }
										</Button>
										{ attributeValue.url ? (
											<Button
												className={
													'components-button editor-post-featured-image__action'
												}
												onClick={ () =>
													setAttributes( {
														[ attributeKey ]: {},
													} )
												}
											>
												{ __(
													'Remove',
													'advance-gb-library'
												) }
											</Button>
										) : null }
									</div>
								</div>
							</>
						) }
					</>
				) }
			/>
		</div>
	);
};

export default MediaUploadComponent;
