import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PhoneWelcome = () => {
    const titleRef = useRef(null);

    useGSAP(() => {
        gsap.from(".welcomePhone", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
        });

        gsap.from(titleRef.current, {
            fontVariationSettings: `'wght' 200`,
            duration: 1,
            ease: "power2.out",
            delay: 0.5,
            onUpdate: function () {
                if (!titleRef.current) return;
                const progress = this.progress();
                const weight = 200 + progress * 600;
                titleRef.current.style.fontVariationSettings = `'wght' ${weight}`;
            },
        });
    }, []);

    return (
        <section id="welcomePhone" className="welcomePhone">
            <div className="mobile-welcome text-center px-6">
                <p className="subtitlePhone text-white/80">
                    Hey, I'm Alejandro Bernal!
                </p>

                <h1
                    ref={titleRef}
                    className="titlePhone"
                >
                    Portfolio
                </h1>

                <p className="mt-4 text-sm text-white/60">
                    Not fully ready yet!<br/>Works best on desktop for now.
                </p>
            </div>
        </section>
    );
};

export default PhoneWelcome;
