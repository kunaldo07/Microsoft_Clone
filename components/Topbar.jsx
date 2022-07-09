import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

// import the icons you need
import {
  faSearch,
  faCartShopping,
  faSignIn
} from "@fortawesome/free-solid-svg-icons";


const Topbar = () => {
  return (
    <>
    <div class="topbar flex h-12 text-3xl ml-20 mr-20 mt-2 justify-between">
        <div class="first-part w-[50%] flex items-center">
            <ul class="text-sm flex">
              <img class="w-50 h-9" src="/microsoft_PNG20.png" alt="Microsoft"/>
              <li class="cursor-pointer py-2 ml-4 hover:underline">Microsoft 365</li>
              <li class="cursor-pointer py-2 ml-4 hover:underline">office</li>
              <li class="cursor-pointer py-2 ml-4 hover:underline">Windows</li>
              <li class="cursor-pointer py-2 ml-4 hover:underline">Surface</li>
              <li class="cursor-pointer py-2 ml-4 hover:underline">Xbox</li>
              <li class="cursor-pointer py-2 ml-4 hover:underline">Special offers</li>
              <li class="cursor-pointer py-2 ml-4 hover:underline">Support</li>
            </ul>
        </div>
        <div class="second-part w-[50%] flex items-center justify-end">
            <ul class="text-sm flex">
              <li class="cursor-pointer py-1 hover:underline mr-5">Everything from Microsoft</li>
              <div class="flex mr-5 py-1">
                <li class="cursor-pointer hover:underline">Search</li>
                <FontAwesomeIcon style={{marginTop: 3, marginLeft:2}} icon={faSearch}/>
              </div>
              <div class="flex mr-5 py-1">
                <li class="cursor-pointer hover:underline">Cart</li>
                <FontAwesomeIcon style={{marginTop: 3, marginLeft:2}} icon={faCartShopping}/>
              </div>
              <div class="flex mr-2 py-1">
                <li class="cursor-pointer hover:underline">Sign in</li>
                <FontAwesomeIcon style={{marginTop: 3, marginLeft:2}} icon={faSignIn}/>
              </div>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Topbar;