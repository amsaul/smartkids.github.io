import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  level: string;
}

const courses: Course[] = [
  { id: 1, title: "Scratch for Beginners", description: "Learn the basics of programming with Scratch.", ageGroup: "7-10", duration: "4 weeks", level: "Beginner" },
  { id: 2, title: "Python Adventures", description: "Dive into Python programming with fun projects.", ageGroup: "11-14", duration: "6 weeks", level: "Intermediate" },
  { id: 3, title: "Web Design Basics", description: "Create your first website with HTML and CSS.", ageGroup: "12-16", duration: "8 weeks", level: "Beginner" },
  { id: 4, title: "JavaScript Game Development", description: "Build interactive games using JavaScript.", ageGroup: "13-17", duration: "10 weeks", level: "Intermediate" },
  { id: 5, title: "App Inventor Workshop", description: "Design and create your own mobile apps.", ageGroup: "10-14", duration: "6 weeks", level: "Beginner" },
  { id: 6, title: "Robotics with Arduino", description: "Learn to program and control robots.", ageGroup: "12-16", duration: "8 weeks", level: "Intermediate" },
];

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [filterLevel, setFilterLevel] = useState('');

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterAge === '' || course.ageGroup.includes(filterAge)) &&
    (filterLevel === '' || course.level === filterLevel)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <select
            className="p-2 border rounded"
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
          >
            <option value="">All Ages</option>
            <option value="7">7-10</option>
            <option value="11">11-14</option>
            <option value="12">12-16</option>
            <option value="13">13-17</option>
          </select>
          <select
            className="p-2 border rounded"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="text-sm text-gray-500">
                <p>Age Group: {course.ageGroup}</p>
                <p>Duration: {course.duration}</p>
                <p>Level: {course.level}</p>
              </div>
            </div>
            <div className="bg-blue-600 p-4">
              <button className="w-full bg-white text-blue-600 py-2 rounded font-semibold hover:bg-blue-100 transition duration-300">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;