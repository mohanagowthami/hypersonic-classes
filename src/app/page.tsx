 // named import

// it is individual page , these are pages are  not be imported anywhere it should be default export

import { Header } from "./components/Header"
// default import
import Content from "./components/Content"
import { UsingHooksComponent } from "./components/26-1-2025-hooks/UsingHooksComponent"
import {BasicButtonClick} from "./components/26-1-2025-hooks/BasicButtonClick"
import BasicPropExampleParent from "./components/31-1-2025-props/BasicPropExample"
import TodoList from "./components/1-2-2025-todo-industry-standards/TodoList"
import {SimpleLiftingStateUpParent} from"./components/1-2-2025-todo-industry-standards/SimpleLiftingStateUpExample"

// default export ( default keyword)
const Home=()=>{
    return <div>
      {/* <h1>this is home Page</h1>
      <Header/>
      <Content/>
      <UsingHooksComponent/> */}
      {/* <BasicButtonClick /> */}
      {/* <BasicPropExampleParent/> */}
      {/* <TodoList/> */}
      <SimpleLiftingStateUpParent/>
    
  </div>
}

export default Home
