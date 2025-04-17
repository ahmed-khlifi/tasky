export const myFetch = async  <T>(
    url: string,
    method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    body?: object | null | FormData,
    headers?: HeadersInit
) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    return fetch(apiUrl + url, {
        method: method || "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? "Bearer " + token : "",
            ...headers,
        },
        body: JSON.stringify(body) || null,
    }).then(async (response) => {
        if (response.status !== 200 && response.status !== 201) {
            const res = await response.json();
            throw res;
        }
        return await response.json() as T;
    });
};

