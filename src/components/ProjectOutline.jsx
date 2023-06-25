import React, { Component } from 'react'
import $ from 'jquery';
export class ProjectOutline extends Component {
  componentDidMount() {
    $(window).scroll(function () {
      let $window = $(window);
      let $body = $('body');
      let $section = $('.section');
      let scroll = $window.scrollTop() + $window.height() / 3;
      $section.each(function () {
        if (
          $(this).position().top <= scroll &&
          $(this).position().top + $(this).height() > scroll
        ) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\s+/g) || []).join(' ');
          });
          $('.section').removeClass('active');
          $(this).addClass('active');
        }
      });
    });
  }
  render() {
    const { number, title, roles, description, skills, images } = this.props;
    return (


      <div className='project-item'>

        <div class="section-body">
          <div className='project-texts'>
            <h2 className='project-index'>{number}</h2>
            <h3 className='project-title'>{title}</h3>
            <p className='project-roles'>{roles.map((role, index) => (
              <React.Fragment key={index}>
                {role}
                {index !== roles.length - 1 && <span className='role-separator'></span>}
              </React.Fragment>
            ))}</p>
            <p className='project-description'>{description}</p>
            <p className='skills-needed'>{skills.join(', ')}</p>
          </div>
        </div>
        <div className='project-images'>
          {images.map((image, index) => (
            <img
              key={index}
              className={`laptop-image-${index + 1}`}
              src={image}
              alt={`Project Image ${index + 1}`}
            />
          ))}
        </div>
      </div>

    )
  }
}

export default ProjectOutline