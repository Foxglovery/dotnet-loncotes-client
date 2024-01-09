const _apiUrl = "/api/materials";

export const getMaterials = (GenreId, MaterialTypeId) => {
  //define new url search params
  let queryParams = new URLSearchParams();
//check if null, if not, append them to the url param
  if (GenreId != null) {
    queryParams.append('GenreId', GenreId)
  }
  if (MaterialTypeId != null) {
    queryParams.append('MaterialTypeId', MaterialTypeId)
  }
  //combine the pieces
  const queryUrl = `${_apiUrl}?${queryParams}`;
  return fetch(queryUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

export const Decirculate = (id) => {
  return fetch(`${_apiUrl}/${id}/decirculate`, {
    method: "PUT",
    headers: {"Content-Type" : "application/json"}
  })
}

export const GetAvailable = () => {
  return fetch(`${_apiUrl}/available`).then((res) => res.json());
};

