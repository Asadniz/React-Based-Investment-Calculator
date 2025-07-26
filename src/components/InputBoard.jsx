import Option from "./Option";
export default function InputBoard({ handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Option
          label="initialInvestment"
          id="initialInvestment"
          handleChange={handleChange}
        />
        <Option
          label="annualInvestment"
          id="annualInvestment"
          handleChange={handleChange}
        />
        <Option
          label="expectedReturn"
          id="expectedReturn"
          handleChange={handleChange}
        />
        <Option label="duration" id="duration" handleChange={handleChange} />
      </div>
    </section>
  );
}
