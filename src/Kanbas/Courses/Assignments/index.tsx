import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons"
import LessonControlButtons from "./LessonControlButtons";
import { PiNotebookBold } from "react-icons/pi";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assign = db.assignments;


    return (
      <div id="wd-assignments" className = "text-nowrap">
        
        <CiSearch className = "me-2 fs-3 "/>
        <input id="wd-search-assignment"
            placeholder="Search..." className = "me-2"/>
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button> 

        <button id="wd-add-assignment-group" className="btn btn-lg btn-danger me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button> 
      
      <ul id="wd-assignments" className="list-group rounded-0">

      <li className="wd-assignments list-group-item p-0 mt-5 mb-5 fs-5 border-gray">
      
      <div className="wd-assignments-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" />
        <IoIosArrowDown className="me-2 fs-3"/>
          ASSIGNMENTS
          <AssignmentControlButtons />
          <div className = "container form-control w-25 wd-rounded-corners-all-around bg-secondary border-gray float-end" >
            40% of Total
          </div>

        
       
      </div>
      
      {assign
          .filter((assign: any) => assign.course === cid)
          .map((assign: any) => (


      <ul className="wd-lesson list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <PiNotebookBold className="text-success me-2 fs-3"/>
          <a className="wd-assignment-link text-dark text-decoration-none"
              href={`#/Kanbas/Courses/${assign.course}/Assignments/${assign._id}`}>
                <b>{assign.title}</b>
          </a>
          <LessonControlButtons />
             <div className ="me-2 fs-6 ps-5 ms-4">
             <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {assign.start} |  
              </div>
             <div className ="me-2 fs-6 ps-5 ms-4">
                <b>Due</b> {assign.end} | {assign.points}  
              </div>
        </li>
      </ul>

          ))}
    </li>
    
  </ul>

        
      </div>
  );}
  
  