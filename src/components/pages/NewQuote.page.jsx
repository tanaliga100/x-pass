import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { styled } from "styled-components";
import QuoteForm from "../views/quotes/QuoteForm";
const NewQuotePage = () => {
  return (
    <PageWrapper>
      <h1 className="title">
        <div className="content">
          <AiOutlineAppstoreAdd size={20} />
          Add a New Quote
        </div>
        {"   "}
      </h1>
      <QuoteForm />
    </PageWrapper>
  );
};

export default NewQuotePage;

const PageWrapper = styled.main`
  .title {
    padding-bottom: 2rem;
    font-size: large;
    color: crimson;
    font-weight: 300;

    .content {
      display: flex;
      justify-content: baseline;
      align-items: center;
      gap: 1rem;
    }
  }
`;
