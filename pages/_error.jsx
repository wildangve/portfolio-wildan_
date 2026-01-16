import React from "react";

function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-charcoal text-elegant-white font-source">
      <h1 className="text-5xl font-bold mb-4">{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p className="text-lg mb-8">{statusCode ? `A server-side error occurred: ${statusCode}` : "A client-side error occurred."}</p>
      <a href="/" className="px-6 py-3 rounded bg-accent-gold text-charcoal font-semibold hover:bg-elegant-white transition">Back to Home</a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
