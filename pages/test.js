export const getStaticProps = async (context) => {
  console.log("HHH");
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { countries: data },
  };
};

const Test = ({ countries }) => {
  return (
    <div>
      {countries.map((c, idx) => {
        return <h4 key={idx}>{c.name.common}</h4>;
      })}
    </div>
  );
};
export default Test;
