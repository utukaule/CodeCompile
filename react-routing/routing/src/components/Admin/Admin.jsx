import { Link, Navigate, Outlet } from "react-router-dom";
const Admin = () => {
  const user = { role: "admin" };
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <div>
      admin
      <ul>
        <li>
          <Link to="/admin/sales">Sale</Link>
        </li>
        <li>
          <Link to="/admin/sellers">Seller</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Admin;
