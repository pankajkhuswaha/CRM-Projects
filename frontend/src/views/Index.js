import { useState } from "react";
// node.js library that concatenates classes (strings)
import { FiFilter } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
// javascipt plugin for creating charts
import Chart from "chart.js";
import "./index.css";

import {
  Button,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import { chartOptions, parseOptions } from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { ToastContainer } from "react-toastify";

const Index = ({ direction, ...args }) => {
  const [activeNav, setActiveNav] = useState(1);
  const [show, setShow] = useState(false);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      {/* filter  */}
      <div className="trigeredbut">
        <Card className="shadow col-12">
          <CardHeader className="border-0">
            <Row className="align-items-center ">
              <div className="col">
                <h3 className="mb-0">
                  {!show ? (
                    <FiFilter
                      style={{ cursor: "pointer" }}
                      onClick={() => setShow(!show)}
                    />
                  ) : (
                    <MdCancel />
                  )}
                  <span
                    onClick={() => setShow(!show)}
                    style={{
                      position: "relative",
                      left: "7px",
                      top: "2px",
                      cursor: "pointer",
                    }}
                  >
                    Filters
                  </span>
                </h3>
              </div>
              <div className="col text-right">
                {/* fssssssssssssssssssssssssssssssssssss */}

                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={direction}
                >
                  <DropdownToggle caret>Add New Costumer</DropdownToggle>
                  <DropdownMenu {...args}>
                    <Link to={"/auth/register"}>
                      <DropdownItem>Individual</DropdownItem>
                    </Link>
                    <Link to={"/auth/FirmRegister"}>
                      <DropdownItem>Firm</DropdownItem>
                    </Link>{" "}
                    <Link to={"/auth/CompanyRegister"}>
                      <DropdownItem>Company</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Row>
          </CardHeader>
        </Card>
      </div>
      {/*  */}
      {show ? (
        <div className="trigeredbut">
          <Card className="shadow col-12">
            <CardHeader className="border-0">
              <Row className="align-items-center ">
                <div className="filter">
                  <h3>Types of Loan</h3>
                </div>
                <div className="filterloan">
                  <div className="cols">
                    <Button color="primary" outline size="md">
                      PL
                    </Button>
                  </div>
                  <div className="cols">
                    <Button color="primary" outline size="md">
                      BL
                    </Button>
                  </div>
                  <div className="cols">
                    <Button color="primary" outline size="md">
                      LAP
                    </Button>
                  </div>
                  <div className="cols">
                    <Button color="primary" outline size="md">
                      HL
                    </Button>
                  </div>
                  <div className="cols">
                    <Button color="primary" outline size="md">
                      AL
                    </Button>
                  </div>
                </div>
              </Row>
            </CardHeader>
          </Card>
        </div>
      ) : null}

      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8"></Col>
          <Col xl="4"></Col>
        </Row>
        <Row className="mt-5">
          <Card className="shadow col-12">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Recent Users</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    See all
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Page name</th>
                  <th scope="col">Visitors</th>
                  <th scope="col">Unique users</th>
                  <th scope="col">Bounce rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">/argon/</th>
                  <td>4,569</td>
                  <td>340</td>
                  <td>
                    <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/index.html</th>
                  <td>3,985</td>
                  <td>319</td>
                  <td>
                    <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/charts.html</th>
                  <td>3,513</td>
                  <td>294</td>
                  <td>
                    <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/tables.html</th>
                  <td>2,050</td>
                  <td>147</td>
                  <td>
                    <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                  </td>
                </tr>
                <tr>
                  <th scope="row">/argon/profile.html</th>
                  <td>1,795</td>
                  <td>190</td>
                  <td>
                    <i className="fas fa-arrow-down text-danger mr-3" /> 46,53%
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Index;
