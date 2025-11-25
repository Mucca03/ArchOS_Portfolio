import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
    return(
        <>
            <div id="window-header">
                <WindowControls target="terminal"/>
                <h2>Terminal</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">alejandro@portfolio</span>
                    <span> ~ % </span>
                    <span>cat skills.sh </span>
                </p>

            <div className ="label">
                <p className="w-32">CATEGORY</p>
                <p>TECH STACK</p>
            </div>

            <ul className="content">
                {techStack.map(({category, items}) => (
                  <li key={category} className="flex items-center">
                    <Check className="check" size={20}/>
                    <h3>{category}</h3>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>{item}{i < items.length -1 ? ',' : ""}</li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>

            <div className="footnote">
                <p>
                    <Check className="check" size={20}/> [✓] All skills loaded successfully
                </p>

                <p className="text-green-400">
                    <Flag size={15} fill="currentColor"/> execution_time: 42ms
                </p>
            </div>
            </div>
        </>
    )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;