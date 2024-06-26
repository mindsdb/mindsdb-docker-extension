import { useEffect } from "react";

/**
 * App component
 * This component will render the loading screen while MindsDB server is starting
 * It will continuously check if MindsDB server is ready to serve requests
 * Once the server is ready, it will redirect to the MindsDB editor
 * @returns JSX.Element
 */

export function App() {
  /**
   * Function to check if MindsDB server is ready
   * If the server is ready, it will redirect to the MindsDB editor
   * If the server is not ready, it will wait for 2 seconds and try again
   * @returns void
   */
  const checkMindsDBServer = () => {
    fetch("http://localhost:47334/editor")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server not ready");
        }
        window.location.href = "http://localhost:47334/editor";
      })
      .catch((error) => {
        // Server not ready yet. Wait for 2 seconds and try again
        setTimeout(checkMindsDBServer, 2000);
      });
  };

  useEffect(() => {
    checkMindsDBServer();
  }, []);

  return (
    <div className="font-sans relative flex w-full content-center min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 items-center">
      <svg
        className="animate-pulse"
        width="94"
        height="52"
        viewBox="0 0 94 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66.5602 26.2729C67.6357 34.7128 68.6338 42.6369 69.67 50.5525C69.7928 51.5007 69.5963 51.8353 68.5344 51.8885C62.1391 52.2061 62.1428 52.2315 59.831 46.4081C58.8685 43.9849 57.9305 41.5521 56.9053 39.1532C56.6797 38.7589 56.5965 38.301 56.6691 37.8542C56.7418 37.4074 56.9661 36.998 57.3056 36.6926C60.3307 33.3877 63.2772 29.9934 66.5602 26.2729Z"
          fill="#00A587"
        />
        <path
          d="M28.9698 33.3467C29.8857 37.9924 30.7893 42.3591 31.5848 46.7451C31.8304 48.1028 32.9354 49.8278 31.99 50.7458C31.1748 51.5346 29.3651 50.4185 27.9741 50.4692C24.2787 50.6069 22.5586 48.8989 21.9583 45.3125C21.6059 43.2071 21.45 41.7491 23.2142 40.1184C25.2736 37.9807 27.1959 35.7191 28.9698 33.3467V33.3467Z"
          fill="#00A587"
        />
        <path
          d="M39.406 41.8205C39.406 39.2114 39.3655 36.6022 39.4256 33.9943C39.4489 32.97 39.1592 32.6245 38.053 32.5883C30.5066 32.3426 22.9618 32.0447 15.4187 31.6944C14.2339 31.64 13.7662 31.971 13.5145 33.1234C12.3506 38.46 11.0295 43.7653 9.89267 49.108C9.57347 50.6083 8.99154 51.1615 7.39672 50.9912C5.62717 50.8107 3.84572 50.7703 2.06959 50.8704C0.731372 50.9368 0.473554 50.3872 0.493197 49.2409C0.608604 41.2274 0.779265 33.214 0.700691 25.2029C0.686197 22.7378 1.52296 20.3408 3.0739 18.4046C7.24817 12.6971 11.269 6.88697 15.3131 1.09128C15.5312 0.694426 15.8745 0.378042 16.2913 0.189807C16.708 0.00157144 17.1756 -0.0483383 17.6237 0.0476067C32.7026 1.63484 47.7873 3.17254 62.8777 4.66072C63.8215 4.77204 64.7227 5.11105 65.5013 5.64761C74.4809 11.3889 83.4445 17.1508 92.4695 22.8221C93.82 23.6676 93.8569 24.1508 92.5592 24.9154C92.2797 25.0639 92.0301 25.2612 91.8225 25.4976C89.2234 28.8014 86.175 28.6528 82.4918 27.1888C78.0401 25.424 73.3452 24.2535 68.7805 22.7532C68.3461 22.58 67.8751 22.5143 67.4088 22.5621C66.9425 22.61 66.4953 22.7697 66.1066 23.0274C61.9077 25.5931 57.6897 28.1273 53.4524 30.6302C53.0707 30.8313 52.7448 31.1211 52.5028 31.4743C52.2608 31.8275 52.1101 32.2335 52.0638 32.6571C51.1344 38.1653 50.0712 43.6493 49.2167 49.172C48.9712 50.7544 48.3979 51.2557 46.7994 51.1458C44.7693 51.0276 42.7341 51.0244 40.7037 51.1361C39.4993 51.1893 39.1911 50.7737 39.2304 49.6443C39.309 47.0364 39.255 44.4248 39.255 41.8157L39.406 41.8205Z"
          fill="#00A587"
        />
      </svg>
      <p className="mt-6 text-zinc-800">Hang tight! MindsDB is starting..</p>
      <p className="mt-4 text-zinc-600 font-light">
        Connect a new database or app, or add a model.
      </p>
    </div>
  );
}
