import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <section className="hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Learn to Code, Create the Future</h1>
          <p className="text-xl mb-8">Empower your child with the skills of tomorrow, today!</p>
          <Link to="/register" className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">Start Coding Now</Link>
        </div>
      </section>

      <section className="featured-courses py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Scratch for Beginners", age: "7-10", duration: "4 weeks" },
              { title: "Python Adventures", age: "11-14", duration: "6 weeks" },
              { title: "Web Design Basics", age: "12-16", duration: "8 weeks" }
            ].map((course, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="mb-2">Age: {course.age}</p>
                <p className="mb-4">Duration: {course.duration}</p>
                <Link to="/courses" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Emily, 12", quote: "I love how fun coding is with SmartKids! I've made so many cool games!" },
              { name: "Alex, 14", quote: "The Python course helped me create my first app. It's amazing!" },
              { name: "Sophia, 10", quote: "Scratch is so cool! I can bring my stories to life with code." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SmartKids?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p>Learn from passionate educators with industry experience.</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p>Personalized attention in a collaborative environment.</p>
            </div>
            <div className="text-center">
              <Award size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
              <p>Apply skills to real-world projects and build a portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Ready to Start Your Coding Journey?</h2>
          <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;