import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useSelect, useDispatch } from '@wordpress/data';

export default function Edit() {
	const title = useSelect((select) => select('core/editor').getEditedPostAttribute('title'));

	const { editPost } = useDispatch('core/editor');
	return (
		<div { ...useBlockProps() }>
			<h2>{ title }</h2>
			<input
				type="text"
				value={ title }
				onChange={ ( event ) => {
					editPost({ title: event.target.value });
				} }
			/>
		</div>
	);
}
