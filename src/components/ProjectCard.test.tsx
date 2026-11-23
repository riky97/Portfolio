import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Project } from "../types/project";
import { ProjectCard } from "./ProjectCard";

const project: Project = {
  title: "Demo App",
  description: "A demo project.",
  image: "/projects/demo.png",
  tags: ["React", "TypeScript"],
  liveUrl: "https://example.com/",
};

describe("ProjectCard", () => {
  it("renders title, description, tags and image alt text", () => {
    render(<ProjectCard project={project} />);

    expect(screen.getByRole("heading", { name: "Demo App" })).toBeInTheDocument();
    expect(screen.getByText("A demo project.")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByAltText("Demo App — preview screenshot")).toHaveAttribute(
      "src",
      "/projects/demo.png",
    );
  });

  it("links to the live demo in a new tab", () => {
    render(<ProjectCard project={project} />);

    const link = screen.getByRole("link", { name: "Live demo" });
    expect(link).toHaveAttribute("href", "https://example.com/");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("omits the links that were not provided", () => {
    render(<ProjectCard project={project} />);

    expect(screen.queryByRole("link", { name: "Source" })).not.toBeInTheDocument();
  });
});
