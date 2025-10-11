import React from "react";
import ticket from "./assets/icons8-ticket-80 (1).png";

const Cards = ({image,heading,description}) => {
  return (
    <div className="rounded-xl w-100 mt-12 gap-3 py-6 px-6 border border-gray-200 bg-white flex flex-col justify-center items-center">
      <img src={image} alt="ticket" width={40} height={40} />
      <h3 className="text-2xl font-semibold">{heading}</h3>
      <p className="text-center text-gray-500">
       {description}
      </p>
    </div>
  );
};

export default Cards;
