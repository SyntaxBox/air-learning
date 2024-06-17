import Link from "next/link";

export function NavLinks({ links }: { links: string[] }) {
  return (
    <div className="w-full">
      <div
        className="w-full md:flex md:w-auto md:order-1 backdrop-blur"
        id="navbar-cta"
      >
        <ul className="flex flex-col gap-2 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          {links.map((link: string) => (
            <li key={link}>
              <Link
                href={`/${link}`}
                className="block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 capitalize"
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://github.com/cargopip/air-learning"
              type="button"
              className="block py-2 pl-3 pr-4 text-slate-700 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 capitalize"
            >
              Repo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
