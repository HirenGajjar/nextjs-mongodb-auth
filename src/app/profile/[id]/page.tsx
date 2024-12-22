import React from "react";

function page({ params }: any) {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen justify-center p-2">
        Profile with id {params.id}
      </div>
    </>
  );
}

export default page;
