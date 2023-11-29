import { useState } from 'react';
import Accordion from './components/Accordion';
import Col from './components/Col';
import Container from './components/Container';
import Modal from './components/Modal';
import Row from './components/Row';
import Tabs from './components/Tabs';
import TabPanel from './components/Tabs/TabPanel';

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

                <Tabs>
                    <TabPanel label="Tab 1">
                        <h2>Tab 1 Content</h2>
                        <p>This is the content for Tab 1.</p>
                    </TabPanel>
                    <TabPanel label="Tab 2">
                        <h2>Tab 2 Content</h2>
                        <p>This is the content for Tab 2.</p>
                    </TabPanel>
                    <TabPanel label="Tab 3">
                        <h2>Tab 3 Content</h2>
                        <p>This is the content for Tab 3.</p>
                    </TabPanel>
                </Tabs>
            </Container>
            {showModal && <Modal title="標題" onClose={() => setShowModal(false)}></Modal>}
        </>
    );
}

export default App;
