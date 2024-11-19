/* eslint-disable no-unused-expressions */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function Save( props ) {
	const { attributes, className } = props;
	const {
		blockID,
		heading,
		description,
		button,
		backgroundImage,
		bgPosition,
		bgBlendMode,
		contentAlignment,
		titleTag,
		showHeading,
		showDesc,
		showBtn,
		headingColor,
		btnColor,
		btnBgColor,
		contentColor,
		bgColor,
	} = attributes;
	const classes = classnames(
		className,
		'hero-block',
		contentAlignment && 'text-' + contentAlignment
	);
	const blockProps = useBlockProps.save( {
		className: classes,
		id: blockID,
	} );
	const blockStyle = {};
	backgroundImage &&
		backgroundImage.url &&
		( blockStyle.backgroundImage = `url(${ backgroundImage.url })` );
	bgPosition && ( blockStyle.backgroundPosition = bgPosition );
	bgBlendMode && ( blockStyle.backgroundBlendMode = bgBlendMode );
	blockStyle.backgroundColor = bgColor;

	const headingStyle = {};
	headingColor && ( headingStyle.color = headingColor );

	const descStyle = {};
	contentColor && ( descStyle.color = contentColor );

	const btnStyle = {};
	btnColor && ( btnStyle.color = btnColor );
	btnBgColor && ( btnStyle.backgroundColor = btnBgColor );
	return (
		<div { ...blockProps } style={ blockStyle }>
			<div className="container">
				<div className="hero-block__content">
					{ showHeading && heading && (
						<RichText.Content
							tagName={ titleTag }
							value={ heading }
							className="hero-block__heading"
							style={ headingStyle }
						/>
					) }
					{ showDesc && description && (
						<RichText.Content
							tagName="p"
							value={ description }
							className="hero-block__description"
							style={ descStyle }
						/>
					) }
					{ showBtn && button && (
						<div className="btn-wrap hero-block__button">
							<RichText.Content
								tagName="p"
								value={ button }
								className="btn btn-primary"
								style={ btnStyle }
							/>
						</div>
					) }
				</div>
			</div>
		</div>
	);
}
