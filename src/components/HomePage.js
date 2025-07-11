import React from 'react';
import { Link } from 'react-router-dom';
// Corrected paths to point to the 'images' folder
import heroImage from '../images/restaurantfood.jpg';
import greekSalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.jpg';
import lemonDessert from '../images/lemon dessert.jpg';

// Data for the specials section
const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    image: greekSalad,
    description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    title: 'Bruchetta',
    price: '$5.99',
    image: bruchetta,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    image: lemonDessert,
    description: "This comes straight from grandma's recipe book—every last ingredient is as authentic as can be imagined.",
  },
];

// Data for the testimonials section
const testimonials = [
  {
    name: 'Sarah L.',
    rating: 5,
    comment: 'The best Mediterranean food in Chicago! The Greek salad was so fresh, and the lemon dessert was the perfect end to the meal.',
  },
  {
    name: 'John D.',
    rating: 5,
    comment: "A wonderful experience from start to finish. The ambiance is cozy and the staff is incredibly friendly. Highly recommend the Bruschetta.",
  },
  {
    name: 'Emily R.',
    rating: 4,
    comment: 'A true gem. The food is authentic and delicious. It feels like a little piece of the Mediterranean right here in the city.',
  },
];


const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking" className="btn-primary">
              Reserve a Table
            </Link>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Delicious food served at Little Lemon" />
          </div>
        </div>
      </header>

      {/* Specials Section */}
      <section className="specials-section container">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <Link to="/menu" className="btn-secondary">
            Online Menu
          </Link>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <div key={item.title} className="special-card">
              <img src={item.image} alt={item.title} />
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                </div>
                <p>{item.description}</p>
                <Link to="/order" className="order-link">
                  Order a delivery
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                  <span className="dimmed-stars">{'★'.repeat(5 - testimonial.rating)}</span>
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Reusing an existing asset */}
      <section className="about-section container">
        <div className="about-content">
          <h2>About Little Lemon</h2>
          <p>
            Founded in Chicago by Italian brothers Mario and Adrian, Little Lemon
            is a charming neighborhood bistro that serves simple, authentic Mediterranean
            food in a lively and casual environment.
            <br/><br/>
            Driven by a shared passion for their family's traditional recipes,
            the brothers have created a unique dining experience that blends heritage
            with a modern flair, using only the freshest locally-sourced ingredients.
          </p>
        </div>
        <div className="about-image">
            <img src={bruchetta} alt="A serving of bruschetta" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
