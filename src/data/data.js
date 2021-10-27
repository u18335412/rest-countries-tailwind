export async function getAllCountriesId() {
  const data = await getAllData();
  const p = data.map((c) => {
    return {
      params: { id: c.name.common },
    };
  });
  return p;
}

export async function getCountryData(name) {
  const data = await fetch(
    encodeURI(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
  );
  const country = await data.json();
  let array = [];
  if (country.hasOwnProperty("borders") === true) {
    array = typeof country[0].borders === "undefined" ? [] : country[0].borders;
  }

  let neighbors = [
    {
      name: {
        common: "No Neighbor",
      },
    },
  ];

  if (array.length > 0) neighbors = await getCountryNeighbors(array.toString());
  country[0].neighbors = neighbors;
  return {
    name,
    ...country[0],
  };
}

export async function getAllData() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region`
  );
  const data = await res.json();
  return data;
}

export async function getCountryNeighbors(arrayNeighbors) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${arrayNeighbors}&fields=name`
  );
  const data = await res.json();
  return data;
}
