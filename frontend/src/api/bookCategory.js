export const getAllBookCategory = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/book-category-list`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
