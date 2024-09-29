import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6130/Home">
            <img src="/images/brain.jpg" width={200} />
            <div>
              <h5>CS6130 Affective Computing</h5>
              <p className="wd-dashboard-course-title">
                Computation of Emotions
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5010/Home">
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5>CS5010 PDP</h5>
              <p className="wd-dashboard-course-title">
                Program Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5520/Home">
            <img src="/images/mobile_apps.jpg" width={200} />
            <div>
              <h5>CS5520 Mobile Application Development</h5>
              <p className="wd-dashboard-course-title">
                Design your own App
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6750/Home">
            <img src="/images/lock.jpg" width={200} />
            <div>
              <h5>CS6750 Privacy, Security, Usability</h5>
              <p className="wd-dashboard-course-title">
                Implementing Security Designs
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5330/Home">
            <img src="/images/computer_vision.jpg" width={200} />
            <div>
              <h5>CS5330 Pattern Recognition and Computer Vision</h5>
              <p className="wd-dashboard-course-title">
                Fundamental Computer Vision Techniques
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6200/Home">
            <img src="/images/mail_icon.png" width={200} />
            <div>
              <h5>CS6200 Information Retrieval</h5>
              <p className="wd-dashboard-course-title">
                Retrieving and Distributing Information
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>




      </div>
    </div>
  );
}

