import React from "react";

const FeedPost = () => {
  return (
    <>
      <LoadingWrapper />
    </>
  );
};

export default FeedPost;

const Content = styled.main`
  font-size: x-small;
  padding-top: 1rem;
  width: 100%;
  padding: 1rem 5rem;
`;

import styled from "styled-components";
import { LoadingWrapper } from "../../layout/LoadingLayout";
