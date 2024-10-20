import React from 'react';
import { Users, Target, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About SmartKids</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At SmartKids, our mission is to empower the next generation of innovators and problem-solvers through coding education. We believe that every child should have the opportunity to learn the language of technology, fostering creativity, logical thinking, and digital literacy.
          </p>
          <p className="text-lg">
            By providing engaging, project-based learning experiences, we aim to inspire young minds to explore the world of programming and prepare them for the digital future that lies ahead.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p>We tailor our curriculum to each student's pace and learning style, ensuring a supportive and effective learning environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project-Based</h3>
              <p>Students learn by doing, working on real-world projects that bring coding concepts to life and showcase their creativity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge Curriculum</h3>
              <p>Our courses are constantly updated to reflect the latest technologies and industry trends, preparing students for the future of tech.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-8">
            SmartKids is powered by a team of passionate educators, industry professionals, and technology enthusiasts. Our instructors bring a wealth of experience from various tech fields, ensuring that students learn from the best in the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bosire Saul", role: "Lead Instructor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" },
              { name: "Bosire Saul", role: "Curriculum Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" },
              { name: "Bosire Saul", role: "Student Mentor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Join Us in Shaping the Future</h2>
          <p className="text-lg mb-8">
            By choosing SmartKids, you're not just enrolling in a coding course – you're joining a community dedicated to nurturing the tech leaders of tomorrow. Together, we can unlock the potential in every child and prepare them for a world where digital literacy is key.
          </p>
          <div className="text-center">
            <a href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">Explore Our Courses</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;