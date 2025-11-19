import React from "react";
import { aiCourses, courseTabs } from "../data/courses";

function CoursesSection() {
  return (
    <section className="courses-section">
      <div className="courses-header">
        <h2>Skills to transform your career and life</h2>
        <p>
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>

        <div className="courses-tabs">
          {courseTabs.map((tab, idx) => (
            <button
              key={tab}
              className={idx === 0 ? "active" : ""}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="courses-row">
        {aiCourses.map((course) => (
          <article key={course.id} className="course-card">
            <img src={course.img} alt={course.title} />

            <h4>{course.title}</h4>
            <p className="instructor">{course.instructor}</p>

            <div className="course-meta">
              <span className={`tag ${course.tagType}`}>{course.tagLabel}</span>
              <span className="rating">⭐ {course.rating}</span>
              <span className="ratings-count">{course.ratingsCount}</span>
            </div>

            <p className="price">{course.price}</p>
          </article>
        ))}

        <button className="courses-arrow" type="button">
          ›
        </button>
      </div>

      <a href="#" className="show-link">
        Show all Artificial Intelligence (AI) courses →
      </a>
    </section>
  );
}

export default CoursesSection;
