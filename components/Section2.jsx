
import data from '../data/section2';
import Image from 'next/image';

const Section2 = () => {

   // console.log(data);

  return (
    <>
    <div class="mx-20 flex justify-center">
        {data.map((vals) => {
        return (
            <div class="mx-10 w-1/4">
                <img class="object-contain mb-2" src={vals.image}/>
                <h3 class="font-semibold mt-5 text-lg">{vals.title}</h3>
                <p class="hover:underline cursor-pointer">{vals.desc}</p>
                <button class="cursor-pointer font-bold text-blue-600 py-2 hover:underline">{vals.link}</button>
            </div> 
            )
         })}
    </div>
    </>
  )
}

export default Section2;