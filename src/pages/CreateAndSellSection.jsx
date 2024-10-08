import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/createAndSellSection.css';
import { motion } from 'framer-motion';
import useSellesStore from '../data/SellsStore';
import FadeInSection from '../components/FadeInSection';

const CreateAndSellSection = () => {

  const steps = useSellesStore.use.sells()

  return (
    <FadeInSection id="top-sales">
      <Container className="create-and-sell py-5">
      <h2 className="text-start Raleway-Bold">Create and Sell Now</h2>
      <Row className="gy-4">
        {steps.map((step, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
            <Card className="step-card text-center h-100 bg-neutral-50 p-1 shadow-sm">
              <Card.Body>
                <div className="icon-container me-auto mb-3 bg-neutral-600">
                  <img src={step.icon} alt="Icon" className="img-fluid" />
                  </div>
                <Card.Title className="text-neutral-800 Raleway-Bold text-start">{step.title}</Card.Title>
                <Card.Text className="text-neutral-400 Raleway-Medium text-start detail">{step.details}</Card.Text>
              </Card.Body>
            </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
    </FadeInSection>
  );
};

export default CreateAndSellSection;
