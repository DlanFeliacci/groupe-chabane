"use client";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav backdrop-blur-sm">
      <p 
        onClick={() => scrollToSection('home')}
        className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-[1.1] duration-200 text-lg cursor-pointer"
      >
        home
      </p>
      <p 
        onClick={() => scrollToSection('about')}
        className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-[1.1] duration-200 text-lg cursor-pointer"
      >
        about
      </p>
      <p 
        onClick={() => scrollToSection('services')}
        className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-[1.1] duration-200 text-lg cursor-pointer"
      >
        services
      </p>
      <p 
        onClick={() => scrollToSection('contact')}
        className="text-black border-b-2 border-transparent hover:border-[#cea678] hover:scale-[1.1] duration-200 text-lg cursor-pointer"
      >
        contact
      </p>
    </div>
  );
};

export default Navbar;
