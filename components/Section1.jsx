
import data from "../data/section1";

const Section1 = () => {


  return (
    <>
        <div class="mx-20 flex py-14 justify-center">
            {data.map((vals) => {
              return (
                <div class="w-24 mx-10 justify-center">
                  <img class="py-2 mx-6" src={vals.image}/>
                  <p class="hover:underline cursor-pointer text-center font-semibold">{vals.text}</p>
                </div> 
              )
            })}
        </div>
    </>
  )
}

export default Section1;