import React, { useState } from 'react';
import './parent.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Parent() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('ss@ss.com');

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="row">
                <div className="col-10">
                    <h5>Parent/Guardian</h5>
                </div>
                <div className="col-2">
                    <button className="btn" onClick={handleShow}><i className="fa fa-edit"></i></button>
                    <button className="btn"><i className="fa fa-trash"></i></button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Parent Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <label>Name:
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </label>
                                <label>Last Name:
                                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </label>
                                <label>Email:
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <table>
                <tr>
                    <th >Name:</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Last Name:</th>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>{email}</td>
                </tr>
            </table>
        </div>
    )
}


export default Parent;