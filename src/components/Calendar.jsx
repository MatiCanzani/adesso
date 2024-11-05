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

    script.onload = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1RgtpzhzWVS8f_AU3_nD-4ukDG6sEaT_my1Srr3Kt9ubj8b8dlBO41hdYmWEgJXCfgBYgRYgZa?gv=true',
          color: '#039BE5',
          label: 'Book an appointment',
          target: buttonRef.current,
        });
      }
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={buttonRef} />;
};

export default GoogleCalendarSchedulingButton;
