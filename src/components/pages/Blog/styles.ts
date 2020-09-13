import styled from 'styled-components';

export const BlogStyles = styled.div`
  padding: 20px 25px 0;
  min-height: 71vh;

  h1 {
    margin-top: 0;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    text-align: start;
  }

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  .time {
    margin-top: 5px;
    font-size: 14px;
  }
`;
