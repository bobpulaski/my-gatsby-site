import React from "react";
import { Link } from "gatsby";
import { Col } from "react-bootstrap";

function AsideMenu() {
  return (
    <>
      <Col className="side-menu" xs lg="2">
        <aside>
          <ul className="list-unstyled mb-0 py-3 pt-md-1">
            <li>
              <Link to="/docs/overview">Overview</Link>
            </li>
            <li>
              <Link to="/docs/project">Project</Link>
            </li>
          </ul>
        </aside>
      </Col>
    </>
  );
}

export default AsideMenu;
