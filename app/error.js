"use client";

function Error({ error }) {
     return (
          <div className="w-full h-screen flex items-center justify-center">
               <div>{error.message}</div>
          </div>
     );
}

export default Error;
