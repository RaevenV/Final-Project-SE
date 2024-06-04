import ModuleCart from "../../Universal Components/Module Cart/moduleCart"
import "./trendingModules.css"

function TrendingModules () {
    return (
      <>
        <div className="trending-modules-container">
          <h1 className="trending-modules-title">Trending Modules</h1>
          <h3 className="trending-modules-description">
            Elevate your financial expertise with our intensive journeys.
          </h3>
          <div className="trending-modules-wrapper">
            <div className="trending-modules-1">
              <ModuleCart
                img="/trendingModules1.jpg"
                title="Investing Fundamentals"
                description="Dive into investing essentials: risk assessment, portfolio diversification, and fundamental analysis for achieving financial success."
                link={`/modulePreview/Investing Fundamentals`}
              />
            </div>
            <div className="trending-modules-2">
              <ModuleCart
                img="/trendingModules2.jpg"
                title="Money Management"
                description={
                  '"Unlock effective money management with our guide. Whether beginner or expert, grasp key concepts like budgeting, investments, and retirement planning."'
                }
                link={`/modulePreview/Money Management`}
              />
            </div>
            <div className="trending-modules-3">
              <ModuleCart
                img="/trendingModules3.jpg"
                title="Lead Yourself"
                description="Master Self-Leadership for Success. Self-leadership is paramount. Explore proven strategies for self-motivation, goal-setting, and resilience."
                link={`/modulePreview/Lead Yourself`}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default TrendingModules