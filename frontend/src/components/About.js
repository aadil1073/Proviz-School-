import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about">
            <h2>About Us</h2>
            <div className="mission">
                <img src="/images/mission.jpeg" alt="Mission" className="mission-image" />
                <div className="mission-content">
                    <h3>Mission</h3>
                    <p>Our mission is to democratize access to AI education, providing students worldwide with the skills they need to succeed in AI-driven industries.</p>
                </div>
            </div>
            <div className="vision">
                <img src="/images/vision.jpg" alt="Vision" className="vision-image" />
                <div className="vision-content">
                    <h3>Vision</h3>
                    <p>Our vision is to become a leading institution in AI education, shaping the future with innovative learning and research.</p>
                </div>
            </div>
            <div className="testimonials">
                <h3>Testimonials</h3>
                <div className="testimonial">
                    <img src="/images/alice.jpg" alt="Student Testimonial" />
                    <p>"Proviz helped me launch my AI career!" - Alice</p>
                </div>
                <div className="testimonial">
                    <img src="/images/john.jpg" alt="Student Testimonial" />
                    <p>"The courses are detailed and extremely helpful." - John</p>
                </div>
            </div>
        </section>
    );
}

export default About;
