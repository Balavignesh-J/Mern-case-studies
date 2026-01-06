import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorPatientDetails from './Component/DoctorPatientDetails'
import Doctorname from './Component/Doctorname';
import DoctorPatient from './Component/DoctorPatient';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/doctors"} element={<Doctorname/>}/>
        <Route path={"/doctors/:doctorId/patients"} element={<DoctorPatient/>}/>
        <Route path={"/doctors/:doctorId/patients/:patientId"} element={<DoctorPatientDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App