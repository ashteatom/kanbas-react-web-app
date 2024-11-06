
export default function AssignmentCreate({ dialogTitle, assignmentName, assignmentDes, setAssignmentName, setAssignmentDes, addAssignment }:
    { dialogTitle: string; assignmentName: string; assignmentDes: string; setAssignmentName: (name: string) => void;setAssignmentDes: (name: string) => void; addAssignment: () => void; }) {
      return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <input className="form-control" defaultValue={assignmentName} placeholder="Assignment Name"
                       onChange={(e) => setAssignmentName(e.target.value)}/>
                <input className="form-control" defaultValue={assignmentDes} placeholder="Assignment Description"
                       onChange={(e) => setAssignmentDes(e.target.value)}/>


              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Canceled </button>
                <button onClick={addAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                  Add Assignment </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    