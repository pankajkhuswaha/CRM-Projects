
import React, { useState } from "react";
import { addCompany, addUser } from "features/user/UserReducer";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Upload = ({ direction, ...args }) => {
  const [selectedLoans, setSelectedLoans] = useState([]);

  const notify = () =>
    toast.success(" Successfully uploaded!", {
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
    const [showKYC, setShowKYC] = useState(false);
      const [showITR, setShowITR] = useState(false);
const [otherdoc, setOtherdoc]=useState(false)

  const handleInputChange = (e) => {
    const { name, files } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({ aadharFile: formData.aadharFile, panFile: formData.panFile })
    );

    dispatch(addCompany({}));

    setFormData({}); // Reset form data
    setShowKYC(false); // Reset KYC button state

    e.target.reset();
  };

  const handleLoanSelection = (loanType) => {
    const selectedLoansCopy = [...selectedLoans];
    if (selectedLoansCopy.includes(loanType)) {
      const index = selectedLoansCopy.indexOf(loanType);
      selectedLoansCopy.splice(index, 1);
    } else {
      selectedLoansCopy.push(loanType);
    }
    setSelectedLoans(selectedLoansCopy);
  };

  return (
    <div className="registermain">
      <Col lg="12" md="12">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <large style={{ color: "gray", fontSize: "20px" }}>
                Upload Files
              </large>
            </div>

            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <Button
                  className="uploadbut mt-4"
                  color="primary"
                  onClick={() => setShowKYC(!showKYC)}
                >
                  <span
                 
                  >
                    <i
                      style={{ margin: "0px 16px 0px 4px" }}
                      class="fa-solid fa-file"
                    ></i>
                    KYC
                    <i
                      style={{ margin: "0px 0px 0px 34px", fontSize: "25px" }}
                      class="fa-solid fa-down-left-and-up-right-to-center"
                    ></i>
                  </span>
                </Button>
              </FormGroup>

              {showKYC && (
                <>
                  <FormGroup>
                    <Label style={{ color: "gray" }}>Aadhar Card</Label>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        placeholder="Aadhar Card"
                        type="file"
                        name="aadharFile"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label style={{ color: "gray" }}>PAN Card</Label>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        placeholder="PAN File"
                        type="file"
                        name="panFile"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                </>
              )}
              <FormGroup>
                <Button
                  className=" uploadbut mt-4"
                  color="primary"
                  onClick={() => setShowITR(!showITR)}
                >
                  <span
        
                  >
                    <i
                      style={{ margin: "0px 16px 0px 4px" }}
                      class="fa-solid fa-file"
                    ></i>
                    Financial Documents
                    <i
                      style={{ margin: "0px 0px 0px 34px", fontSize: "25px" }}
                      class="fa-solid fa-down-left-and-up-right-to-center"
                    ></i>
                  </span>
                </Button>
              </FormGroup>
              {showITR && (
                <>
                  <FormGroup>
                    <Label style={{ color: "gray" }}>AY First Year</Label>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        placeholder=""
                        type="file"
                        name="aadharFile"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label style={{ color: "gray" }}>AY Second Year</Label>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        placeholder=""
                        type="file"
                        name="aadharFile"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label style={{ color: "gray" }}>AY Third Year</Label>
                    <InputGroup className="input-group-alternative mb-3">
                      <Input
                        placeholder="PAN File"
                        type="file"
                        name="panFile"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                </>
              )}
              <FormGroup>
                <Button
                  className=" uploadbut mt-4"
                  color="primary"
                  onClick={() => setOtherdoc(!otherdoc)}
                >
                  <span
                  
                  >
                    <i
                      style={{ margin: "0px 16px 0px 4px" }}
                      class="fa-solid fa-file"
                    ></i>
                    Other Documents
                    <i
                      style={{ margin: "0px 0px 0px 34px", fontSize: "25px" }}
                      class="fa-solid fa-down-left-and-up-right-to-center"
                    ></i>
                  </span>
                </Button>
              </FormGroup>

              {otherdoc && (
                <>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Loan Shedule</Label>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            placeholder="Policy Upload "
                            type="file"
                            name="upload"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Property Papers</Label>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            placeholder="Policy Upload "
                            type="file"
                            name="upload"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Banking</Label>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            placeholder="Policy Upload "
                            type="file"
                            name="upload"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Salary Slip</Label>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            placeholder="Policy Upload "
                            type="file"
                            name="upload"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Form-16</Label>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            placeholder="Policy Upload "
                            type="file"
                            name="upload"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </>
              )}

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {/* <Button
                  onClick={notify}
                  className="mt-4"
                  color="primary"
                  type="submit"
                >
                  Create
                </Button> */}
                <Link to={""}>
                  <Button className="mt-4" color="primary" type="submit">
                    Upload
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

export default Upload;
