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
    <div className="px-5 2xl:px-28 pt-10 dark:bg-veryDarkBlue dark:text-white min-h-screen max-h-full ">
      <Link href="/" passHref>
        <button className="px-5 py-2  rounded flex  dark:bg-grayishDarkBlue  items-center shadow-md hover:ring ring-green-100">
          <BsArrowLeft></BsArrowLeft>
          <span className="px-5">Back</span>
        </button>
      </Link>

      <div className=" mt-20 grid grid-cols-1 md:grid-cols-2">
        <img
          className=" object-cover h-full w-full"
          src={countryData.flags.svg}
          alt="country flag"
        ></img>
        <div className="xl:pl-16 xl:pb-0 md:p-4 pt-7 flex flex-col justify-center">
          <p className="text-2xl mb-5 md font-bold">
            {countryData.name.common}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col gap-2 ">
              <p className=" font-semibold">
                Native Name:
                <span className="text-sm font-normal">
                  <span className="mr-1">{` ${countryData.name.common}`}</span>
                </span>
              </p>
              <p className=" font-semibold ">
                Population:
                <span className="text-s font-normal">
                  {` ${countryData.population.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}`}
                </span>
              </p>
              <p className=" font-semibold">
                Region:{" "}
                <span className="text-sm font-normal">
                  {` ${countryData.region}`}
                </span>{" "}
              </p>
              <p className=" font-semibold">
                Subregion:
                <span className="text-sm font-normal">
                  {countryData.subregion && ` ${countryData.subregion}`}
                </span>
              </p>
              <p>
                <label className=" font-semibold">Capital:</label>
                {capitals === undefined ? "" : ` ${capitals.toString()}`}
              </p>
            </div>
            <div className="mt-10 md:mt-0">
              <div className=" flex gap-2 flex-col  md:float-right xl:float-none">
                <p className=" font-semibold">
                  Top Level Domain:
                  <span className="text-sm font-normal">
                    {tld === undefined ? "" : ` ${tld.toString()}`}
                  </span>
                </p>
                <p className=" font-semibold">
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
                  <span className=" font-semibold pr-1">Languages:</span>
                  {countryData.languages &&
                    Object.keys(countryData.languages).map((c, idx) => {
                      if (idx === Object.keys(countryData.languages).length - 1)
                        return (
                          <span key={idx}>{`${countryData.languages[`${c}`]
                            }`}</span>
                        );
                      else
                        return (
                          <span key={idx}>{`${countryData.languages[`${c}`]
                            }, `}</span>
                        );
                    })}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center dark:bg-veryDarkBlue">
            <span className="font-semibold mr-2 w-full md:w-auto">
              Bordered Countries:
            </span>
            {countryData.neighbors.map((c, idx) => {
              return (
                <Link
                  href={`/${c.name.common}`}
                  passHref
                  key={idx}
                  className="inline "
                >
                  <span className="dark:bg-grayishDarkBlue mt-1 text-sm px-3 py-1 shadow-md mr-2 cursor-pointer hover:shadow-xl rounded-md">
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
