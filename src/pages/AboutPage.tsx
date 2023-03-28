import { Typography } from "@material-tailwind/react";
import useTitle from "../utils/useTitle";

function AboutPage() {
  useTitle("Про проект");

  return (
    <div className="container w-auto px-10">
      <Typography as="article" className="pt-16">
        <h1 className="text-4xl text-center pb-10">Про проект</h1>

        <p className="pt-5">
          Якщо у вас є побажання чи ви знайшли помилки додайте їх опис{" "}
          <a
            className="underline"
            href="https://github.com/tyzhnenko/beautify-tax-forms-app/issues"
          >
            сюди
          </a>
        </p>
        <p className="pt-5">
          Пошта для звʼязку{" "}
          <a className="underline" href="mailto:beautifytaxforms@j4f.app">
            beautifytaxforms@j4f.app
          </a>
        </p>
      </Typography>
    </div>
  );
}

export default AboutPage;
