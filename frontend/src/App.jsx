import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const Common = lazy(() => import("./components/Common"));
const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const Error = lazy(() => import("./pages/Error"))

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/' element={<Common />}>
              <Route index element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App