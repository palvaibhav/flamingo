const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="flamingo-container py-12">
        <div className="mt-12border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r bg-clip-text text-black">
              flamingo
            </span>
          </div>

          <p className="mt-4 md:mt-0 text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Flamingo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
