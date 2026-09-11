import type { Metadata } from "next";

import { EmptyState } from "@/components/feedback/EmptyState";
import { ErrorState } from "@/components/feedback/ErrorState";
import { LoadingState } from "@/components/feedback/LoadingState";
import { SuccessState } from "@/components/feedback/SuccessState";
import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

export const metadata: Metadata = {
  title: "Component showcase",
  description: "Development preview of shared e-commerce UI components.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComponentShowcasePage() {
  return (
    <main id="main-content" tabIndex={-1} className="py-12 outline-none sm:py-16 lg:py-24">
      <Container>
        <Stack gap="xl">
          <header className="grid max-w-3xl gap-4">
            <Badge>Development only</Badge>
            <h1 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
              Shared component showcase
            </h1>
            <p className="text-text-secondary sm:text-lg">
              A review surface for Milestone 1 primitives and accessible UI
              states. This is not a storefront page.
            </p>
          </header>

          <Breadcrumb
            items={[
              { label: "Foundation", href: "/" },
              { label: "Components" },
            ]}
          />

          <ShowcaseSection
            title="Buttons"
            description="Actions and navigation share the same visual language while retaining their correct semantics."
          >
            <Card>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary action</Button>
                <Button variant="ghost">Ghost action</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
                <Button isLoading>Save changes</Button>
                <ButtonLink href="/" variant="secondary">
                  Foundation link
                </ButtonLink>
              </div>
            </Card>
          </ShowcaseSection>

          <ShowcaseSection
            title="Form controls"
            description="Native controls with persistent labels, descriptions, validation messaging, and disabled states."
          >
            <Card>
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  id="showcase-name"
                  name="name"
                  label="Display name"
                  placeholder="Enter a name"
                  helperText="Shown here as clearly labeled mock content."
                  required
                />
                <Input
                  id="showcase-email"
                  name="email"
                  type="email"
                  label="Email address"
                  defaultValue="invalid-address"
                  error="Enter an email address in the expected format."
                />
                <Select
                  id="showcase-category"
                  name="category"
                  label="Example category"
                  helperText="This selection is not saved."
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="one">Example one</option>
                  <option value="two">Example two</option>
                </Select>
                <Input
                  id="showcase-disabled"
                  name="disabled"
                  label="Disabled input"
                  defaultValue="Unavailable"
                  disabled
                />
                <Textarea
                  id="showcase-notes"
                  name="notes"
                  label="Example notes"
                  placeholder="Add optional notes"
                  helperText="Use the resize handle when more room is needed."
                  className="md:col-span-2"
                />
                <div className="grid content-start gap-4">
                  <Checkbox
                    id="showcase-checkbox"
                    name="preference"
                    label="Example preference"
                    description="A native checkbox with supporting text."
                    defaultChecked
                  />
                  <Checkbox
                    id="showcase-checkbox-disabled"
                    name="disabled-preference"
                    label="Disabled preference"
                    disabled
                  />
                </div>
              </div>
            </Card>
          </ShowcaseSection>

          <ShowcaseSection
            title="Content primitives"
            description="Reusable hierarchy for sections, cards, badges, and supporting content."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <Card>
                <Stack gap="sm">
                  <Badge tone="success">Available</Badge>
                  <h3 className="font-heading text-xl font-semibold">
                    Surface card
                  </h3>
                  <p className="text-sm text-text-secondary">
                    A clean white surface with consistent padding and a subtle
                    border.
                  </p>
                </Stack>
              </Card>
              <Card tone="subtle">
                <Stack gap="sm">
                  <Badge tone="warning">Review</Badge>
                  <h3 className="font-heading text-xl font-semibold">
                    Subtle card
                  </h3>
                  <p className="text-sm text-text-secondary">
                    A quieter surface for secondary or grouped information.
                  </p>
                </Stack>
              </Card>
              <Card>
                <Stack gap="sm">
                  <Badge tone="error">Unavailable</Badge>
                  <h3 className="font-heading text-xl font-semibold">
                    Status badge
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Status is always written in text and never communicated by
                    color alone.
                  </p>
                </Stack>
              </Card>
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            title="Feedback states"
            description="Concise status messages with appropriate live-region behavior."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <LoadingState description="Preparing the example content." />
              <EmptyState
                title="Nothing here yet"
                description="This reusable state can explain what is missing without implying backend behavior."
                action={
                  <ButtonLink href="/" variant="secondary" size="sm">
                    Return to foundation
                  </ButtonLink>
                }
              />
              <ErrorState description="The example could not be displayed." />
              <SuccessState description="The example state completed successfully." />
            </div>
          </ShowcaseSection>
        </Stack>
      </Container>
    </main>
  );
}

type ShowcaseSectionProps = {
  children: React.ReactNode;
  description: string;
  title: string;
};

function ShowcaseSection({
  children,
  description,
  title,
}: ShowcaseSectionProps) {
  return (
    <section className="grid gap-6 border-t border-border pt-8 sm:pt-10">
      <SectionHeading title={title} description={description} />
      {children}
    </section>
  );
}
