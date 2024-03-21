const formatDate = (date) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDateSegment = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
    return `${day}/${month}/${year}`;
  };

  const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' };

  if (date.toDateString() === yesterday.toDateString()) {
    return `yesterday, ${date.toLocaleTimeString('en-US', options)}`;
  } else if (date.toDateString() === today.toDateString()) {
    return `today, ${date.toLocaleTimeString('en-US', options)}`;
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return `tomorrow, ${date.toLocaleTimeString('en-US', options)}`;
  } else {
    return `${formatDateSegment(date)}, ${date.toLocaleTimeString('en-US', options)}`;
  }
};

export default formatDate;
