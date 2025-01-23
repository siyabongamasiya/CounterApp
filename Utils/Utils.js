export const convertMsToString = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000); // Convert milliseconds to seconds
    const hours = Math.floor(totalSeconds / 3600); // Get total hours
    const minutes = Math.floor((totalSeconds % 3600) / 60); // Get remaining minutes
    const seconds = totalSeconds % 60; // Get remaining seconds

    // Pad with leading zeros to ensure two-digit format
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}