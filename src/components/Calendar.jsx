import { useEffect, useRef } from 'react';

const GoogleCalendarSchedulingButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;

    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';

    document.head.appendChild(link);
    document.body.appendChild(script);

    const checkAndModifyElement = () => {
      const element = document.querySelector('.qxCTlb');
      if (element) {
        const classesToAdd = ['w-9/12', 'md:w-5/12', 'md:px-14 !important'];
        classesToAdd.forEach(className => {
          className.split(' ').forEach(part => {
            element.classList.add(part);
          });
        });
        clearInterval(intervalId);
      }
    };

    let intervalId = setInterval(checkAndModifyElement, 100);

    script.onload = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1RgtpzhzWVS8f_AU3_nD-4ukDG6sEaT_my1Srr3Kt9ubj8b8dlBO41hdYmWEgJXCfgBYgRYgZa?gv=true',
          color: '#20AD96',
          label: 'Book an appointment',
          target: buttonRef.current,
          style: {
            maxWidth: '100px'
          }
        });
      }
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      clearInterval(intervalId);
    };
  }, []);

  return <div ref={buttonRef}/>;
};

export default GoogleCalendarSchedulingButton;