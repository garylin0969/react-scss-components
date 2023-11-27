import { useState } from 'react';
import Accordion from './components/Accordion';
import Col from './components/Col';
import Container from './components/Container';
import Modal from './components/Modal';
import Row from './components/Row';

function App() {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <Accordion title="手風琴1">
                            <div>999</div>
                            <div>999</div>
                            <div>999</div>
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <Accordion title="手風琴2">
                            <div>999</div>
                            <div>999</div>
                            <div>999</div>
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <Accordion title="手風琴2">
                            <div>999</div>
                            <div>999</div>
                            <div>999</div>
                        </Accordion>
                    </Col>
                </Row>
                <button onClick={() => setShowModal(true)}>開啟</button>
            </Container>
            {showModal && <Modal title="標題" onClose={() => setShowModal(false)}></Modal>}
        </>
    );
}

export default App;
