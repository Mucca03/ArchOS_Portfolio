import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const Img = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, image, imageUrl, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                <div className="w-full">
                    <img src={imageUrl || image} alt={name} className="w-full h-auto rounded" />
                </div>

                {subtitle ? <h3 className="text-lg font-semibold mt-3">{subtitle}</h3> : null}

                {description ? <p className="mt-2 text-sm text-gray-800">{description}</p> : null}
            </div>
        </>
    );
};

const ImgWindow = WindowWrapper(Img, "imgfile");

export default ImgWindow;
