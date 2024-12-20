/* eslint-disable no-unused-expressions */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( props ) {
	const { attributes, className } = props;
	const {
		blockID,
		bgColor,
		teamMemberNameColor,
		teamMemberDescriptionColor,
		showTeamMemberName,
		showImage,
		showTeamMemberDescription,
		teamMemberItems,
		contentAlignment,
		columns,
	} = attributes;

	const blockStyle = {};
	bgColor && ( blockStyle.backgroundColor = bgColor );

	const headingStyle = {};
	teamMemberNameColor && ( headingStyle.color = teamMemberNameColor );

	const descStyle = {};
	teamMemberDescriptionColor &&
		( descStyle.color = teamMemberDescriptionColor );

	const teamMemberContentStyle = {};
	contentAlignment && ( teamMemberContentStyle.textAlign = contentAlignment );

	const columnClass = 2 === columns ? 'has-two-columns' : 'has-three-columns';
	const classes = classnames(
		className,
		'team-members-section',
		columnClass
	);

	return (
		<div
			{ ...useBlockProps.save( {
				className: classes,
				id: blockID,
				style: blockStyle,
			} ) }
		>
			<div className="container">
				<div className="team-members-wrapper">
					{ teamMemberItems.map( ( teamMemberItem, index ) => {
						return (
							<div className="team-member-wrapper" key={ index }>
								<div className="team-member-inner-wrapper">
									<div className="team-member-image-wrapper">
										{ teamMemberItem.imageURL &&
											showImage && (
												<img
													width={
														teamMemberItem.imageWidth
													}
													height={
														teamMemberItem.imageHeight
													}
													src={
														teamMemberItem.imageURL
													}
													alt={
														teamMemberItem.imageAlt
													}
												/>
											) }
									</div>
									<div
										className="team-member-content-wrapper"
										style={ teamMemberContentStyle }
									>
										{ showTeamMemberName &&
											teamMemberItem.title && (
												<RichText.Content
													tagName="h3"
													className="team-member-name"
													value={
														teamMemberItem.title
													}
													style={ headingStyle }
												/>
											) }
										{ showTeamMemberDescription &&
											teamMemberItem.description && (
												<RichText.Content
													tagName="p"
													className="team-member-description"
													value={
														teamMemberItem.description
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
