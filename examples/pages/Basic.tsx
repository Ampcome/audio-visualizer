import React from "react";
// layouts
import Layout from "../layouts";
// components
import BasicExample from "../components/BasicExample";
import BasicExampleCodeBlock from "../components/BasicExampleCodeBlock";

const BasicExamplePage: React.FC = () => {
  return (
    <Layout>
      <div className="mx-4">
        <div className="w-full h-full md:h-screen flex flex-col-reverse md:flex-row justify-center items-start gap-4 bg-black text-white relative pt-32 pb-10">
          <BasicExampleCodeBlock />
          <BasicExample />
        </div>
      </div>
    </Layout>
  );
};

export default BasicExamplePage;
