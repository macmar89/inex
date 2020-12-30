// kontaktny formular bez back-endu cez emailjs  https://www.emailjs.com/ 
// musi byt nainstalovane yarn add emailjs + yarn add react-toastify

import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Row, Col } from 'react-bootstrap';
import './ContactForm.scss'

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // Validate form errors being empty
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false);
    });

    // Validate the form was filled out
    Object.values(rest).forEach((val) => {
        val === '' && (valid = false);
    });

    return valid;
};

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            // subject: '',
            message: '',
            formErrors: {
                name: '',
                email: '',
                // subject: '',
                message: '',
            },
        };
    }

    toastifySuccess() {
        toast.success('Správa odoslaná!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
        });
    }

    toastifyFail() {
        toast.error('Zlyhalo odosielanie správy!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback fail',
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            // Handle form validation success
            const { name, email, subject, message } = this.state;

            // Set template params
            let templateParams = {
                name: name,
                email: email,
                // subject: subject,
                message: message,
            };

            emailjs.send('service_yrshzrf', 'template_0nek0xh', templateParams, 'user_RX4uFTVLH3CPTUGV4oEGT');

            console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        // Subject: ${subject}
        Message: ${message}
      `);

            this.toastifySuccess();
            this.resetForm();
        } else {
            // Handle form validation failure
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
            this.toastifyFail();
        }
    };

    // Function to reset form
    resetForm() {
        this.setState({
            name: '',
            email: '',
            // subject: '',
            message: '',
        });
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'name':
                formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
                break;
            // case 'subject':
            //     formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
            //     break;
            case 'message':
                formErrors.message = value.length < 1 ? 'Please enter a message' : '';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className='ContactForm'>
                <Row >
                    <Col className="mx-auto" xs={12} lg={10}>
                        <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
                            <Row>
                                <Col md={4}>
                                    <input
                                        type='text'
                                        name='name'
                                        value={this.state.name}
                                        className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                                        onChange={this.handleChange}
                                        placeholder='Meno'
                                        noValidate
                                    ></input>
                                    {formErrors.name.length > 0 && (
                                        <span className='errorMessage'>{formErrors.name}</span>
                                    )}
                                    <input
                                        type='email'
                                        name='email'
                                        value={this.state.email}
                                        className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                                        onChange={this.handleChange}
                                        placeholder='E-mail'
                                        noValidate
                                    ></input>
                                    {formErrors.email.length > 0 && (
                                        <span className='errorMessage'>{formErrors.email}</span>
                                    )}
                                    {/* <input
                                        type='subject'
                                        name='subject'
                                        value={this.state.subject}
                                        className={`form-control formInput ${formErrors.subject.length > 0 ? 'error' : null
                                            }`}
                                        onChange={this.handleChange}
                                        placeholder='Predmet správy'
                                        noValidate
                                    ></input>
                                    {formErrors.subject.length > 0 && (
                                        <span className='errorMessage'>{formErrors.subject}</span>
                                    )} */}
                                </Col>
                                <Col>
                                    <textarea
                                        rows='5'
                                        name='message'
                                        value={this.state.message}
                                        className={`form-control formInput ${formErrors.message.length > 0 ? 'error' : null
                                            }`}
                                        onChange={this.handleChange}
                                        placeholder='Tu zanechajte Vašu správu'
                                        noValidate
                                    ></textarea>
                                    {formErrors.message.length > 0 && (
                                        <span className='errorMessage'>{formErrors.message}</span>
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-right">
                                    <button className="btn btn-danger" type='submit'>Odoslať správu</button>
                                </Col>
                            </Row>
                        </form>
                        <ToastContainer />

                    </Col>
                </Row>
            </div >
        );
    }
}

export default ContactForm;
