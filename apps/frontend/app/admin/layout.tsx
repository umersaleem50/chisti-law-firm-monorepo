import Navbar from "@/Components/Stateful/Navbar/navbar";
import Dashboard_Filter from "@/Components/Stateless/Dashboard_Filter/Dashboard_Filter";
import Protected from "@/providers/protectedProvider";

function Auth_Layout({children}:{children:any}) {
  return (
    <Protected>
      <Navbar />
      <Dashboard_Filter>
        {children}
      </Dashboard_Filter>
    </Protected>
  );
}

export default Auth_Layout;
