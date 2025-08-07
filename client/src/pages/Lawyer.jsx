/* action search mungkin buat hubungin query nanti belom pasti jadi gw komen
  ref: https://react.dev/reference/react-dom/components/form */
const Lawyer= () => {
  return (
    <>
      <div className="SearchBar">
        <h1>Find your lawyer here:</h1>
        <form /*action={search}*/>
          <input name="query" placeholder="Name" /> 
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="Main">
        <h2 /* Placeholder pagination component. Kykny make react pagination */> Prev 1 2 3 Next </h2>
      </div>
    </>
  );
};

export default Lawyer;
