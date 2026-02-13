import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("userAuth")
    navigate("/login")
  }
  return (
    <div className="w-full flex justify-between h-15 bg-gray-300 shadow px-5">
      <div className="logo h-full flex items-center">LOGO</div>
      <div>
        <ul className="h-full flex items-center gap-5">
          <li>Home</li>
          <li>Contact</li>
          <li>
            <button className="bg-orange-500 text-white cursor-pointer w-15 h-8 rounded" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
