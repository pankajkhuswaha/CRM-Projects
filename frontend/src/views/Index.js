import { useEffect, useState } from "react";
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
import axios from "axios";

const Index = ({ direction, ...args }) => {
  const [activeNav, setActiveNav] = useState(1);
  const [show, setShow] = useState(false);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [customers, setCustomers] = useState([])
  const fetchData = async () => {
    const res = await axios.get("https://api.grfinancial.in/api/customer");
    setCustomers(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(customers);

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
                  <th scope="col">Sr.No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Loan Type</th>
                  <th scope="col">Loan Amount</th>
                </tr>
              </thead>
              <tbody>
                {customers && customers.map((itm,i)=><tr key={i}>
                  <th scope="row">{i+1}</th>
                  <td>{itm.createdAt.split("T")[0]}</td>
                  <td>{itm.persondetails[0]?.name}</td>
                  <td>{itm.persondetails[0]?.mobile}</td>
                  <td>{itm?.loantype?.join(" ")}</td>
                  <td>{itm?.loanAmount}</td>
                </tr>)}
              </tbody>
            </Table>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Index;
