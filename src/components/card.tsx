import React from 'react';

interface IdCard{
  name: string;
  age: number;
  rollNumber: string;
  className: string;
}
export default function Card(props:IdCard){
    const {name,age,rollNumber,className}=props
    return(

        <div className="max-w-xs mx-[40px] mb-[40px] mt-[40px] bg-white rounded-lg shadow-black shadow-2xl overflow-hidden">
      <div className="mt-[20px]">
        <h2 className="text-4xl font-semibold text-center mt-[10px] mx-[40px] text-blue-950">{name}</h2>
        <div className="text-sm  mb-[20px] ml-[20px] text-blue-950">
          <p className='mt-[10px]'><strong>Age:</strong> {age}</p>
          <p className='mt-[10px]'><strong>Roll Number: </strong> {rollNumber}</p>
          <p className='mt-[10px]'><strong>Class:</strong> {className}</p>
        </div>
      </div>
    </div>
    )
}