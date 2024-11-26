/* eslint-disable no-unused-expressions */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( props ) {
	const { attributes, className } = props;
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

	const blockStyle = {};
	bgColor && ( blockStyle.backgroundColor = bgColor );

	const headingStyle = {};
	headingColor && ( headingStyle.color = headingColor );

	const descStyle = {};
	descriptionColor && ( descStyle.color = descriptionColor );

	const classes = classnames( className, 'cards-section' );

	return (
		<div
			{ ...useBlockProps.save( {
				className: classes,
				id: blockID,
				style: blockStyle,
			} ) }
		>
			<div className="container">
				<div className="cards-wrapper">
					{ cardItems.map( ( cardItem, index ) => {
						return (
							<div
								className="card-wrapper"
								key={ index }
								data-aos="zoom-in"
								data-aos-duration="1000"
								data-aos-offset="100"
							>
								<div className="card-inner-wrapper">
									<div className="card-image-wrapper">
										{ cardItem.imageURL && showImage && (
											<img
												width={ cardItem.imageWidth }
												height={ cardItem.imageHeight }
												src={ cardItem.imageURL }
												alt={ cardItem.imageAlt }
											/>
										) }
									</div>
									<div className="card-content-wrapper">
										{ showHeading && cardItem.title && (
											<RichText.Content
												tagName="h3"
												className="title"
												value={ cardItem.title }
												style={ headingStyle }
											/>
										) }
										{ showDescription &&
											cardItem.description && (
												<RichText.Content
													tagName="p"
													className="description"
													value={
														cardItem.description
													}
													style={ descStyle }
												/>
											) }
									</div>
								</div>
							</div>
						);
					} ) }
				</div>
			</div>
		</div>
	);
}
