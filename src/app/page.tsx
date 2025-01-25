 // named import

// it is individual page , these are pages are  not be imported anywhere it should be default export

import { Header } from "./components/Header"
// default import
import Content from "./components/Content"

// default export ( default keyword)
const Home=()=>{
    return <div>
      <h1>this is home Page</h1>
      <Header/>
      <Content/>
    
  </div>
}

export default Home
