import { useSelector } from "react-redux";

export default function ProtectedContent() {
  const { currentUser } = useSelector((state: any) => state.accountReducer)
  let isFaculty : boolean = false;
  
  if (currentUser.role === "FACULTY") { 
    isFaculty = true;
  } 
  return isFaculty;
  
}