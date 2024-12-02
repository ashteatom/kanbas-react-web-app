import { useSelector } from "react-redux";

export default function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer)
  const isFaculty = currentUser.role === "FACULTY";
  
  if (isFaculty) { 
    return <>{children}</>;
  } 
  else {
    return null;
  }
  
}