import React from "react";
import YouTubeThumbnail from "./YoutubeThumbnail";

function SubModuleItem(props) {
  return (
    <>
      <div className="accordion-item">
          <div className="accordion-header" id={props.headingID}>
            <button className="accordion-button header-text collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="true" aria-controls={props.collapseID} style={{fontSize:'20px'}}>
              <strong className="bold-strong">{props.submoduleTitle}</strong>
            </button>
          </div>
          <div id={props.collapseID} className="accordion-collapse collapse" aria-labelledby={props.headingID} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="submodule">
                <div className="submodule-section">
                  <strong className="semibold-strong">Video</strong>
                  <YouTubeThumbnail videoId={props.videoId} videoUrl={props.videoUrl}/>
                </div>
                <div className="submodule-section">
                  <strong className="semibold-strong">{props.chapterTitle1}</strong>
                  <div className="submodule-body" style={{fontSize:"14px", marginLeft:"20px", marginTop:"5px"}}>
                    {props.chapterDesc1}
                  </div>
                </div>
                <div className="submodule-section">
                  <strong className="semibold-strong">{props.chapterTitle2}</strong>
                  <div className="submodule-body" style={{fontSize:"14px", marginLeft:"20px", marginTop:"5px"}}>
                    {props.chapterDesc2}
                  </div>
                </div>
                <div className="submodule-section">
                  <strong className="semibold-strong">{props.chapterTitle3}</strong>
                  <div className="submodule-body" style={{fontSize:"14px", marginLeft:"20px", marginTop:"5px"}}>
                    {props.chapterDesc3}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default SubModuleItem;
