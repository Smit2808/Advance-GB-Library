/* eslint-disable no-unused-expressions */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

export default function save( { attributes, className } ) {
	const { blockID, bgColor, mediaImage, imgAlign, imgSize } = attributes;

	/* Styles */
	const bgStyle = {};
	bgColor && ( bgStyle.backgroundColor = bgColor );
	/* Styles Ends */

	const classes = classnames( className, 'media-and-content' );

	return (
		<div
			{ ...useBlockProps.save( {
				className: classes,
				id: blockID,
				style: bgStyle,
			} ) }
		>
			<div className="container">
				<div
					className={ `media-and-content__wrapper img-align-${ imgAlign } img-size-${ imgSize }` }
				>
					<div className="media-and-content__media-wrapper">
						<Fragment>
							{ mediaImage.url && (
								<img
									width={ mediaImage.width }
									height={ mediaImage.height }
									src={ mediaImage.url }
									alt={ mediaImage.alt }
								/>
							) }
						</Fragment>
					</div>
					<div className="media-and-content__content-wrapper">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
