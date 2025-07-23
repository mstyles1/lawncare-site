export default function ClientForm() {
  return (
    <div className="form-box">
      <form
        action="https://formspree.io/f/xrbklboa"
        method="POST"
        encType="multipart/form-data"
      >
        <h2>🌿 Get a Free Lawn Care Estimate</h2>
        <div className="form-disclosure">
          Just answer a few quick questions to help us get a feel for your
          property. If your yard is <strong>1 acre or more,</strong> we’ll reach
          out to schedule an <strong>in-person quote.</strong>
        </div>

        <h3>Contact Info</h3>
        <label>Name</label>
        <input name="name" placeholder="John Smith" required />
        <label>Phone Number</label>
        <input name="phone" placeholder="(123) 456-7890" required />
        <label>Email</label>
        <input name="email" placeholder="john@email.com" type="email" required />

        <label>Street Address</label>
        <input name="street" placeholder="123 Main St" required />
        <label>Apt, Suite, etc. (optional)</label>
        <input name="apt" placeholder="Apt 1B" />
        <label>City</label>
        <input name="city" placeholder="City" required />
        <label>State</label>
        <input name="state" placeholder="State" required />
        <label>ZIP Code</label>
        <input name="zip" placeholder="ZIP Code" required />

        <h3>About Your Yard</h3>
        <label>How big is your yard?</label>
        <select name="yardSize" required>
          <option value="">Select one</option>
          <option value="¼ acre or less">¼ acre or less</option>
          <option value="½ acre">½ acre</option>
          <option value="¾ acre">¾ acre</option>
          <option value="1 acre or more">1 acre or more</option>
        </select>

        <label>Do you have a gate we’ll need to go through?</label>
        <select name="gateSize">
          <option value="">Select one</option>
          <option value="No gate">No gate</option>
          <option value="Small gate">Small (less than 3ft)</option>
          <option value="Medium gate">Medium (3-4ft)</option>
          <option value="Large gate">Large (4ft+)</option>
        </select>

        <input
          name="gateInstructions"
          placeholder="Gate code/instructions (if any)"
        />

        <h3>Terrain</h3>
        <label>Select all that describe your yard.</label>
        <div>
          {["Flat", "Slight hills", "Sloped or steep areas", "Bumpy spots"].map(
            (option) => (
              <div className="checkbox-row" key={option}>
                <span>{option}</span>
                <input type="checkbox" name="terrain" value={option} />
              </div>
            )
          )}
        </div>

        <h3>Yard Features</h3>
        <div>
          {[
            "Trampoline",
            "Pool",
            "Garden beds",
            "Playground equipment",
            "Tree stumps or large roots",
          ].map((feature) => (
            <div className="checkbox-row" key={feature}>
              <span>{feature}</span>
              <input type="checkbox" name="yardFeatures" value={feature} />
            </div>
          ))}
          <input name="yardFeatures" placeholder="Other" />
        </div>

        <h3>Pets</h3>
        <label>Any outdoor pets?</label>
        <div>
          <div className="checkbox-row">
            <span>Yes</span>
            <input type="radio" name="hasPets" value="Yes" />
          </div>
          <div className="checkbox-row">
            <span>No</span>
            <input type="radio" name="hasPets" value="No" />
          </div>
          <div className="form-disclosure">
            For the safety of your pets and our crew, all pets must be secured
            prior to our visit.
          </div>
        </div>

        <h3>Services</h3>
        <div>
          <div className="checkbox-row">
            <span>Regular mowing & edging</span>
            <input
              type="checkbox"
              name="services"
              value="Regular mowing & edging"
            />
          </div>
          <div className="checkbox-row">
            <span>Weed control</span>
            <input type="checkbox" name="services" value="Weed control" />
          </div>
          <div className="checkbox-row">
            <span>Mulch installation</span>
            <input type="checkbox" name="services" value="Mulch installation" />
          </div>
          <div className="checkbox-row">
            <span>Yard cleanup</span>
            <input type="checkbox" name="services" value="Yard cleanup" />
          </div>
          <div className="checkbox-row">
            <span>Aeration</span>
            <input type="checkbox" name="services" value="Aeration" />
          </div>
          <input name="services" placeholder="Other" />
        </div>

        <h3>Other Notes</h3>
        <textarea name="otherNotes" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
