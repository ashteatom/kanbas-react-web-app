import { useParams } from "react-router";
//import * as db from "../../Database";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { Link,  useNavigate  } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findAssignment = assignments.find((a: any) => aid === a._id);

  const [assignment, adjustAssignment] = useState(() => {
    if (findAssignment) {
      return findAssignment;
    }
    else {
      return {
        title: "New Title", 
        course: "New Course", 
        start: "New Start",
        end: "New End",
        release: "0000-00-00",
        due: "0000-00-00",
        until: "0000-00-00",
        points: "New Points",
        assignTo: "New Assign",
        assignDes: "New Description",

      }
    }
  })

 
  const dateConverter = (dateNumericalString: string) : string => {
    const date = new Date(dateNumericalString)
    const options : Intl.DateTimeFormatOptions = { month: "long", day: "numeric" }; 
    return date.toLocaleDateString("en-US", options);
  }

  const createAssignmentForCourse = async () => {
    if (cid) {
      const newAssignment = { ...assignment, course: cid };
      const assignmentAdded = await coursesClient.createAssignmentForCourse(cid, newAssignment);
      dispatch(addAssignment(assignmentAdded));
    }
    else {
      return
      // add error statement? like course not found
    }
  }

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  }

  const savePressed = () => {
    if (assignment.title && 
      assignment.course && 
      assignment.release && 
      assignment.due &&
      assignment.until &&
      assignment.points &&
      assignment.assignDes
) {
      if (aid === "New") {
        createAssignmentForCourse();
      }
      else {
        saveAssignment(assignment);
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  }


    return (
      
      <div id="wd-assignments-editor">
        
        <div>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value={assignment.title} className="form-control mb-2"
        onChange={(e) => adjustAssignment({...assignment, title: e.target.value })}
        />
        
        <textarea id="wd-description" className="form-control mb-2"
        onChange={(e) => adjustAssignment({...assignment, release: e.target.value })}>
          {assignment.assignDes}
        </textarea>
        

        <div className = "container">
          <div className = "row">
            <div className = "col">
              <label htmlFor="wd-points" className = " mt-2 float-end">Points</label>
            </div>
            <div className = "col">
              <input id="wd-points" value={assignment.points} className="form-control mb-2"
              onChange={(e) => adjustAssignment({...assignment, points: e.target.value })}
              />
            </div>
          </div>

            <div className = "row">
            <div className = "col">
              <label htmlFor="wd-group" className = "float-end mt-2">Assignment Group</label>
            </div>
            <div className = "col">
              <select id="wd-group" className="form-select mb-2"> <option>ASSIGNMENTS</option></select>
            </div>
          </div> 

            <div className = "row">
            <div className = "col">
              <label htmlFor="wd-display-grade-as" className = "float-end mt-2">Display Grade as</label>
            </div>
            <div className = "col">
              <select id="wd-display-grade-as" className="form-select mb-2"> <option>Percentage</option></select>
            </div>
          </div> 

           <div className = "row">
            <div className = "col">
              <label htmlFor="wd-submission-type" className = "float-end mt-2">Submission Type</label>
            </div>
            <div className = "col">
              <div className="form-control mb-2">
              
              
                <select id="wd-submission-type" className="form-select mb-2 mt-2"> <option>Online</option></select>
                
                <div className = "row">
                  <label className="mb-2 mt-2"><b>Online Entry Options</b></label>
                </div>
              
                  <div>
                  <input type="checkbox" name="type1" id="wd-text-entry" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                  </div>
              
                  <div>
                  <input type="checkbox" name="type2" id="wd-website-url" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                  </div>

                  <div>
                  <input type="checkbox" name="type3" id="wd-media-recordings" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                  </div>
               

                  <div>
                  <input type="checkbox" name="type4" id="wd-student-annotation" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                  </div>
                

                  <div>
                  <input type="checkbox" name="type5" id="wd-file-upload" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                  </div>
                
                
              </div>
            </div>
          </div> 

          <div className = "row">
            <div className = "col">
              <label htmlFor="wd-assign-to" className = "float-end me-2 mt-2">Assign</label>
            </div>
            <div className = "col">
              <div className="form-control mb-2">
                <div className = "row">
                  <label htmlFor="wd-assign-to" className = "me-2 mt-2"><b>Assign to</b></label>
                </div>
                <input id="wd-assign-to" className="form-control" value={assignment.assignTo}
                onChange={(e) => adjustAssignment({...assignment, assignTo: e.target.value })}/>

                <div className = "row">
                  <label htmlFor="wd-due-date" className = "me-2 mt-2"> <b>Due</b> </label>
                </div>
                <input type="date" id="wd-available-from" className="form-control" value= {assignment.due}
                onChange={(e) => adjustAssignment({...assignment, due: e.target.value })}
                />

                <div className = "row">
                  <div className = "col">
                    <label htmlFor="wd-available-from" className = "me-2 mt-2"> <b>Available from</b> </label>
                    <div className ="row">
                      <input type="date" id="wd-available-from" className="form-control" value={assignment.release}
                       onChange={(e) => adjustAssignment({...assignment, release: e.target.value, start: dateConverter(e.target.value) + " at 12:00am" })}
                      />
                    </div>
                  </div>
                  <div className = "col">
                  <label htmlFor="wd-available-to" className = "me-2 mt-2"> <b>Until</b> </label>
                    <div className ="row">
                    <input type="date" id="wd-available-to" className="form-control" value={assignment.until}
                    onChange={(e) => adjustAssignment({...assignment, until: e.target.value, due: e.target.value, end: dateConverter(e.target.value) + " at 11:59pm", })}
                    />
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>

          <hr></hr>
            <div className= "wd-float-right">

            <a className="btn btn-lg btn-secondary me-1 "
              href={`#/Kanbas/Courses/${cid}/Assignments`}>
                <button className="btn btn-secondary me-1">Cancel</button>
           </a>

           <a className="btn btn-lg btn-danger me-1"
              href={`#/Kanbas/Courses/${cid}/Assignments`}>
                <button className="btn btn-danger me-1" id="wd-update-course-click"
                onClick ={() => savePressed()}>
                  Save</button>
          </a>

          </div> 

        </div>
        </div>

    </div>
    
        
);}

  