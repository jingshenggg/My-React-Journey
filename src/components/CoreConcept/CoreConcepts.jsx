import CoreConcepts from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function () {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
