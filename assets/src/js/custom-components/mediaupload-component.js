import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MediaUploadComponent = ( {
	attributeKey = 'backgroundImage',
	attributeValue = {},
	setAttributes,
} ) => {
	return (
		<div className="setting-row">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ __( 'Background Image', 'advance-gb-library' ) }
			</label>
			<MediaUploadCheck>
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
					value={ attributeValue }
					render={ ( { open } ) => (
						<>
							{ ! attributeValue.url ? (
								<Button
									className={
										attributeValue.url
											? 'image-button'
											: 'button button-large'
									}
									onClick={ open }
								>
									{ __(
										'Select Image',
										'advance-gb-library'
									) }
								</Button>
							) : (
								<>
									<div className="image-preview">
										<img
											src={ attributeValue.url }
											alt={ attributeValue.alt }
										/>
									</div>
									<Button
										className={ 'button' }
										onClick={ open }
									>
										{ __(
											'Replace Image',
											'advance-gb-library'
										) }
									</Button>
								</>
							) }
						</>
					) }
				/>
			</MediaUploadCheck>
			{ attributeValue.url ? (
				<Button
					className="is-link is-destructive"
					onClick={ () => setAttributes( { [ attributeKey ]: {} } ) }
				>
					{ __( 'Remove Image', 'advance-gb-library' ) }
				</Button>
			) : null }
		</div>
	);
};

export default MediaUploadComponent;
