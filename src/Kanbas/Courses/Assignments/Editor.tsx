export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your Web application
          running on Netlify. The landing page should include the following: Your full name and section, 
          Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant 
          source code repositories. The Kanbas application should include a link to navigate back to the 
          landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group"> <option>ASSIGNMENTS</option></select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as"> <option>Percentage</option></select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type"> <option>Online</option></select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label>Online Entry Options</label>
          </td>
          <td>

            <input type="checkbox" name="type1" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="type2" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="type3" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="type4" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="type5" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-due-date"> Due </label>
          </td>
          <td>
            <input type="date" id="wd-due-date" value="2024-05-13"/><br/>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-available-from"> Available from </label>
          </td>
          <td>
            <input type="date" id="wd-available-from" value="2024-05-06"/><br/>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-available-to"> Until </label>
          </td>
          <td>
            <input type="date" id="wd-available-to" value="2024-05-20"/><br/>
          </td>
        </tr>

        <tr>
          <td align="right" valign="bottom">
          <button>Cancel</button> <button>Save</button>
          </td>
        </tr>



        






      </table>
    </div>
);}

  