import { dockAppsPhone } from "#constants";

const PhoneDock = () => {

    const toggleApp = (app) => {
        if (!app.canOpen) return;

        console.log(`${app.name} clicked!`);
        // ya no abre ventana
    };

    return (
        <section className="dockPhone">
            <div className="flex gap-6">
                {dockAppsPhone.map((app) => (
                    <button
                        key={app.id}
                        className="size-14 flex items-center justify-center dock-icon-phone"
                        onClick={() => toggleApp(app)}
                        disabled={!app.canOpen}
                        data-tooltip-id="dock-tooltip-phone"
                        data-tooltip-content={app.name}
                    >
                        <img
                            src={`/images/${app.icon}`}
                            alt={app.name}
                            className={app.canOpen ? "" : "opacity-60"}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default PhoneDock;
