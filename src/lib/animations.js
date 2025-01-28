export const observeHeadings = (selector) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "motion-blur-in-[10px]",
          "motion-duration-[1.13s]",
          "motion-duration-[0.49s]/scale",
          "motion-duration-[0.7s]/blur",
          "motion-delay-[0.41s]/blur",
          "motion-ease-spring-snappy",
          "motion-translate-y-in-[10%]"
        );
      }
    });
  });

  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => observer.observe(element));
};
