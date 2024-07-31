import { tSocialItem } from '../types/entity.types';

export default function SocialLink ({ link } : { link: tSocialItem }) {
	return (
		<>
			<a href={link.url} target="_blank">{link.name}</a>
		</>
	);
}
