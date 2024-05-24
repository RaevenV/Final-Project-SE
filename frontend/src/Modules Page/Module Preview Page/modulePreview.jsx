import React from "react";
import HomeNavbar from "../../Universal Components/navbars/homeNavbar";
import Footer from "../../Universal Components/footer";
import ModuleDesc from "./ModuleDesc/moduleDesc";
import SubModuleItem from "./SubModule/subModuleItem"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./SubModule/subModule.css"

function ModulePreview() {
  const {searchID} = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const findData = async () => {   
      const findQuery = query(
        collection(db, "module"),
        where("modTitle", "==", searchID)
      );

      try {
        const foundDB = await getDocs(findQuery);
        let modules = [];

        for (const doc of foundDB.docs) {
          const data = doc.data();
          const subModuleRef = collection(doc.ref, "subModule");
          const subModule = await getDocs(subModuleRef);

          let subModules = [];

          subModule.forEach((subModuleDoc) => {
            const subData = subModuleDoc.data();
            subModules.push({...subData})
          });

          modules.push({
            id: doc.id,
            moduleId: data.modNum,
            bookReference: data.bookRef,
            mentors: data.mentors,
            moduleDescription: data.modDesc,
            moduleImg: data.modImage,
            moduleTitle: data.modTitle,
            moduleCategory: data.moduleCategory,
            subModules: subModules,
          });
        }

        setResult(modules);
        console.log(modules);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
      }
    };

    findData();
  }, [searchID]);

  const firstModule = result.length > 0 ? result[0] : null;
  return (
    <>
      <HomeNavbar />
      <div className="profilePage-container">
        {firstModule && (
          <div className="module-desc-container">
          <img src={firstModule.moduleImg}/>
          <div className="description-text">
            <div className="desc-title">{firstModule.moduleTitle}</div>
            <div className="desc-body">{firstModule.moduleDescription}</div>
          </div>
        </div>
        )}
        <div className="accordion" id="accordionExample">
          {result.map((module, moduleIndex) => (
            module.subModules.map((subModule, subModuleIndex) => (
              <SubModuleItem
                key={`${moduleIndex}-${subModuleIndex}`}
                headingID={`heading${moduleIndex}-${subModuleIndex}`}
                collapseID={`collapse${moduleIndex}-${subModuleIndex}`}
                target={`#collapse${moduleIndex}-${subModuleIndex}`}
                submoduleTitle={subModule.title}
                videoId={subModule.videoId}
                videoUrl={subModule.videoLink}
                chapterTitle1={subModule.chapterTitle1}
                chapterDesc1={subModule.chapterDesc1}
                chapterTitle2={subModule.chapterTitle2}
                chapterDesc2={subModule.chapterDesc2}
                chapterTitle3={subModule.chapterTitle3}
                chapterDesc3={subModule.chapterDesc3}
              />
            ))
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ModulePreview;
