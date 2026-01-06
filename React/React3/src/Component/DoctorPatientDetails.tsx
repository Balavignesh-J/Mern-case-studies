import { useParams } from "react-router-dom";

interface AppointmentParams {
  doctorId: string;
  patientId: string;
}

const DoctorPatientDetails = () => {
    const { doctorId, patientId } = useParams<AppointmentParams>();
    if (!doctorId || !patientId) {
        return <div>Missing or invalid parameters</div>
    }
    const doctor = Number(doctorId);
    const patient = Number(patientId);

    if (isNaN(doctor) || isNaN(patient)) {
        return <div>Doctor ID and Patient ID must be numeric</div>;
    }
    return (
        <>   
        <div>
            <p>Doctor ID:{doctorId}</p>
            <p>Patient ID:{patientId}</p>
        </div>
        </>
    )
}

export default DoctorPatientDetails