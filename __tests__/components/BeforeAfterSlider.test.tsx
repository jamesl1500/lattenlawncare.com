import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { galleryProjects } from "@/lib/gallery";

const project = galleryProjects[0];

describe("BeforeAfterSlider", () => {
  it("renders both photos with their alt text", () => {
    render(
      <BeforeAfterSlider
        title={project.title}
        before={project.before}
        after={project.after}
        width={project.width}
        height={project.height}
      />,
    );

    expect(screen.getByAltText(project.before.alt)).toBeInTheDocument();
    expect(screen.getByAltText(project.after.alt)).toBeInTheDocument();
  });

  it("moves the divider when the range input changes", () => {
    const { container } = render(
      <BeforeAfterSlider
        title={project.title}
        before={project.before}
        after={project.after}
        width={project.width}
        height={project.height}
      />,
    );

    const slider = screen.getByRole("slider", { name: new RegExp(project.title) });
    const wrapper = container.querySelector(".ba-slider") as HTMLElement;

    expect(wrapper.style.getPropertyValue("--ba-position")).toBe("50%");

    fireEvent.change(slider, { target: { value: "20" } });

    expect(wrapper.style.getPropertyValue("--ba-position")).toBe("20%");
    expect(slider).toHaveAttribute("aria-valuetext", "20% before photo visible");
  });
});

describe("BeforeAfterGallery", () => {
  it("renders a captioned card for each project", () => {
    render(<BeforeAfterGallery projects={galleryProjects} />);

    for (const item of galleryProjects) {
      expect(screen.getByRole("heading", { name: item.title })).toBeInTheDocument();
    }
  });

  it("discloses when illustrations are shown instead of real photos", () => {
    render(<BeforeAfterGallery projects={[{ ...project, illustration: true }]} />);
    expect(screen.getByText(/illustrations shown/i)).toBeInTheDocument();
  });

  it("hides the illustration note once real photos are used", () => {
    render(<BeforeAfterGallery projects={[{ ...project, illustration: false }]} />);
    expect(screen.queryByText(/illustrations shown/i)).not.toBeInTheDocument();
  });
});
