import type { Route } from "./+types/home";

export function loader() {
  return { name: "React Router" };
}

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
      <div className="text-center p-4">
        <h1 className="text-2xl">Hello, {loaderData.name}</h1>
        <a
          className="block mt-2 text-blue-500 underline hover:text-blue-600"
          href="https://reactrouter.com/docs"
        >
          React Router Docs
        </a>
      </div>
    </div>
  );
}
