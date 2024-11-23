import React from "react";
import { Container, Row, Col } from "react-materialize";
import Profile from "./Profile";
import AddPost from "./AddPostComp";
import PostList from "./PostList";
import HealthCheckComp from "./HealthCheckComp"; // Import the HealthCheckComp

export default ({ userDetails }) => {
  return (
    <Container>
      <Row>
        <Col s={12} m={4}>
          <Profile userDetails={userDetails} />
        </Col>
        <Col s={12} m={8}>
          <AddPost />
          <HealthCheckComp /> {/* Include Health Check Component here */}
          <PostList />
        </Col>
      </Row>
    </Container>
  );
};
