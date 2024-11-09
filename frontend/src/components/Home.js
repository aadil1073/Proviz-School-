import React from 'react';

function Home({ openForm }) {
    return (
        <section className="home">
            <div className="home-background">
                <div className="home-content">
                    <h2>Welcome to Proviz School of AI</h2>
                    <p>Advancing knowledge in Artificial Intelligence and preparing the leaders of tomorrow.</p>
                    <button className="apply-btn" onClick={openForm}>Apply Now</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
