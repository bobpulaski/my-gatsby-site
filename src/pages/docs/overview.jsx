import React from "react";
import DocsLayout from "../../components/layouts/DocsLayout";
import { Col } from "react-bootstrap";

function overview() {
  return (
    <>
      <DocsLayout>
        <Col xs lg="8">
          <h1>Overview</h1>
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-offset="0"
            className="scrollspy-example"
            // tabIndex="0"
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              harum velit recusandae doloribus nobis quo esse praesentium
              numquam consectetur odio ipsum commodi maxime provident dolor
              omnis, inventore fugit, ipsam at. Dicta deserunt ad culpa ea
              tempore saepe dolor! Eos autem nisi ipsum omnis accusantium quas
              delectus facilis atque reiciendis, cumque voluptatum suscipit
              quaerat cupiditate ex minima rem ipsa eligendi inventore. Quia,
              tempore natus. Sunt, omnis, impedit suscipit, cumque amet ex natus
              eos atque cupiditate itaque architecto aliquam ab tempora sed
              esse? Eligendi officiis odio doloribus veritatis dolorem esse
              veniam sit?
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              harum velit recusandae doloribus nobis quo esse praesentium
              numquam consectetur odio ipsum commodi maxime provident dolor
              omnis, inventore fugit, ipsam at. Dicta deserunt ad culpa ea
              tempore saepe dolor! Eos autem nisi ipsum omnis accusantium quas
              delectus facilis atque reiciendis, cumque voluptatum suscipit
              quaerat cupiditate ex minima rem ipsa eligendi inventore. Quia,
              tempore natus. Sunt, omnis, impedit suscipit, cumque amet ex natus
              eos atque cupiditate itaque architecto aliquam ab tempora sed
              esse? Eligendi officiis odio doloribus veritatis dolorem esse
              veniam sit?
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              harum velit recusandae doloribus nobis quo esse praesentium
              numquam consectetur odio ipsum commodi maxime provident dolor
              omnis, inventore fugit, ipsam at. Dicta deserunt ad culpa ea
              tempore saepe dolor! Eos autem nisi ipsum omnis accusantium quas
              delectus facilis atque reiciendis, cumque voluptatum suscipit
              quaerat cupiditate ex minima rem ipsa eligendi inventore. Quia,
              tempore natus. Sunt, omnis, impedit suscipit, cumque amet ex natus
              eos atque cupiditate itaque architecto aliquam ab tempora sed
              esse? Eligendi officiis odio doloribus veritatis dolorem esse
              veniam sit?
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              harum velit recusandae doloribus nobis quo esse praesentium
              numquam consectetur odio ipsum commodi maxime provident dolor
              omnis, inventore fugit, ipsam at. Dicta deserunt ad culpa ea
              tempore saepe dolor! Eos autem nisi ipsum omnis accusantium quas
              delectus facilis atque reiciendis, cumque voluptatum suscipit
              quaerat cupiditate ex minima rem ipsa eligendi inventore. Quia,
              tempore natus. Sunt, omnis, impedit suscipit, cumque amet ex natus
              eos atque cupiditate itaque architecto aliquam ab tempora sed
              esse? Eligendi officiis odio doloribus veritatis dolorem esse
              veniam sit?
            </p>
          </div>
        </Col>
        <Col xs lg="2">
          <div className="scroll-spy sticky-top">
            <h6>ScrollSpy</h6>
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                Item 1
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Item 2
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Item 3
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Item 4
              </a>
            </div>
          </div>
        </Col>
      </DocsLayout>
    </>
  );
}

export default overview;
