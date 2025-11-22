import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";


const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/archlogo.svg" alt="logo"/>
            <p className="font-bold">Alejandro's Portfolio</p>
            

        
        </div>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        
        
        <div>
                      <ul>
              {navLinks.map(({ id, name }) => (
                <li key={id}>
                  <p>{name}</p>
                </li>

              ))}
            </ul>
        </div>
    </nav>


  );   
};

export default Navbar;