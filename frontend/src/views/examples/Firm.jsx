


import React, { useState } from "react";
import { addFirm, addUser } from "features/user/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { TbMapPinCode } from "react-icons/tb";

const Firm = () => {
  const notify = () =>
    toast.success("User Succesfully Added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [city, setCity] = useState("");

  const [pincode, setPincode] = useState("");

  const [state, setState] = useState("");

  const [mobile, setMobile] = useState("");

  const [dob, setDob] = useState("");

  const [mother, setMother] = useState("");

  const [father, setFather] = useState("");

  const [reference1, setReference1] = useState("");

  const [reference2, setReference2] = useState("");
  const [firm, setFirm] = useState("");

  const [firmtype, setFirmtype] = useState("");

  const [firmaddress, setFirmaddress] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        name,
        email,
        city,
        pincode,
        state,
        mobile,
        dob,
        mother,
        father,
        reference1,
        reference2,
      })
    );

    dispatch(
      addFirm({
        firm,
        firmaddress,
      firmtype
      })
    );

    e.target.reset();
  };
  console.log(useSelector((st) => st.users));
  return (
    <div className="registermain">
      <Col lg="12" md="12">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <p style={{ color: "gray", fontSize: "20px" }}>
                Create Firm
              </p>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-house"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="City"
                        type="text"
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <TbMapPinCode />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Pin Code"
                        type="text"
                        name="pinCode"
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-house-chimney"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="State"
                        type="text"
                        name="state"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-mobile"></i>{" "}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Mobile Number"
                        type="text"
                        name="mobileNumber"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-sharp fa-solid fa-calendar"></i>{" "}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="DOB"
                        type="date"
                        name="dob"
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-circle-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Mother Name"
                        type="text"
                        name="motherName"
                        onChange={(e) => setMother(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-circle-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Father Name"
                        type="text"
                        name="fatherName"
                        onChange={(e) => setFather(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-circle-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Reference1"
                        type="text"
                        name="reference1"
                        onChange={(e) => setReference1(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa-solid fa-circle-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Refernce-2"
                        type="text"
                        name="reference2"
                        onChange={(e) => setReference2(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fa-regular fa-building"></i>{" "}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="firm Name"
                        type="text"
                        name="firm"
                        onChange={(e) => setFirm(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              {/* ==================== */}
              <Row>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fa-solid fa-building"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Firm Type"
                        type="text"
                        name="firmtype"
                        onChange={(e) => setFirmtype(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fa-solid fa-building"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Firm Address"
                        type="text"
                        name="firmaddress"
                        onChange={(e) => setFirmaddress(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              {/* ========== */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={notify}
                  className="mt-4"
                  color="primary"
                  type="submit"
                >
                  Add More
                </Button>
                <Link to={"/NextStep"}>
                  <Button className="mt-4" color="primary" type="submit">
                    Next
                  </Button>
                </Link>
              </div>
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
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Firm;
