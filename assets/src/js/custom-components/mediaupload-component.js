import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MediaUploadComponent = ( {
	attributeKey = 'backgroundImage',
	attributeValue = {},
	setAttributes,
} ) => {
	return (
		<div className="setting-row business-hero__bg-upload">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ __( 'Background Image', 'anitian' ) }
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
									{ __( 'Select Image', 'anitian' ) }
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
										{ __( 'Replace Image', 'anitian' ) }
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
					{ __( 'Remove Image', 'anitian' ) }
				</Button>
			) : null }
		</div>
	);
};

export default MediaUploadComponent;
