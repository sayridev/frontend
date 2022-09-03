
import { Avatar, Button, Layout as LayoutAnt, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = LayoutAnt;

export const Layout = ({ children }) => {


  return (
    <div style={{background:'black',height:'100vh'}}>
      <nav>
        <ul>
          <li>
            <Link>Administracion</Link>
            <Link>Ventas</Link>

          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};
