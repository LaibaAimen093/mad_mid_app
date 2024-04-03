import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomHooks(url) {
    const [data, setData] = useState([]);

    const getBookData = async () => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error to let the caller handle it
        }
    };

    useEffect(() => {
        getBookData()
            .then((responseData) => {
                console.log("Data fetched from API:", responseData);
                setData(responseData);
            })
            .catch((error) => {
                console.error("Error fetching data from API:", error);
            });
    }, []);

    return { data };
}
