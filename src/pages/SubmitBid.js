import React from 'react'
import {Button, Form} from "react-bootstrap";
import {saveBids} from "../beApis";
import {useForm} from "react-hook-form";
export const SubmitBid = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({});

    const onSubmit = (data) => {
        saveBids({...data,'projectId': 1}).then(response =>
            {console.log(response)
               }
        ).catch(() => console.log('error'))
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Label>Submit your bid </Form.Label>
            <Form.Group className="mb-3" controlId="bidderId">
                <Form.Control
                    type="text"
                    label="bidderId"
                    placeholder="Enter your accountId?"
                    {...register("bidderId",
                        {required: 'Please enter the account details'})}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bidAmount">

                <Form.Control
                    type="text"
                    label="bidAmount"
                    placeholder="Enter amount?"
                    {...register("bidAmount",
                        {required: 'Please enter the amount'})}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="numberOfDays">
                <Form.Control
                    type="text"
                    label="numberOfDays"
                    placeholder="How many days?"
                    {...register("numberOfDays",
                        {required: 'Please enter the duration'})}
                />
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    );
};
