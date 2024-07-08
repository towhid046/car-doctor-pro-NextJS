const PageHeader = ({ bgUrl, title }) => {
    return (
      <div
        style={{ backgroundImage: `url(${bgUrl.src})` }}
        className="bg-cover bg-no-repeat mb-16 rounded-xl"
      >
        <div className="rounded-xl bg-gradient-to-r from-[rgb(21,21,21)] to-[#01010101]">
          <h2 className="text-white lg:py-20 py-16 text-3xl font-bold max-w-5xl  mx-auto lg:text-left text-center">
          {title}
          </h2>
        </div>
      </div>
    );
  };
  
  export default PageHeader;