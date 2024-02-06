import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchVideo from "./components/WatchVideo";



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Maincontainer />,
      },
      {
        path: 'watch',
        element: <WatchVideo />,
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )

  {/**
    Header
    Body
      - Sidebar
        - MenuItem
      - MainContainer
          - Button List
          - Video Container
          - Video Card
**/}
}

export default App;