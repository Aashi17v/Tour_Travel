"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../../public/sass/pages/ticket_booking.scss";

export default function BookingForm() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [formData, setFormData] = useState({
    destination: "",
    fromDate: "",
    toDate: "",
    fullName: "",
    email: "",
    phone: "",
    requests: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { destination, fullName, email, phone } = formData;
    if (!destination || !fullName || !email || !phone) {
      alert("Please fill out all required fields!");
      return;
    }

    alert(`Thank you, ${fullName}! Your booking for ${destination} is confirmed.`);
    setFormData({
      destination: "",
      fromDate: "",
      toDate: "",
      fullName: "",
      email: "",
      phone: "",
      requests: "",
      payment: "",
    });
    setAdults(2);
    setChildren(0);
    setInfants(0);
  };

  return (
    <div className="booking-container">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1>Book Your Incredible India Tour</h1>
            <p>
              Embark on a journey of a lifetime. Fill out the form below to
              secure your tickets!
            </p>

            <Form id="bookingForm" onSubmit={handleSubmit}>
              <Form.Group controlId="destination">
                <Form.Label>Select Your Destination</Form.Label>
                <Form.Select
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Destination</option>
                  <option>Taj Mahal, Agra</option>
                  <option>Jaipur, Rajasthan</option>
                  <option>Varanasi, Uttar Pradesh</option>
                  <option>Kerala Backwaters</option>
                  <option>Goa Beaches</option>
                </Form.Select>
              </Form.Group>

              <div className="travel-dates">
                <div>
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="date"
                    id="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="date"
                    id="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h3>Number of Travelers</h3>
              <div className="slider-group">
                <Form.Label>
                  Adults <span>{adults}</span>
                </Form.Label>
                <Form.Range
                  min={1}
                  max={10}
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                />

                <Form.Label>
                  Children <span>{children}</span>
                </Form.Label>
                <Form.Range
                  min={0}
                  max={10}
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                />

                <Form.Label>
                  Infants <span>{infants}</span>
                </Form.Label>
                <Form.Range
                  min={0}
                  max={5}
                  value={infants}
                  onChange={(e) => setInfants(Number(e.target.value))}
                />
              </div>

              <h3>Contact Details</h3>
              <div className="contact-details">
                <Form.Control
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <Form.Group controlId="requests">
                <Form.Label>Special Requests</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Any dietary restrictions, accessibility needs, or other requests?"
                  value={formData.requests}
                  onChange={handleChange}
                />
              </Form.Group>

              <h3>Payment Method</h3>
              <div className="payment-options">
                <Form.Check
                  inline
                  label="Credit/Debit Card"
                  name="payment"
                  type="radio"
                  id="card"
                  value="card"
                  checked={formData.payment === "card"}
                  onChange={(e) =>
                    setFormData({ ...formData, payment: e.target.value })
                  }
                />
                <Form.Check
                  inline
                  label="UPI/Net Banking"
                  name="payment"
                  type="radio"
                  id="upi"
                  value="upi"
                  checked={formData.payment === "upi"}
                  onChange={(e) =>
                    setFormData({ ...formData, payment: e.target.value })
                  }
                />
                <Form.Check
                  inline
                  label="PayPal"
                  name="payment"
                  type="radio"
                  id="paypal"
                  value="paypal"
                  checked={formData.payment === "paypal"}
                  onChange={(e) =>
                    setFormData({ ...formData, payment: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="book-btn">
                Book Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
