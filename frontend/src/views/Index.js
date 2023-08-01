import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
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
import Header from "components/Headers/Header.js";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getallCustomerData } from "features/loan/loanSlice";

const Index = ({ direction, ...args }) => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  const intial = useSelector((st) => st.customer.customerdata);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    dispatch(getallCustomerData());
  }, [dispatch]);

  useEffect(() => {
    setCustomers(intial);
  }, [intial]);

  return (
    <>
      <ToastContainer />
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
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer Type</th>
                  <th scope="col">Customer name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Loan Type</th>
                  <th scope="col">Loan Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {customers &&
                  customers?.map((itm, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{itm.createdAt.split("T")[0]}</td>
                      <td>{itm.customertype}</td>
                      <td>{itm.persondetails[0]?.name}</td>
                      <td>{itm.persondetails[0]?.mobile}</td>
                      <td>{itm?.loantype?.join(" ")}</td>
                      <td>{itm?.loanAmount}</td>
                      <td>
                       <div className="d-flex gap-4">
                       <AiFillEdit fontSize={22} color="green" />
                        <AiFillDelete fontSize={22} color="red" />
                        <GrView fontSize={22} color="skyblue" />
                       </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Index;
