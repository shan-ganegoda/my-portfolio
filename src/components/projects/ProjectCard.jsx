import React from 'react'

const ProjectCard = (props) => {
    return (
        <div>
            <div className="card glass w-96 relative">
                <figure>
                    {/* <img
                        src={props.image}
                        alt="ProjectImage" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard