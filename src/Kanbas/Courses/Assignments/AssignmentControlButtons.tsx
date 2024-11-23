import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import ProtectedContent from "../../Account/ProtectedContent";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}

