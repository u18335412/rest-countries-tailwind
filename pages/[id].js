import { getAllCountriesId, getCountryData } from "../src/data/data";

export async function getStaticPaths() {
  const paths = await getAllCountriesId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const countryData = await getCountryData(params.id);
  return {
    props: { countryData },
  };
}

export default function country({ countryData }) {
  return <div>Country: {countryData.name.common}</div>;
}
