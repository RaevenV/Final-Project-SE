import React from "react";
import "./subModule.css";
import SubModuleItem from "./subModuleItem";

function SubModule() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <SubModuleItem 
          headingID="headingOne" collapseID="collapseOne" target="#collapseOne"
          submoduleTitle="1. Introduction to Investing" videoId="8Ij7A1VCB7I" videoUrl="https://www.youtube.com/watch?v=8Ij7A1VCB7I"
          chapterTitle1="1.1 Definition and Significance of Investing"
          chapterDesc1="Investing is the act of allocating resources, typically money, with the expectation of generating a return or profit over time. Unlike saving, which involves the preservation of capital, investing aims to grow wealth and achieve financial goals. Understanding the significance of investing is crucial for individuals seeking to build a secure financial future and achieve long-term financial objectives."
          chapterTitle2="1.2 Introduction to Financial Markets"
          chapterDesc2="Financial markets serve as the central hub for buying and selling financial instruments. Explore the functions of financial markets, including primary and secondary markets. Understand the role of financial intermediaries, such as brokers, in facilitating transactions. Gain an overview of the diverse range of financial instruments traded in these markets, laying the groundwork for subsequent modules."
          chapterTitle3="1.3 Key Terms"
          chapterDesc3="Navigate the complex language of investing by acquiring a solid understanding of key terms and jargon. From bull markets to dividends, participants will become familiar with the terminology commonly used in financial discussions. This foundation is essential for effective communication and comprehension within the investment community."
        />
        <SubModuleItem 
          headingID="headingTwo" collapseID="collapseTwo" target="#collapseTwo"
          submoduleTitle="2. Setting Financial Goals" videoId="8Ij7A1VCB7I" videoUrl="https://www.youtube.com/watch?v=8Ij7A1VCB7I"
          chapterTitle1="2.1 Definition and Significance of Investing"
          chapterDesc1="Investing is the act of allocating resources, typically money, with the expectation of generating a return or profit over time. Unlike saving, which involves the preservation of capital, investing aims to grow wealth and achieve financial goals. Understanding the significance of investing is crucial for individuals seeking to build a secure financial future and achieve long-term financial objectives."
          chapterTitle2="2.2 Introduction to Financial Markets"
          chapterDesc2="Financial markets serve as the central hub for buying and selling financial instruments. Explore the functions of financial markets, including primary and secondary markets. Understand the role of financial intermediaries, such as brokers, in facilitating transactions. Gain an overview of the diverse range of financial instruments traded in these markets, laying the groundwork for subsequent modules."
          chapterTitle3="2.3 Key Terms"
          chapterDesc3="Navigate the complex language of investing by acquiring a solid understanding of key terms and jargon. From bull markets to dividends, participants will become familiar with the terminology commonly used in financial discussions. This foundation is essential for effective communication and comprehension within the investment community."
        />
        <SubModuleItem 
          headingID="headingThree" collapseID="collapseThree" target="#collapseThree"
          submoduleTitle="3. Understanding Market Basics" videoId="8Ij7A1VCB7I" videoUrl="https://www.youtube.com/watch?v=8Ij7A1VCB7I"
          chapterTitle1="3.1 Definition and Significance of Investing"
          chapterDesc1="Investing is the act of allocating resources, typically money, with the expectation of generating a return or profit over time. Unlike saving, which involves the preservation of capital, investing aims to grow wealth and achieve financial goals. Understanding the significance of investing is crucial for individuals seeking to build a secure financial future and achieve long-term financial objectives."
          chapterTitle2="3.2 Introduction to Financial Markets"
          chapterDesc2="Financial markets serve as the central hub for buying and selling financial instruments. Explore the functions of financial markets, including primary and secondary markets. Understand the role of financial intermediaries, such as brokers, in facilitating transactions. Gain an overview of the diverse range of financial instruments traded in these markets, laying the groundwork for subsequent modules."
          chapterTitle3="3.3 Key Terms"
          chapterDesc3="Navigate the complex language of investing by acquiring a solid understanding of key terms and jargon. From bull markets to dividends, participants will become familiar with the terminology commonly used in financial discussions. This foundation is essential for effective communication and comprehension within the investment community."
        />
        

      </div>
    </>
  );
}

export default SubModule;
