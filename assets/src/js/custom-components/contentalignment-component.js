import { Dashicon } from '@wordpress/components';

const ContentAlignmentComponent = ( {
	attributeKey = 'contentAlignment',
	attributeValue = {},
	setAttributes,
	componentLabel,
} ) => {
	return (
		<div className="setting-row">
			<label htmlFor={ `${ attributeKey }-image` }>
				{ componentLabel ? componentLabel : 'Content alignment' }
			</label>
			<div className="inspector-field-button-list inspector-field-button-list-fluid">
				<button
					className={ `inspector-button ${
						'left' === attributeValue ? 'active' : ''
					}` }
					onClick={ () =>
						setAttributes( {
							[ attributeKey ]: 'left',
						} )
					}
				>
					<Dashicon icon="align-pull-left" />
				</button>
				<button
					className={ `inspector-button ${
						'center' === attributeValue ? 'active' : ''
					}` }
					onClick={ () =>
						setAttributes( {
							[ attributeKey ]: 'center',
						} )
					}
				>
					<Dashicon icon="align-wide" />
				</button>
				<button
					className={ `inspector-button ${
						'right' === attributeValue ? 'active' : ''
					}` }
					onClick={ () =>
						setAttributes( {
							[ attributeKey ]: 'right',
						} )
					}
				>
					<Dashicon icon="align-pull-right" />
				</button>
			</div>
		</div>
	);
};

export default ContentAlignmentComponent;
