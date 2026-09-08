export default function Home() {
  return (
    <main className="foundation-shell">
      <section className="foundation-preview" aria-labelledby="foundation-title">
        <p className="foundation-eyebrow">Milestone 0</p>
        <h1 id="foundation-title">E-commerce UI foundation</h1>
        <p className="foundation-copy">
          Next.js, TypeScript, Tailwind CSS, Poppins, and Inter are configured.
          The project is ready for its shared design-system components.
        </p>

        <ul className="foundation-tokens" aria-label="Configured color tokens">
          <li className="foundation-token">
            <span
              className="foundation-swatch foundation-swatch-primary"
              aria-hidden="true"
            />
            <span>Primary</span>
            <code>#092328</code>
          </li>
          <li className="foundation-token">
            <span
              className="foundation-swatch foundation-swatch-background"
              aria-hidden="true"
            />
            <span>Background</span>
            <code>#F3F4F4</code>
          </li>
        </ul>
      </section>
    </main>
  );
}
