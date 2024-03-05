import Typography from "@/Components/Typography/Typography";
import CasesTable from "@/Components/tables/cases/casesTable";

export default function Page({}) {
  return (
    <div style={{ maxWidth: "65vw" }}>
      <Typography vairent="h6" component="h5">
        Your Cases
      </Typography>
      {/* <Appointment_Table /> */}
      <CasesTable />
    </div>
  );
}
