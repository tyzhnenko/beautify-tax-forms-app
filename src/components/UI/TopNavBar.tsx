import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/forms" className="flex items-center">
          Доступні форми
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-gray-300 mx-auto max-w-screen-2xl py-1 px-1 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="li"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/">
            <span>Нормальні податкові форми</span>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/about" className="flex items-center">
            Опис
          </Link>
        </Typography>
      </div>
    </Navbar>
  );
}
