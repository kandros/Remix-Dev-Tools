import clsx from "clsx";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { RDTContextProvider } from "./context/RDTContext";
import { tabs } from "./tabs";
import { useTimelineHandler } from "./hooks/useTimelineHandler";
import { useRDTContext } from "./context/useRDTContext";
import { isDev } from "./utils/isDev";
import { useGetSocket } from "./hooks/useGetSocket";
import { Radio } from "lucide-react";

const RemixDevTools = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { activeTab, setActiveTab, setShouldConnectWithForge } =
    useRDTContext();

  useTimelineHandler();
  const { isConnected, isConnecting } = useGetSocket();
  const Component = tabs.find((tab) => tab.id === activeTab)?.component;
  console.log(window.__remixManifest.routes);
  return (
    <div className="remix-dev-tools">
      <div
        style={{ zIndex: 9999 }}
        onClick={() => setIsOpen(!isOpen)}
        className={
          "rdt-fixed rdt-cursor-pointer rdt-bottom-0 rdt-m-1.5 rdt-w-14 rdt-h-14 rdt-right-0 rdt-rounded-full "
        }
      >
        <Logo
          className={clsx(
            "rdt-rounded-full rdt-w-14 rdt-h-14 rdt-duration-200 rdt-transition-all",
            "rdt-hover:cursor-pointer rdt-hover:ring-2 rdt-ring-slate-600"
          )}
        />
      </div>

      <div
        style={{ zIndex: 9998 }}
        className={clsx(
          "rdt-fixed rdt-flex rdt-flex-col rdt-resize-y rdt-overflow-auto rdt-left-0 rdt-box-border rdt-bottom-0 rdt-transition-all rdt-duration-600 rdt-opacity-0 rdt-bg-[#212121] rdt-w-screen rdt-text-white",
          isOpen
            ? "rdt-drop-shadow-2xl rdt-h-[40vh] rdt-opacity-100"
            : "rdt-h-0"
        )}
      >
        <div className="rdt-flex rdt-h-8 rdt-w-full rdt-bg-gray-800">
          {tabs
            .filter((tab) => !(!isConnected && tab.requiresForge))
            .map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "rdt-flex rdt-font-sans rdt-transition-all rdt-duration-300 rdt-items-center rdt-gap-2 rdt-cursor-pointer rdt-border-r-2 rdt-px-4 rdt-border-0 rdt-border-solid rdt-border-r-[#212121] rdt-border-b rdt-border-b-[#212121]",
                  activeTab !== tab.id && "rdt-hover:opacity-50",
                  activeTab === tab.id && "rdt-bg-[#212121]"
                )}
              >
                {tab.icon} {tab.name}
              </div>
            ))}
          {(!isConnected || isConnecting) && (
            <div
              onClick={() => setShouldConnectWithForge(true)}
              className={clsx(
                isConnecting
                  ? "rdt-animate-pulse rdt-pointer-events-none rdt-cursor-default"
                  : "",
                "rdt-flex rdt-font-sans rdt-transition-all rdt-duration-300 rdt-items-center rdt-gap-2 rdt-cursor-pointer rdt-border-r-2 rdt-px-4 rdt-border-0 rdt-border-solid rdt-border-r-[#212121] rdt-border-b rdt-border-b-[#212121]"
              )}
            >
              <Radio size={16} />
              {isConnecting
                ? "Connecting to Forge..."
                : "Connect to Remix Forge"}
            </div>
          )}
        </div>
        <div className="rdt-h-full rdt-w-full rdt-flex rdt-overflow-y-auto">
          <div className="rdt-w-full rdt-p-2 rdt-pr-16">{Component}</div>
        </div>
      </div>
    </div>
  );
};

let hydrating = true;

function useHydrated() {
  let [hydrated, setHydrated] = useState(() => !hydrating);

  useEffect(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated;
}

const RDTWithContext = () => {
  const hydrated = useHydrated();
  const isDevelopment = isDev();
  if (!hydrated || !isDevelopment) return null;
  return (
    <RDTContextProvider>
      <RemixDevTools />
    </RDTContextProvider>
  );
};

export { RDTWithContext as RemixDevTools };