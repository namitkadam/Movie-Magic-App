import "./App.css";

import { PublicRouter } from "./Routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  // const [getData, setgetData] = useState(null);
  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get(`/trending/all/week`);
  //     setgetData(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getApiData();
  // }, []);
  // if (getData === null) {
  //   return <p>Loading..</p>;
  // }
  // console.log(
  //   "text-->",
  //   getData.results.map((x) => x)
  // );

  return (
    // <div className="">
    //   <Header />
    //   <div className="flex">
    //     <LeftSide />
    //     <RightSide />
    //   </div>
    // </div>
    <>
      <RouterProvider router={PublicRouter} />
    </>
  );
}

export default App;
