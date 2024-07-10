import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css'

const FormComponent = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [msg, setMsg] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setHeight(parseInt(height))
        setWeight(parseInt(weight))
        const heightInMeters = height / 100;
        const bmiResult = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi((bmiResult))
        if(bmiResult< 18.5){
            setMsg('Underweight')
        }
        else if(bmiResult> 18.5 && bmiResult<24.9){
            setMsg('Normal')
        }
        else if(bmiResult> 25 && bmiResult<29.9){
            setMsg('Overweight')
        }
        else{
            setMsg('Obesity')
        }
    }
    return (
        <div className='contain'>
            <Form className='form'>
                <h3>My BMI calculator</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" placeholder="Enter your weight" onChange={(e) => setWeight(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" placeholder="Enter your height" onChange={(e) => setHeight(e.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {bmi ?
                        <Form.Text id="passwordHelpBlock" muted>
                            Your BMI is {bmi}
                            <br />
                            {msg}                        </Form.Text>
                        : <Form.Text id="passwordHelpBlock" muted>Enter your weight and height to calculate your BMI</Form.Text>
                    }
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default FormComponent;
