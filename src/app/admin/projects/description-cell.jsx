"use client";

import { useState } from "react";

export default function DescriptionCell({ description }) {
  const [expanded, setExpanded] = useState(false);

  const preview = description.split(/\s+/).slice(0, 3).join(" ");
  const hasMore = description.trim().split(/\s+/).length > 3;

  return (
    <div className="max-w-56">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="block w-full text-left text-sm"
        aria-expanded={expanded}
      >
        <span
          className={
            expanded
              ? "block max-h-24 overflow-y-auto whitespace-normal break-words text-muted-foreground"
              : "block truncate text-muted-foreground"
          }
        >
          {expanded ? description : preview}
          {!expanded && hasMore && "..."}
        </span>
      </button>
    </div>
  );
}
