function Footer() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex flex-col w-1/3 footer-left relative"></div>
        <div className="flex flex-col w-1/3 relative">
          <div className="text-center w-full text-sm md:text-base text-gray-500 footer z-50">
            <p>Copyright &#169; Freighthub {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className="flex flex-col w-1/3 footer-right relative"></div>
      </div>
    </div>
  );
}

export default Footer;
