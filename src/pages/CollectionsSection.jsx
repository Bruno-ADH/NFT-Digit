import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import useCollectionStore from '../data/CollectionStore';
import '../style/collectionsSection.css';
import FadeInSection from '../components/FadeInSection';

const categories = ['All categories', 'Art', 'Celebrities', 'Gaming', 'Sport'];

const CollectionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [showAll, setShowAll] = useState(false);

  const allCollections = useCollectionStore.use.collections()

  const filteredCollections = allCollections.filter(collection =>
    selectedCategory === 'All categories' || collection.category.toUpperCase() === selectedCategory.toUpperCase()
  );

  const visibleCollections = showAll ? filteredCollections : filteredCollections.slice(0, 4);

  return (
    <FadeInSection
      id="collections"
      className="my-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md="auto">
            <h2 className="Raleway-Bold text-neutral-800">Our Collections</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          {categories.map(category => (
            <Col key={category} md="auto" className="mb-2 rounded-5 w-auto">
              <Button
                variant={selectedCategory === category ? 'dark bg-neutral-600' : 'outline-dark btn-neutral-50 border-0 text-neutral-800 hover'}
                className="Raleway-SemiBold rounded-3 selectedBtn"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
              >
                {category}
              </Button>
            </Col>
          ))}
          <Col md="auto px-0 ms-auto">
            <Button variant="link" className="text-dark Raleway-Bold" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show less' : 'View more'}
            </Button>
          </Col>
        </Row>
        <Row >
          <AnimatePresence>
            {visibleCollections.map(collection => (
              <Col key={collection.id} md={3} sm={6} xs={12} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="collection-card border-neutral-100">
                    <div
                      className='wrapper'
                    >
                      <Card.Img
                        as={motion.img}
                        loading='lazy'
                        variant="top"
                        src={collection.image}
                        alt={collection.title}
                        className="img-fluid progress progress-bar progress-bar-striped progress-bar-animated bg-neutral-800"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                    <Card.Body className="p-0">
                      <Row className='w-100 m-0 justify-content-between align-items-center my-3'>
                        <Card.Title className="fs-6 Raleway-Bold w-auto p-0 mb-0 text-neutral-800">{collection.title}</Card.Title>
                        <img loading="lazy" src="/icons/ethereum-ellipse.svg" className="img-fluid m-0 p-0 ms-auto" alt="Logo" style={{ width: '24px', height: '24px' }} />
                        <Card.Text className='Raleway-Bold fs-6 w-auto p-0 ps-1 text-neutral-800'>{collection.price}</Card.Text>
                      </Row>
                      <Button variant="outline-dark border-neutral-800 rounded-3 w-100 Raleway-SemiBold">Place a Bid</Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </FadeInSection>
  );
};

export default CollectionsSection;
