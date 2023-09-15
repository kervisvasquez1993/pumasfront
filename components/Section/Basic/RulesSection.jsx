import IconWithText from "./IconWithText";

const RulesSection = ({ title, rules }) => {
    return (
      <div className="container-rules">
        <h3 className="rules-title">{title}</h3>
  
        <div className="rules_text">
          {rules.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="icons-container">
          {rules.map((rule, index) => (
            <IconWithText key={index} imageSrc={rule.imageSrc} text={rule.text} />
          ))}
        </div>
      </div>
    );
  };
  
export default RulesSection;
