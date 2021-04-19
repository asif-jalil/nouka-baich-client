import React from "react";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

const AddBookingForm = ({ userInfo, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={5}>
          <div className="mb-3">
            <label htmlFor="">Your Name</label>
            <input defaultValue={userInfo?.name} type="text" className="form-control" {...register("name", { required: true })} />
            {errors.name && <span className="error">This field is required</span>}
          </div>
        </Col>
        <Col md={5}>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input defaultValue={userInfo?.email} type="text" className="form-control" {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
          </div>
        </Col>
        <Col md={2}>
          <div className="mb-3">
            <label htmlFor="">Day</label>
            <input defaultValue={userInfo?.day} type="number" className="form-control" {...register("day", { required: true })} />
            {errors.day && <span className="error">This field is required</span>}
          </div>
        </Col>
        <Col sm={12}>
          <button type="submit" className="button main-btn main-btn-sm main-btn-transparent">
            Next
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default AddBookingForm;
