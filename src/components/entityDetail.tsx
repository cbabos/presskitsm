import { getEntityBy } from '@/app/entity/crud';
import { tEntity, tSocialItem } from '@/app/entity/types';
import Image from 'next/image';

function SocialEntry({ name, url }: tSocialItem) {
  return (
    <li>
      <span className="socialName">{name}</span>
      <span className="socialValue">
        <a href={url}>{url}</a>
      </span>
    </li>
  );
}

function ChildEntity({ name, logo, description }: tEntity) {
  return (
    <div className="singleChild">
      <a href={`/project/${name}`}>
        <Image src={logo} title="logo" alt="logo" width={200} height={100} />
        <span className="title">{name}</span>
        <p className="shortDescription">{description}</p>
      </a>
    </div>
  );
}

export default function EntityDetail({ id }: { id: number }) {
  const entity = getEntityBy(id);

  return (
    <div className="entityDetail">
      <Image src="" alt="logo" title="logo" width={200} height={100} />
      <h1>{entity.name}</h1>
      <p>{entity.description}</p>
      <section className="social">
        <ul>
          {entity.socials.map((entry) => {
            return (
              <SocialEntry
                key={`social_${entity.name}_${entry.name}`}
                {...entry}
              />
            );
          })}
        </ul>
      </section>
      <section className="latestMedia">
        <a href="">Check all media</a>
        <div className="mediaItem"></div>
      </section>
      <section className="childs">
        {entity.children
          ?.slice(0, 4)
          .map((child) => (
            <ChildEntity
              key={`${entity.name}_child_${child.name}`}
              {...child}
            />
          ))}
      </section>
    </div>
  );
}
