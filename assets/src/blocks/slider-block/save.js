/* eslint-disable no-unused-expressions */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( props ) {
	const { attributes, className } = props;
	const {
		blockID,
		mainHeading,
		showMainHeading,
		bgColor,
		titleColor,
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
		mainHeadingColor,
		mainHeadingContentAlignment,
		titleTag,
	} = attributes;

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

	const teamMemberContentStyle = {};
	contentAlignment && ( teamMemberContentStyle.textAlign = contentAlignment );
	const classes = classnames( className, 'slider-section' );

	return (
		<div
			{ ...useBlockProps.save( {
				className: classes,
				id: blockID,
				style: blockStyle,
			} ) }
		>
			<div className="container">
				{ showMainHeading && mainHeading && (
					<RichText.Content
						tagName={ titleTag }
						value={ mainHeading }
						className="slider-section__main-heading"
						style={ mainHeadingStyle }
					/>
				) }
				<div className="slider-section__wrapper">
					<div
						className="slider-section__slider-main"
						data-slide-autoplay={ autoplay }
						data-slide-arrows={ arrows }
						data-slide-dots={ dots }
						data-slide-loop={ loopSlide }
					>
						{ sliderItems.map( ( sliderItem, index ) => {
							return (
								<div
									className="slider-section__slide-item"
									key={ index }
								>
									<div className="image-wrapper">
										{ sliderItem.imageURL && showImage && (
											<img
												width={ sliderItem.imageWidth }
												height={
													sliderItem.imageHeight
												}
												src={ sliderItem.imageURL }
												alt={ sliderItem.imageAlt }
											/>
										) }
									</div>
									<div
										className="content-wrapper"
										style={ teamMemberContentStyle }
									>
										{ showTitle && sliderItem.title && (
											<RichText.Content
												tagName="h3"
												className="content-wrapper__title"
												value={ sliderItem.title }
												style={ headingStyle }
											/>
										) }
										{ showDescription &&
											sliderItem.description && (
												<RichText.Content
													tagName="p"
													className="content-wrapper__description"
													value={
														sliderItem.description
													}
													style={ descStyle }
												/>
											) }
									</div>
								</div>
							);
						} ) }
					</div>
				</div>
			</div>
		</div>
	);
}
