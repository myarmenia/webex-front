import React from 'react';
import Main from './Main/main';
import OtherCourses from './otherCourses';

function SingleCourse () {
    return (
        <section className="ls s-pt-60 s-pb-0 s-pt-lg-100 s-pb-lg-50 c-gutter-30 c-mb-30 c-mb-lg-50 single-course">
			<div className="container">
				<div className="row">
					<Main />
					<OtherCourses />
				</div>
			</div>
		</section>
    )
}

export default SingleCourse;