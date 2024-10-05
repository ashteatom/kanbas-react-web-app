export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1" className="form-control mb-2"/>
        
        <textarea id="wd-description" className="form-control mb-2">
          The assignment is available online 
          
          Submit a link to the landing page of your Web application running on 
          Netlify. 
          
          The landing page should include the following: 
          - Your full name and section 
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories 
          
          The Kanbas application should include a link to navigate back to the 
          landing page.
        </textarea>
        

        <div className = "container">
          <div className = "row">
            <div className = "col">
              <label htmlFor="wd-points" className = " mt-2 float-end">Points</label>
            </div>
            <div className = "col">
              <input id="wd-points" value={100} className="form-control mb-2"/>
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
              <span className="form-control mb-2">
              
              
                <select id="wd-submission-type" className="form-select mb-2 mt-2"> <option>Online</option></select>
                
                <div className = "row">
                  <label className="mb-2 mt-2"><b>Online Entry Options</b></label>
                </div>
              
                  
                  <input type="checkbox" name="type1" id="wd-text-entry" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              
                
                  <input type="checkbox" name="type2" id="wd-website-url" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                

                
                  <input type="checkbox" name="type3" id="wd-media-recordings" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
               

                
                  <input type="checkbox" name="type4" id="wd-student-annotation" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                

                
                  <input type="checkbox" name="type5" id="wd-file-upload" className="form-check-input mb-2 me-1"/>
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                
                
              </span>
            </div>
          </div>

          <div className = "row">
            <div className = "col">
              <label htmlFor="wd-assign-to" className = "float-end me-2 mt-2">Assign</label>
            </div>
            <div className = "col">
              <span className="form-control mb-2">
                <div className = "row">
                  <label htmlFor="wd-assign-to" className = "me-2 mt-2"><b>Assign to</b></label>
                </div>
                <input id="wd-assign-to" className="form-control" value="Everyone"/>

                <div className = "row">
                  <label htmlFor="wd-due-date" className = "me-2 mt-2"> <b>Due</b> </label>
                </div>
                <input type="date" id="wd-available-from" className="form-control" value="2024-05-06"/>

                <div className = "row">
                  <div className = "col">
                    <label htmlFor="wd-available-from" className = "me-2 mt-2"> <b>Available from</b> </label>
                    <div className ="row">
                      <input type="date" id="wd-available-from" className="form-control" value="2024-05-06"/>
                    </div>
                  </div>
                  <div className = "col">
                  <label htmlFor="wd-available-to" className = "me-2 mt-2"> <b>Until</b> </label>
                    <div className ="row">
                    <input type="date" id="wd-available-to" className="form-control" value="2024-05-20"/>
                    </div>
                  </div>
                </div>
              </span>
          
            </div>
          </div>

          
            <div className= "wd-float-right">
              <button className="btn btn-lg btn-secondary me-1">Cancel</button>
              <button className="btn btn-lg btn-danger me-1">Save</button>
           


            
          </div> 

          




        </div>
        
        {/* 
        
       

        <div className = "col">
        </div>


      </table> */}
    </div>
);}

  