import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Aboutus = () => {
  const teamMembers = [
    {
      name: 'Vikram Singh',
      role: 'Full Stack Developer',
      description: 'Passionate about building scalable web applications and creating seamless user experiences.',
      avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&size=200&background=3b82f6&color=fff',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'vikram@example.com'
      }
    },
    {
      name: 'Ritik Raj',
      role: 'Frontend Developer',
      description: 'Specialized in creating beautiful and responsive user interfaces with modern technologies.',
      avatar: 'https://ui-avatars.com/api/?name=Ritik+Raj&size=200&background=8b5cf6&color=fff',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'ritik@example.com'
      }
    },
    {
      name: 'Tejashree Venkatash',
      role: 'Backend Developer',
      description: 'Expert in building robust APIs and managing database architectures for high-performance applications.',
      avatar: 'https://ui-avatars.com/api/?name=Tejashree+Venkatash&size=200&background=ec4899&color=fff',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'tejashree@example.com'
      }
    }
  ]

  return (
    <div className='min-h-screen bg-black text-white ml-64'>
      {/* Hero Section */}
      <div className='border-b border-gray-800 px-8 py-12 bg-gradient-to-br from-gray-900 to-black'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            About Us
          </h1>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            We are a passionate team of developers dedicated to creating innovative and user-friendly applications
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className='max-w-6xl mx-auto px-8 py-16'>
        <div className='bg-gray-900 rounded-2xl border border-gray-800 p-8 mb-16'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Our Mission</h2>
          <p className='text-gray-400 text-center text-lg leading-relaxed max-w-3xl mx-auto'>
            Our mission is to build cutting-edge social media experiences that connect people and foster meaningful interactions. 
            We strive to create platforms that are intuitive, secure, and enjoyable for users worldwide.
          </p>
        </div>

        {/* Team Section */}
        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-12 text-center'>Meet Our Team</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className='bg-gray-900 rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105'
              >
                {/* Avatar */}
                <div className='flex justify-center mb-6'>
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className='w-32 h-32 rounded-full border-4 border-gray-800'
                  />
                </div>

                {/* Info */}
                <div className='text-center mb-6'>
                  <h3 className='text-2xl font-bold mb-2'>{member.name}</h3>
                  <p className='text-blue-500 font-semibold mb-4'>{member.role}</p>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className='flex justify-center gap-4'>
                  <a 
                    href={member.social.github}
                    className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors'
                    aria-label='GitHub'
                  >
                    <FaGithub className='w-5 h-5' />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors'
                    aria-label='LinkedIn'
                  >
                    <FaLinkedin className='w-5 h-5' />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors'
                    aria-label='Twitter'
                  >
                    <FaTwitter className='w-5 h-5' />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors'
                    aria-label='Email'
                  >
                    <IoMail className='w-5 h-5' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className='bg-gray-900 rounded-2xl border border-gray-800 p-8 mb-16'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Technologies We Use</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JavaScript', 'Git', 'REST API'].map((tech, index) => (
              <div 
                key={index}
                className='bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition-colors'
              >
                <p className='font-semibold text-blue-400'>{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
          <p className='text-lg mb-6'>
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <button className='bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors'>
            Contact Us
          </button>
        </div>

        {/* Footer */}
        <div className='mt-16 text-center text-gray-500 text-sm pb-8'>
          <p>© 2025 Instagram Clone. Built with ❤️ by our amazing team.</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus