

const _apiUrl = "/api/patrons";

export const GetPatrons = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const GetPatronById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
}

export const updatePatron = (id, patronWithUpdates) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(patronWithUpdates),
    });
}

export const DeactivatePatron = (id) => {
    return fetch(`${_apiUrl}/${id}/deactivate`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        
    })
}