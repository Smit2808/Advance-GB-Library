/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save( props ) {
	const { attributes } = props;
	const { blockID, heading, description, button } = attributes;
	const classes = 'hero-block';
	const blockProps = useBlockProps.save( {
		className: classes,
		id: blockID,
	} );
	return (
		<div { ...blockProps }>
			<div className="container">
				<div className="hero-block__content">
					<RichText.Content
						tagName="h1"
						value={ heading }
						className="hero-block__heading"
					/>
					<RichText.Content
						tagName="p"
						value={ description }
						className="hero-block__description"
					/>
					<div className="btn-wrap hero-block__button">
						<RichText.Content
							tagName="p"
							value={ button }
							className="btn btn-primary"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
