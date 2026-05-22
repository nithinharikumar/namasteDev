import { useRouteError } from "react-router-dom";
import gif from "url:../assets/public/404.gif";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="max-w-xl mx-auto my-12 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl text-center">
      <img
        src={gif}
        alt="burnt recipe error"
        className="h-[300px] w-auto rounded-3xl mx-auto mb-6 object-cover shadow-sm"
      />
      <h1 className="text-3xl font-black text-rose-500 mb-2">
        Oh No! The Chef Burnt the Page!
      </h1>
      <p className="text-slate-600 font-bold text-base mb-6">
        Our recipe book doesn't contain this link.
      </p>
      <div className="inline-block bg-slate-50 border border-slate-150 px-4 py-2 rounded-xl text-slate-500 font-mono text-sm mb-8">
        {err?.status ? `${err.status} : ${err.statusText}` : "Oops! Something went wrong in our kitchen."}
      </div>
      <div>
        <a 
          href="/" 
          className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-md inline-block"
        >
          Back to Main Menu 🏠
        </a>
      </div>
    </div>
  );
};

export default Error;
