import { useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const items = [
    { text: "About Me", link: "#about" },
    { text: "Services", link: "#service" },
    { text: "Blog", link: "/blog" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    animateMenuIcon();
    const menuAnimation = !isOpen ? 0 : "100%";
    
    gsap.to(".mobile-menu", {
      x: menuAnimation,
      duration: 0.5,
      ease: "power4.inOut",
    });
  };

  const animateMenuIcon = () => {
    const topLine = ".menu-line-top";
    const middleLine = ".menu-line-middle";
    const bottomLine = ".menu-line-bottom";

    if (!isOpen) {
      gsap.to(topLine, { rotation: 45, y: 6, duration: 0.35, transformOrigin: "50% 50%" });
      gsap.to(middleLine, { opacity: 0, duration: 0.35 });
      gsap.to(bottomLine, { rotation: -45, y: -6, duration: 0.35, transformOrigin: "50% 50%"});
    } else {
      gsap.to(topLine, { rotation: 0, y: 0, duration: 0.35, transformOrigin: "50% 50%" });
      gsap.to(middleLine, { opacity: 1, duration: 0.35 });
      gsap.to(bottomLine, { rotation: 0, y: 0, duration: 0.35, transformOrigin: "50% 50%" });
    }
  };

  const handleLinkClick = (link) => {
    // Close menu
    setIsOpen(false);
    gsap.to(".mobile-menu", {
      x: "100%",
      duration: 0.5,
      ease: "power4.inOut",
    });

    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    animateMenuIcon();
  };

  return (
    <>
      <nav className={`flex justify-between w-full absolute left-0 px-8 gap-4`}>
        <p className="md:text-lg">Adesso</p>  
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <line className="menu-line-top" x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" />
            <line className="menu-line-middle" x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
            <line className="menu-line-bottom" x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <ul className="hidden md:flex justify-between gap-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="font-oxygen md:text-lg"
                onClick={() => handleLinkClick(item.link)} 
              >
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className="underline font-oxygen md:text-lg"
              onClick={() => handleLinkClick("/contact")}
            >
              <div className="flex justify-between items-center gap-2">
                Book a Call
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="w-6 h-6 text-tertiary"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 7l-10 10" />
                    <path d="M8 7l9 0l0 9" />
                  </svg>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <div className={`mobile-menu fixed top-0 right-0 w-full h-full z-50 bg-gray-900 transform translate-x-full  md:hidden`}>
        <button className="absolute top-8 right-8" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <line className="menu-line-top" x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" />
            <line className="menu-line-middle" x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
            <line className="menu-line-bottom" x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center gap-8 h-full">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-white text-2xl"
                onClick={() => handleLinkClick(item.link)} // Add click handler
              >
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              className="underline text-white text-2xl"
              onClick={() => handleLinkClick("/contact")} // Add click handler
            >
              Book a Call
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
