import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({params:{userId}}:SearchParamProps) {
    const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id} setOpen={function (open: boolean): void {
              throw new Error("Function not implemented.");
            } }          
            />
          <div className="copyright py-6 mt-10">
              ©️ 2024 CarePulse
          </div>
        </div>
      </section>
      <Image
      src={"/assets/images/appointment-img.png"}
      height={1000}
      width={1000}
      alt="appoinment"
      className="side-img max-w-[390px] bg-bottom"
      />
    </div>    
  );
}
