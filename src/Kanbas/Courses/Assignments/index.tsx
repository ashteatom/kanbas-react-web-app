import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsGripVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons"
import LessonControlButtons from "./LessonControlButtons";
import { PiNotebookBold } from "react-icons/pi";

export default function Assignments() {
    return (
      <div id="wd-assignments" className = "text-nowrap">
        {/* <span className = "input-group"> */}
        <CiSearch className = "me-2 fs-3 "/>
        <input id="wd-search-assignment"
            placeholder="Search..." className = "me-2"/>
        {/* </span> */}

        {/* <span className = " wd-float-right"> */}
        <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button> 

        <button id="wd-add-assignment-group" className="btn btn-lg btn-danger me-1">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button> 
        {/* </span> */}

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

      <ul className="wd-lesson list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <PiNotebookBold className="text-success me-2 fs-3"/>
          <a className="wd-assignment-link text-dark text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/123">
                <b>A1</b>
          </a>
          <LessonControlButtons />
             <div className ="me-2 fs-6 ps-5 ms-4">
             <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |  
              </div>
             <div className ="me-2 fs-6 ps-5 ms-4">
                <b>Due</b> May 13 at 11:59pm | 100 pts  
              </div>

        </li>
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <PiNotebookBold className="text-success me-2 fs-3"/>
          <a className="wd-assignment-link text-dark text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/123">
              <b>A2</b>
          </a> 
          <LessonControlButtons />
          <div className ="me-2 fs-6 ps-5 ms-4">
              <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | 
          </div>
          <div className ="me-2 fs-6 ps-5 ms-4">
              <b>Due</b> May 20 at 11:59pm | 100 pts  
          </div>

          
        </li>
        <li className="wd-assignment-list-item list-group-item p-3 ps-1">

          <BsGripVertical className="me-2 fs-3 ms-auto" />
          <PiNotebookBold className="text-success me-2 fs-3"/>

          <a className="wd-assignment-link text-dark text-decoration-none"
              href="#/Kanbas/Courses/1234/Assignments/123">
              <b>A3</b>
          </a>
          <LessonControlButtons />
          <div className ="me-2 fs-6 ps-5 ms-4">
          <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |  
          </div>
          <div className ="me-2 fs-6 ps-5 ms-4">
            <b>Due</b> May 27 at 11:59pm | 100 pts  
          </div>

         
        </li>
       
      </ul>
    </li>
    
  </ul>

        
      </div>
  );}
  
  