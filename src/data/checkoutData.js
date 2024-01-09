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

export const createCheckout = (newCheckout) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(newCheckout),
    }).then((res) => res.json());
}

export const GetOverdue = () => {
    return fetch(`${_apiUrl}/overdue`).then((res) => res.json())
  };