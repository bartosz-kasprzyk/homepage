import axios from 'axios'
import { useEffect, useState } from 'react';

export const useRepositoryData = () => {

    const url = "https://api.github.com/users/bartek-kasprzyk/repos";

    const [repositoryData, setRepositoryData] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getRepositoryData = async () => {
            try {
                const response = await axios.get(url);
                setRepositoryData({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setRepositoryData({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(getRepositoryData, 1000);
    }, [url]);

    return { repositoryData };
};