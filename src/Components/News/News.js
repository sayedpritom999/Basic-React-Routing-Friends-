import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    const {title, description} = props.article;
    return (
        <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
    );
};

export default News;