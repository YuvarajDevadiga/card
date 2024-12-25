import React from "react";

const Card = ({ data }) => {
  if (!data) return null;
  const { name, gender, phone, picture } = data;
  console.log(name);
  return (
    <div className="flex p-4  gap-10 w-fit  border-gray-500 rounded-lg shadow-lg  hover:shadow-md hover:shadow-[#434343a2] hover:scale-105 transition-all cursor-pointer">
      <div>
        <img className="rounded-lg" src={picture.large} alt="" />
      </div>
      <div>
        <div>
          <p className="text-[#292964]">Name</p>
          <h3 className="text-xl font-bold  -mt-1 ">
            {name.first} {name.last}
          </h3>
        </div>
        <div>
          <p className="text-[#292964]">Gender</p>
          <p className="-mt-1 capitalize">{gender}</p>
        </div>
        <div>
          <p className="text-[#292964]">Phone</p>
          <p className="-mt-1 ">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
