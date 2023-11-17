// default export
import Profile from "./1.DescribingUI/1.1.YourFirstComponent";
// named export
import { Gallery } from "./1.DescribingUI/1.2.ImportingAndExporting";
import ProfileJSX from "./1.DescribingUI/1.4.JSInJSX";
import ProfileJSXWithProps from "./1.DescribingUI/1.5.PassingPropsToComponents";
import ProfileWithChildren from "./1.DescribingUI/1.5.x.PassingJSXAsChildren";
import ConditionalRendering from "./1.DescribingUI/1.6. ConditionalRendering";
import RenderingLists from "./1.DescribingUI/1.7.RenderingLists";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <Gallery />
      <ProfileJSX />
      <ProfileJSXWithProps
        src={"https://i.imgur.com/MK3eW3As.jpg"}
        alt={"Katherine Johnson"}
      />
      <ProfileWithChildren>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </ProfileWithChildren>
      <p>Play around with the boolean values in the code</p>
      <ConditionalRendering
        conditionallyReturn={false}
        conditionallyReturnNothing={false}
        conditionallyIncludeJSX={true}
        conditionallyAssignToAVariable={false}
      />
      <RenderingLists />
    </div>
  );
}

export default App;
