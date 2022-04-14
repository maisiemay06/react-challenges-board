export default function Project({link, image, title}) {
    return (
        <div className="card">
            <a href={link} className="project-link" target='_blank'>
            <img src={image} alt={title} className="project-preview" />
            </a>
            <h3 className="project-title">{title}</h3>
        </div>
    )
}