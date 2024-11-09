import React from 'react';
import './Courses.css';

const courses = [
    {
        id: 1,
        title: "Introduction to AI",
        price: "$200",
        description: "Learn the basics of AI, including concepts and algorithms that are shaping the future.",
        rating: "⭐⭐⭐⭐☆", 
        image: "/images/ai.png"
    },
    {
        id: 2,
        title: "Machine Learning",
        price: "$300",
        description: "Dive into machine learning techniques and build predictive models with Python.",
        rating: "⭐⭐⭐⭐⭐", 
        image: "/images/machine.jpeg"
    },
    {
        id: 3,
        title: "Deep Learning",
        price: "$400",
        description: "Explore neural networks, deep learning architectures, and real-world applications.",
        rating: "⭐⭐⭐⭐☆", 
        image: "/images/deep.jpg"
    },
    {
        id: 4,
        title: "Natural Language Processing",
        price: "$350",
        description: "Understand how machines process and understand human language, from speech recognition to text generation.",
        rating: "⭐⭐⭐⭐⭐", 
        image: "/images/natural.webp"
    },
    {
        id: 5,
        title: "AI in Healthcare",
        price: "$450",
        description: "Learn how AI is revolutionizing the healthcare industry, from diagnostics to treatment.",
        rating: "⭐⭐⭐⭐", 
        image: "/images/healthcare.jpeg"
    },
    {
        id: 6,
        title: "AI for Robotics",
        price: "$500",
        description: "Dive into the world of robotics and AI, learning about intelligent machines and automation.",
        rating: "⭐⭐⭐⭐⭐", 
        image: "/images/robot.jpeg"
    }
];

function Courses() {
    return (
        <section className="courses">
            <h2>Our Courses</h2>
            <div className="course-cards">
                {courses.map(course => (
                    <div className="course-card" key={course.id}>
                        <img src={course.image} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p className="description">{course.description}</p>
                        <div className="price">Fee: {course.price}</div>
                        <div className="rating">{course.rating}</div>
                        <button className="btn-learn-more">Read More</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Courses;
