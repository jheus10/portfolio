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
    const { number, title, roles, description, skills, image1, image2 } = this.props;
    return (


      <div className='project-item'>
        <h2 className='project-index'>{number}</h2>
        <div class="section-body">
          <div className='project-texts'>
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
          <img className="laptop-image-1" src={image1} alt="Project Image 1" />
          <img className="laptop-image-2" src={image2} alt="Project Image 2" />
        </div>
      </div>

    )
  }
}

export default ProjectOutline