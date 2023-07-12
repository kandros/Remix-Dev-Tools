import { useMatches, useRevalidator } from "@remix-run/react";
import { CornerDownRight } from "lucide-react";
import clsx from "clsx";
import { JsonRenderer } from "../components/jsonRenderer";
import { useGetSocket } from "../hooks/useGetSocket";
const VsCode = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z"
          fill="#0065A9"
        />
        <g filter="url(#filter0_d)">
          <path
            d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z"
            fill="#007ACC"
          />
        </g>
        <g filter="url(#filter1_d)">
          <path
            d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z"
            fill="#1F9CF0"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }} opacity="0.25">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z"
            fill="url(#paint0_linear)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-8.39411"
          y="15.8291"
          width="116.727"
          height="92.2456"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.16667" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="overlay"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="60.4167"
          y="-8.07558"
          width="47.9167"
          height="116.151"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.16667" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="overlay"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="49.9392"
          y1="0.257812"
          x2="49.9392"
          y2="99.7423"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
interface PageTabProps {}
export const ROUTE_COLORS: Record<string, string> = {
  ROUTE: "rdt-bg-green-500 rdt-text-white",
  LAYOUT: "rdt-bg-blue-500 rdt-text-white",
  ROOT: "rdt-bg-purple-500 rdt-text-white",
};

const getLoaderData = (data: string | Record<string, any>) => {
  if (typeof data === "string") {
    try {
      const temp = JSON.parse(data);
      delete temp.remixDevTools;
      return JSON.stringify(temp, null, 2);
    } catch (e) {
      return data;
    }
  }
  if (data?.remixDevTools) delete data.remixDevTools;
  return data;
};
const getOriginalData = (data: string | Record<string, any>) => {
  if (typeof data === "string") {
    try {
      const val = JSON.parse(data);
      return val;
    } catch (e) {
      return data;
    }
  }
  return data;
};
const PageTab = ({}: PageTabProps) => {
  const routes = useMatches();
  const reversed = routes.reverse();
  const { revalidate, state } = useRevalidator();
  const { isConnected, sendJsonMessage } = useGetSocket();
  return (
    <div className="rdt-flex rdt-flex-col rdt-relative rdt-p-6 rdt-px-6">
      <button
        onClick={() => revalidate()}
        className={clsx(
          "rdt-absolute rdt-z-20 -rdt-right-12 rdt-top-0 rdt-cursor-pointer rdt-rounded-lg rdt-bg-green-500 rdt-text-white rdt-px-3 rdt-py-1 rdt-font-semibold rdt-text-sm",
          state !== "idle" && "rdt-opacity-50 rdt-pointer-events-none"
        )}
      >
        {state !== "idle" ? "Revalidating..." : "Revalidate"}
      </button>
      <ol
        className={clsx(
          "rdt-relative rdt-border-l rdt-border-gray-700",
          state === "loading" && "rdt-opacity-50 rdt-pointer-events-none"
        )}
      >
        {reversed.map((route) => {
          const loaderData = getLoaderData(route.data);
          const originalData = getOriginalData(route.data);

          const isRoot = route.id === "root";
          const lastPart = route.id.split("/").pop();
          const isLayout =
            lastPart?.split(".")?.length === 1 &&
            (lastPart?.startsWith("_") || lastPart?.startsWith("__")) &&
            lastPart !== "_index" &&
            "index";

          return (
            <li key={route.id} className="rdt-mb-8 rdt-ml-8">
              <span className="rdt-absolute rdt-flex rdt-items-center rdt-justify-center rdt-w-6 rdt-h-6 rdt-bg-blue-900 rdt-rounded-full -rdt-left-3 rdt-ring-4 rdt-mt-2 rdt-ring-blue-900  ">
                <CornerDownRight />
              </span>
              <h3 className="rdt-flex rdt-items-center -rdt-mt-3 rdt-mb-1 rdt-text-lg rdt-font-semibold rdt-text-white  ">
                {route.pathname}

                <span
                  className={clsx(
                    "rdt-text-sm rdt-font-medium rdt-mr-1 rdt-px-2.5 rdt-py-0.5 rdt-rounded  rdt-ml-3",
                    ROUTE_COLORS[
                      isRoot ? "ROOT" : isLayout ? "LAYOUT" : "ROUTE"
                    ]
                  )}
                >
                  {isRoot ? "ROOT" : isLayout ? "LAYOUT" : "ROUTE"}
                </span>
                {isConnected && (
                  <button
                    onClick={() =>
                      sendJsonMessage({
                        type: "open-vscode",
                        data: { route: route.id },
                      })
                    }
                    className={clsx(
                      "rdt-text-sm rdt-font-medium rdt-cursor-pointer rdt-items-center rdt-mr-2 rdt-px-2.5 rdt-py-0.5 rdt-rounded rdt-border rdt-border-[#1F9CF0] rdt-text-[#1F9CF0] rdt-flex rdt-gap-1 rdt-ml-1"
                    )}
                  >
                    <VsCode /> Open in VS Code
                  </button>
                )}
              </h3>
              <div className="rdt-mb-4">
                <time className="rdt-block rdt-mb-2 rdt-text-sm rdt-font-normal rdt-leading-none rdt-text-gray-500  ">
                  Route location: {route.id}
                </time>
                <div className="rdt-flex rdt-gap-16">
                  {loaderData && (
                    <div className="rdt-mb-4 rdt-text-base rdt-max-w-md rdt-overflow-x-hidden rdt-font-normal rdt-text-gray-400">
                      Route loader data:
                      {<JsonRenderer data={loaderData} />}
                    </div>
                  )}
                  {route.params && Object.keys(route.params).length > 0 && (
                    <div className="rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400">
                      Route params:
                      <JsonRenderer data={route.params} />
                    </div>
                  )}
                  {route.handle && Object.keys(route.handle).length > 0 && (
                    <div className="rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400">
                      Route handle:
                      <JsonRenderer data={route.handle} />
                    </div>
                  )}
                  {originalData?.remixDevTools?.timers?.length && (
                    <div className="rdt-mb-4 rdt-text-base rdt-font-normal  rdt-text-gray-400">
                      <div className="rdt-mb-1">
                        Registered timers for route:
                      </div>
                      {originalData?.remixDevTools?.timers.map(
                        (timer: { name: string; duration: number }) => {
                          return (
                            <div
                              key={timer.name}
                              className="rdt-text-sm rdt-flex rdt-gap-4 rdt-justify-between rdt-font-normal rdt-text-white"
                            >
                              <div>{timer.name} </div>
                              <div>
                                {(timer.duration / 1000).toPrecision(2)}s (
                                {timer.duration}ms)
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export { PageTab };
