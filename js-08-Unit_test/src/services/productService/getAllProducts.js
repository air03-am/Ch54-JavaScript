// fetch a la url para poner todos los productos 
const getAllProducts = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error en el servicio. Error: ${response.status} `);
  }

  const data = await response.json();
  return data;
};

export { getAllProducts };
