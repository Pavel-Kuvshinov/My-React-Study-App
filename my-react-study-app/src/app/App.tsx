import './App.css'
import { Routes, Route } from 'react-router'
import Layout from '../pages/Layout'
import HomePage from '../pages/HomePage/HomePage'
import UncontrolledForm from '../pages/UncontrolledForm/UncontrolledForm'
import ReactHookForm from '../pages/ReactHookForm/ReactHookForm'
import Page404 from '../pages/Page404/Page404'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="uncontrolled-form" element={<UncontrolledForm />} />
          <Route path="react-hook-form" element={<ReactHookForm />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
