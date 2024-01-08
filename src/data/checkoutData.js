const _apiUrl = "/api/checkouts";

export const GetCheckouts = () => {
    return fetch(_apiUrl).then((res) => res.json());
}

export const ReturnCheckout = (materialId) => {
    return fetch(`${_apiUrl}/materials/${materialId}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"}
    })
}