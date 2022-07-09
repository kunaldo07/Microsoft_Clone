
import data from '../data/footer';

const Footer = () => {
  return (
    <>
    <div class="bg-gray-200 py-8 flex justify-center">
        {data.map((vals) => {
            return (
            <div class="px-10">
                <div>
                    <h3 class="font-semibold text-gray-600">{vals.title}</h3>
                    <ul>
                        {vals.hrefs.map((href) => {
                            return (
                                <li class="text-xs hover:underline text-gray-600 py-2">{href}</li>
                            )
                        })}
                    </ul>
                </div>
            </div> 
            )
         })}
    </div>
    </>
  )
}

export default Footer