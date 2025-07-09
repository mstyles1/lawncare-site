import React, { useState } from "react";

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    yardSize: "",
    gateSize: "",
    gateInstructions: "",
    terrain: "",
    yardFeatures: [],
    hasPets: "",
    services: [],
    otherNotes: "",
  });

  const [message, setMessage] = useState("");
  const [otherService, setOtherService] = useState("");
  const [otherFeature, setOtherFeature] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "yardFeatures") {
      setFormData((prev) => ({
        ...prev,
        yardFeatures: checked
          ? [...prev.yardFeatures, value]
          : prev.yardFeatures.filter((v) => v !== value),
      }));
    } else if (type === "checkbox" && name === "services") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((v) => v !== value),
      }));
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xrbklboa", {
        /*formspree link goes here*/ method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Submitted! Thanks for contacting us.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          yardSize: "",
          gateSize: "",
          gateInstructions: "",
          terrain: "",
          yardFeatures: [],
          hasPets: "",
          services: [],
          otherNotes: "",
        });
      } else {
        const data = await res.json();
        setMessage(data.error || "Submission failed.");
      }
    } catch (error) {
      setMessage("Error connecting to Formspree.");
    }
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <h2>🌿 Get a Free Lawn Care Estimate</h2>

        <div className="form-disclosure">
          <p>
            Just answer a few quick questions to help us get a feel for your
            property. If your yard is <b>1 acre or larger,</b> we will reach out to
            schedule an <b>in-person quote.</b>
          </p>
        </div>

        <h3>Contact Info</h3>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Property Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <h3>About Your Yard</h3>
        <label>How big is your yard?</label>
        <select
          name="yardSize"
          value={formData.yardSize}
          onChange={handleChange}
          required
        >
          <option value="">Select one</option>
          <option value="¼ acre or less">¼ acre or less</option>
          <option value="½ acre">½ acre</option>
          <option value="¾ acre">¾ acre</option>
          <option value="1 acre or more">1 acre or more</option>
        </select>

        <label>Do you have a gate we’ll need to go through?</label>
        <select
          name="gateSize"
          value={formData.gateSize}
          onChange={handleChange}
        >
          <option value="">Select one</option>
          <option value="No gate">No gate</option>
          <option value="Small gate">
            Yes – small (less than 3 feet wide)
          </option>
          <option value="Medium gate">Yes – medium (3 to 4 feet wide)</option>
          <option value="Large gate">Yes – large (wider than 4 feet)</option>
          <option value="Not sure">Not sure</option>
        </select>

        <input
          name="gateInstructions"
          placeholder="Gate code/instructions (if any)"
          value={formData.gateInstructions}
          onChange={handleChange}
        />

        <label>What’s the terrain like?</label>
        <select name="terrain" value={formData.terrain} onChange={handleChange}>
          <option value="">Select one</option>
          <option value="Flat">Flat</option>
          <option value="Slight hills">Slight hills</option>
          <option value="Steep or sloped areas">Steep or sloped areas</option>
          <option value="Uneven or bumpy spots">Uneven or bumpy spots</option>
        </select>

        <label>Anything in the yard we should know about?</label>
        <div>
          {[
            "Trampoline",
            "Pool or pond",
            "Garden beds",
            "Playground equipment",
            "Tree stumps or large roots",
          ].map((feature) => (
            <div className="checkbox-row" key={feature}>
              <span>{feature}</span>
              <input
                type="checkbox"
                name="yardFeatures"
                value={feature}
                checked={formData.yardFeatures.includes(feature)}
                onChange={handleChange}
              />
            </div>
          ))}
          <input
            name="otherFeature"
            value={otherFeature}
            placeholder="Other"
            onChange={(e) => setOtherFeature(e.target.value)}
            onBlur={() => {
              if (
                otherFeature &&
                !formData.yardFeatures.includes(otherFeature)
              ) {
                setFormData((prev) => ({
                  ...prev,
                  yardFeatures: [...prev.yardFeatures, otherFeature],
                }));
              }
            }}
          />
        </div>

        <h3>Services</h3>
        <label>What services are you looking for?</label>
        <div>
          {[
            "Regular mowing & edging",
            "Weed control",
            "Mulch installation",
            "Yard cleanup",
            "Aeration",
          ].map((service) => (
            <div className="checkbox-row" key={service}>
              <span>{service}</span>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
              />
            </div>
          ))}
          <input
            name="otherService"
            value={otherService}
            placeholder="Other"
            onChange={(e) => setOtherService(e.target.value)}
            onBlur={() => {
              if (otherService && !formData.services.includes(otherService)) {
                setFormData((prev) => ({
                  ...prev,
                  services: [...prev.services, otherService],
                }));
              }
            }}
          />
        </div>

        <label>Anything else you'd like us to know?</label>
        <textarea
          name="otherNotes"
          value={formData.otherNotes}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
}
