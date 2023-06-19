import React, { Component } from 'react'

export class ProjectOutline extends Component {

  render() {
    const { number, title,roles, description, image1, image2 } = this.props;
    return (
        <div className='project-item'>
        <h2 className='project-index'>{number}</h2>
        <div className='project-texts'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-roles'>{roles.map((role, index) => (
              <React.Fragment key={index}>
                {role}
                {index !== roles.length - 1 && <span className='role-separator'></span>}
              </React.Fragment>
            ))}</p>
        <p>{description}</p>
        </div>
        <div className='project-images'>
        <img className="laptop-image-1" src={image1} alt="Project Image 1" />
        <img className="laptop-image-2" src={image2} alt="Project Image 2" />
        </div>
      </div>
    )
  }
}

export default ProjectOutline