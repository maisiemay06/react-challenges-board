import Project from './Project';

export default function ShowProjects({ProjectData}) {
    return (
        <div>
            {ProjectData.map((project) => {
                return <Project key={project.id} {...project} />
            })}
        </div>
    )
}