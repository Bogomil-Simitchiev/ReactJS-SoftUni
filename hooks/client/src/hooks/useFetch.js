import { useEffect, useState } from "react";

function useFetch(url, defaultValue) {
    const [tasks, setTasks] = useState(defaultValue);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setTasks(Object.values(result))
            })

    }, [url])

    return [tasks, setTasks];
}

export default useFetch;