import { Link } from "react-router-dom";
import { availableForms } from "../components/forms";
import useTitle from "../utils/useTitle";

function FormsPage() {
  useTitle("Доступні форми");

  return (
    <div className="pt-10">
      <h1 className="text-4xl text-center pb-10">Доступні форми</h1>
      {availableForms.map((form) => (
        <div className="grid grid-cols-12" key={form.name}>
          <div className="col-span-3 text-center">
            <Link to={`/forms/${form.name}`}>{form.name}</Link>
          </div>
          <div className="col-span-9">{form.description}</div>
        </div>
      ))}
    </div>
  );
}

export default FormsPage;
