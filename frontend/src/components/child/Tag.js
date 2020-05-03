import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import '../../css/tag.css'

const Tag = props => {
	const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
		props.selectedtags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedtags([...tags,event.target.value]);
			event.target.value = "";
		}
	};
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className={(props.hide !== undefined) ? 'hide' : 'tag-close-icon'}
							onClick={() => removeTags(index)}
						>
							<FontAwesomeIcon icon={ faTimesCircle }/>
						</span>
					</li>
				))}
			</ul>
			<input
				type="text" className={(props.hide !== undefined) ? "hide" : "tag-input-field" }
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press enter to add tags"
			/>
		</div>
	);
};

export default Tag;


