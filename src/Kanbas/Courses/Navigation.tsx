import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {

  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
      {links.map((link) => (
        <Link key={link} to={link} className={`
              ${pathname.includes(link) ? "list-group-item active border border-0" : 
              "list-group-item text-danger border border-0"}`}>
          <br />
          {link}
        </Link>
         ))}
      
    </div>
);}

