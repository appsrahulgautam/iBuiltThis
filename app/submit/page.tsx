"use client";

import SectionHeader from "@/components/common-components/sectionheader";
import { FormField } from "@/components/common-components/textinput";
import { Button } from "@/components/ui/button";
import { Sparkle, SparkleIcon } from "lucide-react";
import { useActionState } from "react";
import { MyFormState } from "@/lib/types";
import { submitProject } from "@/lib/cruds";
import { cn } from "@/lib/utils";

const initialState: MyFormState = {
  success: false,
  error: "",
  message: "",
};

export default function Submit() {
  //todo this is important
  //
  const [state, formAction, isPending] = useActionState(
    submitProject,
    initialState
  );

  const { error, message, success } = state;

  return (
    <form action={formAction}>
      <section className="wrapper py-20">
        <SectionHeader
          showViewAll={false}
          icon={Sparkle}
          description="Share your creation with the community. Your submission will be reviewed before going live."
          title="Submit your Product"
        />

        <div className="flex flex-col py-10 px-10">
          {message && (
            <div
              className={cn(
                "p-4 rounded-lg border",
                success
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-destructive/10 border-destructive text-destructive"
              )}
              role="alert"
              aria-live="polite"
            >
              {message}
            </div>
          )}
          <FormField
            label="Product Name"
            name="name"
            id="name"
            placeholder="My awesome product name"
            onChange={() => {}}
            required
          />

          <FormField
            label="Slug"
            name="slug"
            id="slug"
            placeholder="slug-name"
            onChange={() => {}}
            required
            helperText="URL-friendly version of your product name"
          />

          <FormField
            label="Tagline"
            name="tagline"
            id="tagline"
            placeholder="Tag line"
            onChange={() => {}}
            required
          />

          <FormField
            label="Description"
            name="description"
            id="description"
            placeholder="Tell us more about the project"
            onChange={() => {}}
            required
            textarea={true}
          />

          <FormField
            label="Website URL"
            name="websiteurl"
            id="websiteurl"
            placeholder="https://xxxxxxx.com"
            onChange={() => {}}
            required
            helperText="Enter your product's website or landing page"
          />

          <FormField
            label="Tags"
            name="tags"
            id="tags"
            placeholder="AI, SaaS, Modern etc."
            onChange={() => {}}
            required
            helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
          />

          {message && (
            <div
              className={cn(
                "p-4 rounded-lg border",
                success
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-destructive/10 border-destructive text-destructive"
              )}
              role="alert"
              aria-live="polite"
            >
              {message}
            </div>
          )}

          {isPending == false ? (
            <Button
              type="submit"
              variant={"default"}
              className="space-y-2 my-10 animation_popup_style"
            >
              <SparkleIcon /> Submit Project
            </Button>
          ) : (
            <Button
              type="submit"
              variant={"default"}
              className="space-y-2 my-10"
            >
              <SparkleIcon /> Submitting your product...
            </Button>
          )}
        </div>
      </section>
    </form>
  );
}
