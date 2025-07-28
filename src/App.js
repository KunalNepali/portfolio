import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    const backToTopBtn = document.getElementById('backToTop');
    const handleScroll = () => {
      if (window.scrollY > 300) backToTopBtn.classList.remove('hidden');
      else backToTopBtn.classList.add('hidden');
    };
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    window.addEventListener('scroll', handleScroll);
    backToTopBtn?.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopBtn?.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300 scroll-smooth">
      {/* Loader */}
      <div id="loader" className="fixed inset-0 flex items-center justify-center bg-white z-50 dark:bg-gray-900">
        <svg className="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      </div>

      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Hi! I am Kunal Nepali</h1>
        <p className="mt-2">CS student from Nepal aspiring to become a Java developer</p>
      </header>

      {/* Skills Section */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Preferred Languages & Tech</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {["html", "css", "js", "java", "python", "php", "kotlin", "laravel", "cordova", "git", "githubb", "lottiefiles", "mongodb", "react", "node", "wordpress"].map(img => (
            <div key={img}><img src={`/images/${img}.png`} alt={img} className="w-16 h-16" /></div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="max-w-xl mx-auto">
          I am learning Java. I have a keen interest in working on hands-on projects involving Java backend.
          I want to become a Java developer and contribute to solving real-world problems.
        </p>
      </section>

      {/* Projects */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>
        <ul className="max-w-xl mx-auto space-y-2 list-disc list-inside">
          <li>E-commerce Website - New Macchindra Leather and Bag Store</li>
          <li>Android App Using Cordova</li>
          <li>SEO in Multiple Websites</li>
          <li>College Management System</li>
          <li>Simple Games Using Python, js, Java</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:kunalnepali123456@gmail.com" className="text-blue-500">kunalnepali123456@gmail.com</a></p>
        <p>Phone: 9860357158</p>
        <p>Portfolio: <a href="https://kunalnepali.com.np" target="_blank" className="text-blue-500">kunalnepali.com.np</a></p>
      </section>

      {/* Resume Download */}
      <div className="flex justify-center mt-10">
        <a href="/Resume_Kunal_Nepali.pdf" download className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Download My Resume
        </a>
      </div>

      {/* Back to Top Button */}
      <button id="backToTop" className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition hidden" aria-label="Back to top">
        ↑
      </button>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-10">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">Connect with me:</p>
        <div className="flex justify-center space-x-6 text-lg">
          <a href="https://github.com/KunalNepali" target="_blank" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">GitHub</a>
          <a href="https://www.facebook.com/share/1Cj3HrdJg9/" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-white">Facebook</a>
          <a href="https://www.linkedin.com/in/kunal-nepali-b52300259/" target="_blank" className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-white">LinkedIn</a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">© 2025 Kunal Nepali. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
