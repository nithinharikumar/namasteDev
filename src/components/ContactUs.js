import React, { useState } from "react";

const Contactus = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white border border-slate-100 rounded-3xl shadow-xl">
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">📬</div>
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
          Tell Our Chefs <span className="text-rose-500">What You're Craving</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Have a recipe suggestion, a bug report, or just want to send compliments to the kitchen? Get in touch!
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center animate-fade-in">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="font-bold text-emerald-800 text-lg mb-1">Recipe Received!</h3>
          <p className="text-emerald-600 text-sm">
            Our chefs have received your message and will start cooking up a response right away.
          </p>
        </div>
      ) : (
        <form 
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="block text-slate-650 font-bold text-xs mb-1">Your Name</label>
            <input 
              type="text" 
              required
              placeholder="Gourmet Foodie" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-slate-655 font-bold text-xs mb-1">Your Email</label>
            <input 
              type="email" 
              required
              placeholder="foodie@njamnjam.com" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-slate-655 font-bold text-xs mb-1">What's on your Mind? (Suggestion / Feedback)</label>
            <textarea 
              required
              rows="4"
              placeholder="Write your review, recipe idea, or custom orders here..." 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-rose-500 text-white font-bold py-3 rounded-xl hover:bg-rose-600 transition-colors shadow-md cursor-pointer"
          >
            Send to Kitchen 🚀
          </button>
        </form>
      )}
    </div>
  );
};

export default Contactus;
