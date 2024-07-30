import { tEntity } from '../types/entity.types';
import SocialLink from './SocialLink';

export default function EntityDetails({entity} : {entity: tEntity}) {
	return (
		<article id="details">
			<header>
				<img src={entity.logo} />
				<h1 data-testid="entity-name">{entity.name}</h1>
			</header>
			<p data-testid="entity-description">{entity.description}</p>
			<ul className="socials">
				{entity.socials.map(link => {
					return (
						<li key={`social-link-${link.name}`}>
							<SocialLink link={link} />
						</li>
					);
				})}
			</ul>
		</article>
	);
}
