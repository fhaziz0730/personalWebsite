import type { Route } from "./+types/home";

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <div className="flex justify-end text-center p-4 bg-yellow-600">
        <a
          className="block mt-2 transition-transform duration-500 ease-in-out hover:scale-150"
          href="https://github.com/fhaziz0730"
        >
          <img
            className="h-6 w-12 object-contain transition-transform duration-500 ease-in-out hover:scale-150"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="Github Profile Link"
          />
        </a>
      </div>
      <div className="flex justify-around bg-orange-200">
        <div className="flex-col justify-start text-left p-4">
          <h1 className="text-9xl/relaxed transition-opacity duration-500 ease-in-out font-serif">
            HEY,
            <br />
            I'M
            <br />
            FAIYAZ AZIZ
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
