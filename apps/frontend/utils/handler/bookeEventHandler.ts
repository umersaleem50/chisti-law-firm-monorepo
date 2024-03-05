export const handle_appointment_event = (element: HTMLElement | undefined) => {
  if (element) {
    const elementPosition = element.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const elementTop = elementPosition.top + scrollTop;
    const offset = 20; // You can adjust the offset if needed
    const scrollToPosition = elementTop - offset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth", // Add smooth scrolling if supported
    });
  }
};
