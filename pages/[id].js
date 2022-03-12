import { getAllCountriesId, getCountryData } from "../src/data/data";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

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
  const capitals = countryData.capital;
  const tld = countryData.tld;
  return (
    <div className="max-h-full min-h-screen px-5 pt-10 2xl:px-28 dark:bg-veryDarkBlue dark:text-white ">
      <Link href="/" passHref>
        <button className="flex items-center px-5 py-2 rounded shadow-md dark:bg-grayishDarkBlue hover:ring ring-green-100">
          <BsArrowLeft></BsArrowLeft>
          <span className="px-5">Back</span>
        </button>
      </Link>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2">
        <img
          className="object-cover w-full h-full max-h-96"
          src={countryData.flags.svg}
          alt="country flag"
        ></img>
        <div className="flex flex-col justify-center xl:pl-16 xl:pb-0 md:p-4 pt-7">
          <p className="mb-5 text-2xl font-bold md">
            {countryData.name.common}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold ">
                Native Name:
                <span className="text-sm font-normal">
                  <span className="mr-1">{` ${countryData.name.common}`}</span>
                </span>
              </p>
              <p className="font-semibold ">
                Population:
                <span className="font-normal text-s">
                  {` ${countryData.population.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}` }
                </span>
              </p>
              <p className="font-semibold ">
                Region:{" "}
                <span className="text-sm font-normal">
                  {` ${countryData.region}`}
                </span>{" "}
              </p>
              <p className="font-semibold ">
                Subregion:
                <span className="text-sm font-normal">
                  {countryData.subregion && ` ${countryData.subregion}`}
                </span>
              </p>
              <p>
                <label className="font-semibold ">Capital:</label>
                {capitals === undefined ? "" : ` ${capitals.toString()}`}
              </p>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="flex flex-col gap-2 md:float-right xl:float-none">
                <p className="font-semibold ">
                  Top Level Domain:
                  <span className="text-sm font-normal">
                    {tld === undefined ? "" : ` ${tld.toString()}`}
                  </span>
                </p>
                <p className="font-semibold ">
                  Currencies:
                  {countryData.currencies &&
                    Object.keys(countryData.currencies).map((c, idx) => {
                      return (
                        <span className="ml-2 font-normal" key={idx}>
                          {countryData.currencies[`${c}`].name}
                        </span>
                      );
                    })}
                </p>
                <p>
                  <span className="pr-1 font-semibold ">Languages:</span>
                  {countryData.languages &&
                    Object.keys(countryData.languages).map((c, idx) => {
                      if (idx === Object.keys(countryData.languages).length - 1)
                        return (
                          <span key={`${countryData.languages[`${c}`]}`}>{`${
                            countryData.languages[`${c}`]
                          }`}</span>
                        );
                      else
                        return (
                          <span key={`${countryData.languages[`${c}`]}`}>{`${
                            countryData.languages[`${c}`]
                          }, `}</span>
                        );
                    })}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-10 dark:bg-veryDarkBlue">
            <span className="w-full mr-2 font-semibold md:w-auto">
              Bordered Countries:
            </span>
            {countryData.neighbors.map((c, idx) => {
              return (
                <Link
                  href={`/${c.name.common}`}
                  passHref
                  key={`${c.name.common}+link`}
                  className="inline "
                >
                  <span className="px-3 py-1 mt-1 mr-2 text-sm rounded-md shadow-md cursor-pointer dark:bg-grayishDarkBlue hover:shadow-xl">
                    {c.name.common}
                  </span>
                </Link>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
