export const calculateRead = (text) => {
  const words = text.split(/\s+/);

  const averageReadSpeed = 225;

  const wordsNumber = words.length;

  const readingDurationMinute = wordsNumber / averageReadSpeed;

  return readingDurationMinute.toFixed(2);
};

 