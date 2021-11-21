import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm-4"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Changing Order Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are You sure you want to change order status
          </p>
          <p>
            to Completed?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button href="/orderCompleted" >Change</Button>
        </Modal.Footer>
      </Modal>

        
    );
  }

  function MyVerticallyCenteredModal1(props) {
    return (
      <Modal
        {...props}
        size="sm-4"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Changing Order Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are You sure you want to change order status
          </p>
          <p>
            to Rejected?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button href="/orderRejected" >Change</Button>
        </Modal.Footer>
      </Modal>

        
    );
  }

  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="sm-4"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Changing Order Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are You sure you want to change order status
          </p>
          <p>
            to Drafting?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button href="/orderDrafting" >Change</Button>
        </Modal.Footer>
      </Modal>

        
    );
  }

function OrderProcessing() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div class="content5">
        <div  class="back5">
            <i class="angle left icon"></i>
            <Button variant="link" href="/App">Back to sales Order</Button>
        </div>
        <div class="title-status">
            <h1>Sales Order 0123455689</h1>
        </div>

        <div class="status-dropdown">
            <Dropdown as={ButtonGroup}>
            <Button variant="success">Status: Processing</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item >Processing</Dropdown.Item>

                <Dropdown.Item onClick={() => setModalShow(true)}>Completed</Dropdown.Item>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <Dropdown.Item onClick={() => setModalShow1(true)}>Rejected</Dropdown.Item>
                <MyVerticallyCenteredModal1
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                />

                <Dropdown.Item onClick={() => setModalShow2(true)}>Drafting</Dropdown.Item>
                <MyVerticallyCenteredModal2
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                />

            </Dropdown.Menu>
            </Dropdown>
        </div>

        <div class="date-filing5">
          <h2>Date of Filing: December 2, 2022</h2>
        </div>

        <div class="cust-info5">
            <div class="customer5">
                <h1>Customer Information</h1>
            </div>
            <div class="billing5">
                <h1>Billing Information</h1>
            </div>
        </div>

        <div class="cust-details5">
            <div class="info-left5">
                <div class="details-left5">
                    <div class="left5">
                        <h5>Customer ID:</h5>
                        <p>2208752585</p>
                    </div>
                    
                    <div class="left5">
                        <h5>Customer Name:</h5>
                        <p>Toyota Motors Philippines</p>
                    </div>

                    <div class="left5">
                        <h5>Address:</h5>
                        <div class="address-info5">
                            <p>123 Toyota Drive</p>
                            <p>Silang Cavite 4118</p>
                            <p>Philippines</p>
                        </div>
                    </div>
                </div>

                <div class="details-right5">
                    <div class="right5">
                        <h5>Contact Number:</h5>
                        <p>09273344806</p>
                    </div>

                    <div class="right5">
                        <h5>Email Adress:</h5>
                        <p>customer@toyota.ph</p>
                    </div>

                    <div class="right5">
                        <h5>Point of Contact:</h5>
                        <p>Demi Andres</p>
                    </div>
                </div>
            </div>

            <div class="info-right5">
                <div class="details-left5">
                    <div class="left5">
                        <h5>Billing Address:</h5>
                        <div class="address-info5">
                            <p>123 Toyota Drive</p>
                            <p>Silang Cavite 4118</p>
                            <p>Philippines</p>
                        </div>
                    </div>

                    <div class="right5">
                        <h5>Contact Number:</h5>
                        <p>09778524444</p>
                    </div>
                </div>

                <div class="details-right5">
                    <div class="right5">
                        <h5>Email Adress:</h5>
                        <p>customer@toyota.ph</p>
                    </div>

                    <div class="right5">
                        <h5>Person/Department to Alert:</h5>
                        <p>Ferby Reyes</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cust-info5">
            <div class="customer5">
                <h1>Shipping Information</h1>
            </div>
        </div>

        <div class="cust-details5">
            <div class="info-left5">
                <div class="details-left5">
                    <div class="left5">
                        <h5>Address:</h5>
                        <div class="address-info5">
                            <p>123 Toyota Drive</p>
                            <p>Silang Cavite 4118</p>
                            <p>Philippines</p>
                        </div>
                    </div>

                    <div class="left5">
                        <h5>Contact Number:</h5>
                        <p>09273344806</p>
                    </div>

                    <div class="left5">
                        <h5>Email Adress:</h5>
                        <p>customer@toyota.ph</p>
                    </div>

                    <div class="left5">
                        <h5>Person/Department to Alert:</h5>
                        <p>Ferby Reyes</p>
                    </div>
                </div>

                <div class="details-right5">
                    <div class="right5">
                        <h5>Ship via:</h5>
                        <p>FedEx</p>
                    </div>
                    
                    <div class="right5">
                        <h5>Shipping Method:</h5>
                        <p>FedEx</p>
                    </div>

                    <div class="right5">
                        <h5>Payment Choice:</h5>
                        <p>Cash</p>
                    </div>

                    <div class="right5">
                        <h5>Delivery Date:</h5>
                        <p>January 15, 2022</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cust-info5">
            <div class="customer5">
                <h1>Order Details</h1>
            </div>
        </div>

        <div class="order5">
            <div class="order-table5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item ID:</th>
                            <th>Item Name:</th>
                            <th>Quantity:</th>
                            <th>Total Price:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0123456789</td>
                            <td>Toyota Philippines</td>
                            <td>2</td>
                            <td>Php 150,000</td>
                        </tr>
                        <tr>
                            <td>012345678</td>
                            <td>Toyota Philippines</td>
                            <td>55</td>
                            <td>Php 150,000</td>
                        </tr>
                        <tr>
                            <td>01234567</td>
                            <td>Toyota Philippines</td>
                            <td>777</td>
                            <td>Php 0</td>
                        </tr>
                        <tr>
                            <td>012345678</td>
                            <td>Toyota Philippines</td>
                            <td>251</td>
                            <td>Php 50,000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div class="order-number5">
                <div class="cont-mid5">
                    <h4>Subtotal:</h4>
                    <h4>Discount:</h4>
                    <h4>Subtotal Less Discount:</h4>
                    <h4>Total Tax:</h4>
                    <h4>Shipping/Handling Fee:</h4>
                    <h4>Other:</h4>

                <div class="total5">
                    <h4>Total:</h4>
                </div>
                </div>

                <div class="cont-right5">
                    <h4>300,000</h4>
                    <h4>10,000</h4>
                    <h4>10,000</h4>
                    <h4>10,000</h4>
                    <h4>10,000</h4>
                    <h4>10,000</h4>

                <div class="total5">
                    <h4>PhP 350,000</h4>
                </div>
                </div>
            </div>

        </div>

    </div>  

  );
}

export default OrderProcessing;