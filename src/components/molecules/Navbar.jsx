// import PropTypes from "prop-types";
// import Button from "../atoms/Button";

// const Navbar = ({ logo, menuItems }) => {
//   return (
//     <nav className="py-1 md:py-6 border-b-2 border-[#d9d9d9]">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <img src={logo} alt="Logo" className="w-16 md:w-20" />
//         </div>
//         <div className="hidden md:block">
//           <ul className="flex space-x-4">
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.link}
//                   className="text-black text-sm p-6 hover:text-gray-300 transition duration-300"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="md:flex gap-4 items-center">
//           <Button
//             text="Login"
//             color="#fff"
//             textColor="#fc1d4d"
//             border={true}
//             borderColor="#fc1d4d"
//           />
//           <Button text="Sign up" color="#fc1d4d" />
//         </div>
//         <div className="md:hidden">
//           <button className="text-black focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   logo: PropTypes.string.isRequired,
//   menuItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default Navbar;


import PropTypes from "prop-types";
import Button from "../atoms/Button";

const Navbar = ({ logo, menuItems }) => {
  return (
    <nav className="py-1 md:py-6 border-b-2 border-[#d9d9d9]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="w-16 md:w-20" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-black text-sm p-6 hover:text-gray-300 transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <Button
            text="Login"
            color="#fff"
            textColor="#fc1d4d"
            border={true}
            borderColor="#fc1d4d"
          />
          <Button text="Sign up" color="#fc1d4d" />
        </div>
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
