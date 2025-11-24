import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";


const Navbar = () => {

  const {openWindow} = useWindowStore();


  return (
    <nav>
        <div>
            {/*<img src="/images/archlogo.svg" alt="logo"/>*/}
            <p className="font-bold">Alejandro's Portfolio</p>
        </div>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        
        <div>
              <ul>
              {navLinks.map(({ id, name, type }) => (
                <li key={id} onClick={() => openWindow(type)}>
                  <p>{name}</p>
                </li>

              ))}
            </ul>
        </div>
    </nav>


  );   
};

export default Navbar;