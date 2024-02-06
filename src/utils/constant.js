const GOOGLE_API_KEY = "AIzaSyC9_SJexujvg--MCJkaD0YWgT0c48m65KA";
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";



export function generateRandomName() {
    const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Johnson", "Smith", "Williams", "Davis", "Miller", "Wilson"];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomName = `${randomFirstName}`;
    return randomName;
}

export function generateRandomString(length) {
    const subjects = ['I', 'You', 'He', 'She', 'They'];
    const verbs = ['love', 'hate', 'enjoy', 'prefer', 'like'];
    const objects = ['programming', 'music', 'traveling', 'reading', 'cooking'];

    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    const subject = getRandomElement(subjects);
    const verb = getRandomElement(verbs);
    const object = getRandomElement(objects);

    return `${subject} ${verb} ${object}.`;
}