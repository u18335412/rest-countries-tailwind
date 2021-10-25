export async function getAllCountriesId() {
  const data = await getAllData();
  const p = data.map((c) => {
    return {
      params: { id: c.name.common },
    };
  });
  console.log(p);
  return p;
}

export async function getCountryData(name) {
  const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const country = await data.json();
  return {
    name,
    ...country[0],
  };
}

export async function getAllData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}
