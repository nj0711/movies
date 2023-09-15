import React from 'react'
import { Form, Button, FormGroup } from 'react-bootstrap';

// function ReviewFrom({ handleSubmit, revText }) {
//     return (
//         <Form>
//             <FormGroup className='mb-3' controlId='exampleForm.ControlTextarea1'>
//                 <Form.Label>Write a Review</Form.Label>
//                 <Form.Control ref={revText} as="textarea" rows={3}></Form.Control>
//             </FormGroup>
//             <Button variant='outline-info' onClick={handleSubmit}>Add Review</Button>
//         </Form>
//     )
// }
function ReviewFrom() {
    return (
        <Form>
            <FormGroup className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Write a Review</Form.Label>
                <Form.Control as="textarea" rows={3}></Form.Control>
            </FormGroup>
            <Button variant='outline-info' >Add Review</Button>
        </Form>
    )
}

export default ReviewFrom
