import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-contetn">
          <span className="card-title">Project Title - { id } </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque praesentium mollitia aperiam distinctio, esse, nemo tempora voluptatum blanditiis magnam optio? Unde non officia velit consectetur natus dignissimos tenetur sint.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Divyam</div>
          <div>18th March 6am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
