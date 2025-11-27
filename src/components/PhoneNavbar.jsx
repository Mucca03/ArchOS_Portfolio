import { Wifi, Signal, BatteryFull, BellOff  } from "lucide-react";
import dayjs from "dayjs";

const PhoneNavbar = () => {
    return (
        <nav className="navPhone">
            {/* Center / hora */}
            <div className="left">
            <time className="time">{dayjs().format("h:mm")}</time>
            <BellOff size={14} />
            </div>

            {/* Right / iconos */}
            <div className="right">
                <Signal size={14} />
                <Wifi size={14} />
                <BatteryFull size={18} />
            </div>
        </nav>
    );
};

export default PhoneNavbar;

