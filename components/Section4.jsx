
import data from '../data/section4';

const Section4 = () => {
  return (
    <>
    <div class="mx-20 flex justify-center py-8">
        {data.map((vals) => {
        return (
            <div class="mx-10 w-1/4">
                <img class="object-fill mb-2" src={vals.image}/>
                <h3 class="font-semibold mt-5 text-lg">{vals.title}</h3>
                <p class="hover:underline cursor-pointer">{vals.desc}</p>
                <button class="cursor-pointer font-bold text-blue-600 hover:underline py-2">{vals.link}</button>
            </div> 
            )
         })}
    </div>
    </>
  )
}

export default Section4