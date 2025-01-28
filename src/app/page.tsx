 // named import

// it is individual page , these are pages are  not be imported anywhere it should be default export

import { Header } from "./components/Header"
// default import
import Content from "./components/Content"
import { UsingHooksComponent } from "./components/26-1-2025-hooks/UsingHooksComponent"
import {BasicButtonClick} from "./components/26-1-2025-hooks/BasicButtonClick"

// default export ( default keyword)
const Home=()=>{
    return <div>
      {/* <h1>this is home Page</h1>
      <Header/>
      <Content/>
      <UsingHooksComponent/> */}
      <BasicButtonClick />
    
  </div>
}

export default Home
