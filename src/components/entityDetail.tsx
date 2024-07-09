import { getEntityBy } from "@/app/entity/crud"

function SocialEntry({name, link}) {
    return (
        <li><span className="socialName">{name}</span><span className="socialValue"><a href={link}>{link}</a></span></li>
    )
}

function ChildEntity({name, logo, description}) {
    return (
        <div className="singleChild">
            <a href={`/projects/${name}`}>
                <img src={logo} title="logo" alt="logo" />
                <span className="title">{name}</span>
                <p className="shortDescription">{description}</p>
            </a>
        </div>
    )
}

export default function EntityDetail() {
    const entity = getEntityBy(1);

    return (
        <div className="entityDetail">
            <img src="" alt="logo" title="logo" /><h1>{entity.name}</h1>
            <p>{entity.description}</p>
            <section className="social">
                <ul>
                    {entity.socials.map(entry => {
                        return (<SocialEntry key={`social_${entity.name}_${entry.snetwork}`} name={entry.snetwork} link={entry.url} />)
                    })}
                </ul>
            </section>
            <section className="latestMedia">
                <a href="">Check all media</a>
                <div className="mediaItem"></div>
            </section>
            <section className="childs">
                {entity.children.slice(0,4).map(child => <ChildEntity key={`${entity.name}_child_${child.name}`} {...child} />)}
            </section>
        </div>
    )
}