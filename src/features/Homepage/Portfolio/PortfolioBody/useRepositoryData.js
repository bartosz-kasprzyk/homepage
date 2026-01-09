import axios from "axios";
import { useEffect, useState } from "react";

const EXCLUDED_REPOS = [
  "todo-list",
  "currency-converter",
  "bartosz-kasprzyk",
  "homepage",
];

export const useRepositoryData = () => {
  const url = "https://api.github.com/users/bartosz-kasprzyk/repos";

  const [repositoryData, setRepositoryData] = useState({
    data: [],
    status: "loading",
  });

  useEffect(() => {
    const getRepositoryData = async () => {
      try {
        const response = await axios.get(url);
        const filteredData = response.data.filter(
          (repo) => !EXCLUDED_REPOS.includes(repo.name)
        );
        const sortedData = filteredData.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setRepositoryData({
          data: sortedData,
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
