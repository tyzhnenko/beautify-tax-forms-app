import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useTitle from "../utils/useTitle";

function HomePage() {
  useTitle("Головна сторінка");

  return (
    <div className="container flex flex-col justify-between">
      <div className="pt-15">
        <Typography as="article">
          <h1 className="text-4xl text-center pb-10">Нормальні форми ДФС</h1>
          <p className="pt-5">
            Цей проект присвячиний для того щоб дати можливість працювати з
            формами які ДФС України надає у XML форматах.
          </p>
          <p className="pt-5">
            Якщо у вас колись виникали складнощі в перенесені данних з форм які
            надає ДФС до табличних редакторів. Ласкаво просимо.
          </p>
          <p className="pt-5">
            Список форм/звітів які підтримуються можна подивитись на сторінці{" "}
            <Link className="underline" to="/forms">
              форм
            </Link>
          </p>
          <p className="pt-5">
            Усі данні обробляються <i>у вас в браузері</i>. Цей проект не
            зберігає жодних данних на стороні сервера.
          </p>
          <p className="pt-5">
            На поекті використувється система Google Analitics та їх cookie
            ідентифікатори.
          </p>
        </Typography>
      </div>
    </div>
  );
}

export default HomePage;
