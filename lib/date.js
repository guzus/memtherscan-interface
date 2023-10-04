export function formatDate(dateString) {
    const currentDate = new Date();
    const inputDate = new Date(dateString);

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - inputDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(daysDifference / 30); // Approximation

    if (monthsDifference >= 2) {
        return `${monthsDifference} months ago`;
    } else if (monthsDifference === 1) {
        return `1 month ago`;
    } else if (weeksDifference >= 2) {
        return `${weeksDifference} weeks ago`;
    } else if (weeksDifference === 1) {
        return `1 week ago`;
    } else if (daysDifference >= 2) {
        return `${daysDifference} days ago`;
    } else if (daysDifference === 1) {
        return `1 day ago`;
    } else if (hoursDifference >= 2) {
        return `${hoursDifference} hours ago`;
    } else if (hoursDifference === 1) {
        return `1 hour ago`;
    } else if (minutesDifference >= 2) {
        return `${minutesDifference} minutes ago`;
    } else if (minutesDifference === 1) {
        return `1 minute ago`;
    } else {
        return `just now`;
    }
}