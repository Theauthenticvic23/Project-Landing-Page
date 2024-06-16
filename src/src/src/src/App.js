import React from 'react';

function App() {
    const openMenu = () => {
        document.getElementById('sidemenu').style.right = '0';
    };

    const closeMenu = () => {
        document.getElementById('sidemenu').style.right = '-200px';
    };

    return (
        <div>
            {/* Navigation Section */}
            <nav>
                <div className="logo">
                    <img src="city pictures/logo.png" alt="CityCycle Logo" />
                </div>
                <ul className="nav-links" id="sidemenu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><i className="fas fa-times" onClick={closeMenu}></i></li>
                </ul>
                <div className="burger">
                    <i className="fas fa-bars" onClick={openMenu}></i>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to CityCycle</h1>
                    <p>Your partner in recycling and waste management solutions</p>
                    <a href="#contact" className="btn">Get Started</a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <img src="city pictures/first image.jpeg" alt="About Image" />
                    <h2>About CityCycle</h2>
                    <p>CityCycle is committed to promoting environmental sustainability through innovative recycling and waste management solutions. With our expertise and dedication, we strive to make a positive impact on our communities and the planet.</p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        <div className="service">
                            <i className="fas fa-recycle"></i>
                            <h3>Recycling Services</h3>
                            <p>Efficient collection and processing of recyclable materials</p>
                        </div>
                        <div className="service">
                            <i className="fas fa-trash"></i>
                            <h3>Waste Management</h3>
                            <p>Comprehensive waste management solutions for businesses and municipalities</p>
                        </div>
                        <div className="service">
                            <i className="fas fa-balance-scale"></i>
                            <h3>Consultation</h3>
                            <p>Expert consultation on recycling programs and waste reduction strategies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio-section">
                <div className="container">
                    <h2>Our Portfolio</h2>
                    {/* Gallery or Showcase of Projects */}
                    <div className="work-list">
                        <div className="work">
                            <img src="city pictures/fifth image.jpeg" alt="Portfolio Image" />
                            <div className="layer">
                                <h3>Recycle bins Always available</h3>
                                <a href="#"><i className="fas fa-arrow-up"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="city pictures/Third image.jpeg" alt="Portfolio Image" />
                            <div className="layer">
                                <h3>Helping the community in deposing of refuse</h3>
                                <a href="#"><i className="fas fa-arrow-up"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="city pictures/seventh image.jpeg" alt="Portfolio Image" />
                            <div className="layer">
                                <h3>Images displaying how we carry out our services</h3>
                                <a href="#"><i className="fas fa-arrow-up"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn">See more</a>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Get in touch with us to learn more about our services or to discuss your recycling needs.</p>
                    <form action="contact.php" method="POST" className="contact-form">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <div className="container">
                    <p>&copy; 2024 CityCycle. All rights reserved.</p>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default App;