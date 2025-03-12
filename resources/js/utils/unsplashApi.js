import axios from "axios";

const accessKey = "ZKtrh4DYSC7gHvf7DUubAjDEw44h7JIoAtANXWOrDBs"; // Replace with your Unsplash Access Key
const PHOTOS_LIMIT = 100; // Desired number of photos
const PER_PAGE = 100; // Max photos per request

export const fetchUnsplashPhotos = async (query) => {
    try {
        let allPhotos = [];
        let page = 1;

        while (allPhotos.length < PHOTOS_LIMIT) {
            const remaining = PHOTOS_LIMIT - allPhotos.length;
            const fetchCount = remaining > PER_PAGE ? PER_PAGE : remaining; // Limit per request

            const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=${fetchCount}&page=${page}&client_id=${accessKey}`;
            const response = await axios.get(url);

            allPhotos = [...allPhotos, ...response.data.results]; // Merge results
            page++; // Move to the next page

            if (response.data.results.length < fetchCount) break; // Stop if fewer results are returned
        }

        return allPhotos;
    } catch (error) {
        console.error("Error fetching photos:", error);
        throw new Error("Failed to fetch photos. Please try again later.");
    }
};
