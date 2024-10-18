import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const assign = db.assignments;



    return (
      
      <div id="wd-assignments-editor">
        {assign
          .filter((assign: any) => assign._id === aid)
          .map((assign: any) => (


        <div>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value={assign.title} className="form-control mb-2"/>
        
        <textarea id="wd-description" className="form-control mb-2">
          {assign.assignDes}
        </textarea>
        

        <div className = "container">
          <div className = "row">
            <div className = "col">
              <label htmlFor="wd-points" className = " mt-2 float-end">Points</label>
            </div>
            <div className = "col">
              <input id="wd-points" value={assign.points} className="form-control mb-2"/>
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
                <input id="wd-assign-to" className="form-control" value={assign.assignTo}/>

                <div className = "row">
                  <label htmlFor="wd-due-date" className = "me-2 mt-2"> <b>Due</b> </label>
                </div>
                <input type="date" id="wd-available-from" className="form-control" value= {assign.due}/>

                <div className = "row">
                  <div className = "col">
                    <label htmlFor="wd-available-from" className = "me-2 mt-2"> <b>Available from</b> </label>
                    <div className ="row">
                      <input type="date" id="wd-available-from" className="form-control" value={assign.release}/>
                    </div>
                  </div>
                  <div className = "col">
                  <label htmlFor="wd-available-to" className = "me-2 mt-2"> <b>Until</b> </label>
                    <div className ="row">
                    <input type="date" id="wd-available-to" className="form-control" value={assign.until}/>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>

          <hr></hr>
            <div className= "wd-float-right">

            <a className="btn btn-lg btn-secondary me-1 "
              href={`#/Kanbas/Courses/${assign.course}/Assignments`}>
                <button className="btn btn-lg btn-secondary me-1">Cancel</button>
           </a>

           <a className="btn btn-lg btn-danger me-1"
              href={`#/Kanbas/Courses/${assign.course}/Assignments`}>
                <button className="btn btn-lg btn-danger me-1">Save</button>
          </a>

          </div> 

          




        </div>
        </div>

        ))}
    </div>
    
        
);}

  